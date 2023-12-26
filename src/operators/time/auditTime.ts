import { Observable, asyncScheduler, from, fromEvent, interval} from 'rxjs';
import {  auditTime, distinctUntilChanged, map, pluck, sample, sampleTime, tap, throttleTime} from 'rxjs/operators'
/*

source%   ---(a)(b)(c)---(b)--(x)--(c)(x)|------>
                    auditTime(1000)
salida -     ------(c)--------(x)--------|------>
               ------>  ------>   -------->
              1seg      1seg        1seg
si se emiten valores, auditTime espera 1 segundo antes de emitir el último valor
*/

const click1$ = fromEvent<MouseEvent>(document, 'click');

click1$.pipe(
    tap(val=> console.log('tap', val)),
    sampleTime(5000),//mas eficiente antes de los demas metodos
    map(({x,y})=>({x,y})),

).subscribe({
    next: val => console.log('nextsample:', val),
    complete: ()=> console.log('complete')
})

//sample time lo hace en intervalos regulares audit time lo hace luego de un periodo de inactividad


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(val=> console.log('tap', val)),
    auditTime(5000),
    map(({x,y})=>({x,y})),
).subscribe({
    next: val => console.log('nextAudit:', val),
    complete: ()=> console.log('complete')
})






