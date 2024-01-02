import { Observable, concat, from, fromEvent, interval, merge, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {endWith, startWith, take, tap} from 'rxjs/operators'

/* 

CONCAT - FUNCION

obs$   --(a)(b)---|--------------------->
obs$              -- (x)(y)--|---------->
obs$                          --(z)-| -->

          concat(obs1$, obs2$, obs3$)

salida$ -(a)(b)-------(x)(y)----(z)-|----->


Espera que acabe el obserbable anterior 


MERGE
obs$   --(a)------(b)-------(c)|--------------------->
obs$   -----(x)-------(y)----------(f)-|---------->


          concat(obs1$, obs2$, obs3$)

salida$ -(a)(x)----(b)-(x)--(c)----(f)-|----->

no se competa hasta que acabe el ultimo obs


*/

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1,2,3]
).subscribe(console.log)


//MERGE

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$,
    click$
).subscribe(console.log)




























