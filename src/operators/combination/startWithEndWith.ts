import { Observable, from, fromEvent, interval, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {endWith, startWith, tap} from 'rxjs/operators'

/* 

STARTWITH
source$ -----------(1)-------(2)------(3)----|--->
          startWith('a')

salida$ -(a)-------(1)-------(2)------(3)-----|--->-


de forma asincrona realiza la emicion a
empieza con el argumento que le mendes


ENDWITH
source$ ---(1)-------(2)------(3)--------|--->
          endWith('s')

salida$ ---(1)-------(2)------(3)----(s)-|--->-

*/

const numeros$ = of(1,2,3).pipe(
    startWith('a'),
    endWith('x')
)

numeros$.subscribe(console.log);

//ejemplo2

//referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading'),
loadingDiv.innerHTML = 'Cargando..'

const body = document.querySelector('body');

//streams
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe(resp=> {
    if (resp === true) {
        body.append(loadingDiv)
        
        
    } else {
        document.querySelector('.loading').remove();
        
    }
    console.log(resp);
})























