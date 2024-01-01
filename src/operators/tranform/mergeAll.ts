import { Observable, fromEvent, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, debounceTime, map, mergeAll, pluck} from 'rxjs/operators'



/* 

source$ --|----|-----------------------|--->
          |    \-----------(e)----------(f)-----|-->
          \----(a)-(b)-(c)------(d)---|---->  
          mergeAll()
salida$ -------(a)-(b)-(c)--(c)---(d)---(f)-----|--->-


unificar obserbales en una sola salida 
transforma el flujo para observar directamente los resultados de las peticiones
a.k.a > flatterning operator / operador de aplanamiento

*/


//referecias 
const body = document.querySelector('body')
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList)

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    //no lo haga por cada tecla
    debounceTime(500),
    //extrae el value del input
    map(event => event.target['value']),
    //hacer la segunda peticion en funcion al evento
    map(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),

    //se va a subribir y emitir dichos valores
    //mergeAll(),

).subscribe( resp => {
    console.log(resp);
})
















