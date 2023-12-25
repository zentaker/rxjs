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
    //tap(x => console.log('despues', x)),
    //partial observer
    tap({//depurar el codigo
        //se va a ejecutar cada vez que el tap reciva un valor 
        next: valor => console.log('despues', valor),
        complete: ()=> console.log('se termino todo')
    })


).subscribe(val => console.log('subs', val));

