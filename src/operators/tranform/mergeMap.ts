import { Observable, fromEvent, interval, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, debounceTime, map, mergeAll, mergeMap, pluck, take, takeUntil} from 'rxjs/operators'



/* 

source$ ---(a)----(x)-------(r)----------|--->
          mergeMap((val)=> interval(1000))
            |      |         |
            |      |         v
            |      v     interval$ ------(r)|--->
            v   interval$ ---(a)-----(b)---------(c)-|-->
        interval$ --(0)-(1)------(2)---------(3)---------|-->
salida$ ------------(0)-(1)--(a)-(2)-(b)-(r)-(3)-(c)--------|--->-


cuando ven que retornan un observable no tranfieren el objeto al subscribe 
lo que emiten es el valor de la subripcion interna 
a.k.a > flatterning operator / operador de aplanamiento

*/

//obserbable
const letras$ = of('a','b','c');

//pasar cada emicion por una funcion espesifica que va aretornar un nuevo observable
letras$.pipe(
    mergeMap((letra)=> interval(1000).pipe(
        map(i => letra +i),
        //los 3 se completan al tercer 
        take(3)
    ) )
).subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
})


//cuanto tiempo pasa el usuario manteniendo aprecionado
const mouseDown$ = fromEvent(document, 'mousedown')
const mouseup$ = fromEvent(document, 'mouseup')
const interval$ = interval();

//cuando la persona hace click
mouseDown$.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil(mouseup$)
    )),//acava cuando el mpuseup
).subscribe(console.log)


//Ejemplo2

//referecias 
const body = document.querySelector('body')
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList)

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


const url ='https:/httpbin.org/delay/1?arg='; //fernando
input$.pipe(
    map(event => event.target['value']),
    //lo va a aplanar
    mergeMap(texto => ajax.getJSON(url+texto))//se subscribe a cuanto obserbbles emita
).subscribe(console.log)





















