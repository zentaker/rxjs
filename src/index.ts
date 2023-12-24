import { fromEvent, range } from "rxjs";
import { map } from 'rxjs/operators'


/*

obd%   ---(1)-(2)------|------>
       map(x=> 10*x)
salida ---(10)-(20)----|------------>


*/

range(1,5).pipe(
    map<number,string>(valor => (valor * 10).toString())
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map( event => event.code))
keyupCode$.subscribe(code=> console.log('map', code))


/*

obd%   ---(v:1)-(v:2)------|------>
       pluck('v')
salida ---(1)----(2)----|------------>


*/





