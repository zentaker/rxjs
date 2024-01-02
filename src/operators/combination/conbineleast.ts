import { Observable, combineLatest, concat, from, fromEvent, interval, merge, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {endWith, startWith, take, tap} from 'rxjs/operators'

/* 



obs$   --(a)-----(b)-------------(c)-(d)-|------>
obs$   -----(1)-----(2)-(3)-(4)-|------->

          combineLatest(obs1$, obs2$)

salida$ ----(a1)-(b1)(b2)(b3)(b4)-(c4)-(d4)-|------>




*/


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest(
    keyup$,
    click$
).subscribe(console.log)




