
import { fromEvent} from 'rxjs';
import { first, map, tap} from 'rxjs/operators'
/*

obd%   ---(a)-(b)-(c)-(d)----|------>
             first()
salida ---(a)|---------------------->


*/

