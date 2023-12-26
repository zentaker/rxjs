import { Observable, asyncScheduler, from, fromEvent, interval} from 'rxjs';
import {  distinctUntilChanged, map, pluck, sample, sampleTime, throttleTime} from 'rxjs/operators'
/*
SAMPLETIME
source%   ---(a)(b)(c)------(b)--------(c)(x)(f)------|------>
                    sampleTime(1000)
salida -     ------(c)------(b)--------------(f)------|------>
             -------->-------->-------->-------->
              1seg    1seg     1seg    1seg

el ultimo valor emitido en un intervalo de tiempo
cada segundo el sample time va a estar emitiendo cual fue el ultimo valor emitido
si no se emitio nada en ese segundo no muestra nada 
nos permite una subripcion que esta pendeinte de sus emiciones en un periodo de tiempo


SAMPLE
interval%   ---(a)---(b)--(c)-----------(d)--------|------>
click%      ------(ev)------(ev)--(ev)------(ev)---|------>
                    sample(click$)
salida -     ------(a)------(c)--------------(d)---|------>



*/


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),//mas eficiente antes de los demas metodos
    map(({x,y})=>({x,y})),

).subscribe(console.log)


//sample
const interval$ = interval(500);
const click2$ = fromEvent(document, 'click')

//subripcion al  interval
interval$.pipe(
    //cuando generas en evento click$ se dispara la muestra de como esta ese obserbable interval$ en ese momento
    sample(click2$)
).subscribe(console.log);








