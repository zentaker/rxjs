import { Observable, combineLatest, concat, forkJoin, from, fromEvent, interval, merge, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, delay, endWith, startWith, take, tap} from 'rxjs/operators'

/* 



obs$   --(a)(b)---------(c)(d)(e)-|--------------------->
obs$   --------(x)-------(g)---(h)--(i)---(j)-|---------->
obs$   -(1)-(2)--(3)--(4)-|---------------------------->

          forkJoin(obs1$, obs2$, obs3$)

salida$ ---------------------------------------(e,j,4)|--->


*/



const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe(delay(3500))

//obserbable
forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe(console.log)


//Ejemplo2
//realizar peticiones ajax de manera simultaea

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'zentaker';

forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    ),
    }).pipe(
        catchError(err=> of(err.message))
    ).subscribe(console.log)





















