import { from, fromEvent, range } from "rxjs";
import { filter, map, mapTo, pluck, tap } from 'rxjs/operators'


/*

obd%   ---(1)---(2)---(3)---(4)----|------>
       tap(x => console.log(x))
salida ---(1)---(2)---(3)---(4)----|------>


*/

const numeros$ = range(1,5);

numeros$.pipe(
    tap(x => {
        console.log('antes',x)
        return 100;
    }),
    map(val => val * 10),
    tap(x => console.log('despues', x))

).subscribe(val => console.log('subs', val));

