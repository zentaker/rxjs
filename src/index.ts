
import { Observable, asyncScheduler, from, fromEvent} from 'rxjs';
import {  distinctUntilChanged, pluck, throttleTime} from 'rxjs/operators'
/*

source%   ---(a)(x)(y)----(b)--------(c)---------(c)(x)(f)------|------>
                                throttleTime(1000)
salida -     --(a)----------(b)--------(c)---------(c)------------|------>
                ----->        ------>     ------>    ------->
                1seg           1seg       1seg       1seg

*/

//el ultimo valor emitido en un intervalo de tiempo 



