
import { Observable, from, fromEvent} from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, pluck} from 'rxjs/operators'
/*

interval%   ---(a)------(b)-(c)-------(d)-----------|------>
             debounceTime(1000)
salida -     --------(a)----------(c)--------(d)----|------>
                -----        ------     ------
                1seg         1seg       1seg

*/

