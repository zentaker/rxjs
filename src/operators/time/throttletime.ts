
import { Observable, asyncScheduler, from, fromEvent} from 'rxjs';
import {  distinctUntilChanged, pluck, throttleTime} from 'rxjs/operators'
/*

source%   ---(a)(x)(y)----(b)--------(c)---------(c)(x)(f)------|------>
                                throttleTime(1000)
salida -     --(a)----------(b)--------(c)---------(c)------------|------>
                ----->        ------>     ------>    ------->
                1seg           1seg       1seg       1seg

*/

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
).subscribe(console.log)


//ejemplo 2

//ejemplo2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(1500, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);





