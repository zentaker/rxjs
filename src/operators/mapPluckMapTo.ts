import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from 'rxjs/operators'


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

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)
const keyupMapTo$ = keyup$.pipe(
    mapTo('hola ') // devuelve un valor 
)

keyup$.subscribe(console.log);

keyupCode$.subscribe(code=> console.log('map', code))

keyupPluck$.subscribe(code => console.log('pluck', code));

keyupMapTo$.subscribe(code => console.log('mapTo', code))

/*

obd%   ---(v:1)-(v:2)------|------>
       pluck('v')
salida ---(1)----(2)----|------------>
*/







