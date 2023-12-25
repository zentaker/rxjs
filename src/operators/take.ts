
import { from, interval, of } from 'rxjs';
import { map, reduce, scan, take, tap } from 'rxjs/operators'
/*

obd%   ---(a)-(b)-(c)-(d)----|------>
             take(2)
salida ---(b)-(b)|------------------>


*/

const numeros$ = of(1,2,3,4,5)


numeros$.pipe(
    //enspecionar el codigo
    tap(console.log),
    //cancela la ejecucion el observable
    take(3)
).subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
})
