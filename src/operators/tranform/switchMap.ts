import { Observable, fromEvent, interval, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, debounceTime, map,  switchMap} from 'rxjs/operators'



/* 

source$ ---(a)----(x)-------(r)----------|--->
          switchMap(()=> interval())
            |      |         |
            |      |         v
            |      v     interval$ ------(r)|---------------->
            v   interval$ ---(a)-(b)--|--------------------->
        interval$ --(0)-(1)-|--------------------------------->
salida$ ------------(0)-(1)--(a)-(b)-----(r)--------|--->-


solo mantiene un observador interno activo y el subsrito anterior deja de emitir
cuanso se llama cancela la peticion anterior 
a.k.a > flatterning operator / operador de aplanamiento

*/

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
    switchMap(texto => ajax.getJSON(url+texto))
).subscribe(console.log)





















