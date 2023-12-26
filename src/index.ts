
import { Observable, from} from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged} from 'rxjs/operators'
/*

interval%   ---(1)-(1)-(2)-(3)-(3)|------>
             distinct()
salida -     --(1)-----(2)-(3)----|------>



cuando quiero volver a mostrar valores que ya pasaron

interval%   ---(1)-(2)-(2)-(1)-(3)-(2)|------>
             distinctUntilChanged()
salida      ---(1)-(2)-----(1)-(3)-(2)|------>


va a estar pendiente de una propiedad en espesifica

interval%   ---(k:1)-(k:2)-(k:2)-(k:1)-(k:3)|------>
             distinctUntilKeyChanged('k')
salida      ---(k:1)-(k:2)-------(k:1)-(k:3|------>


*/

