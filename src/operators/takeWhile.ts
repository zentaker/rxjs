
import { fromEvent} from 'rxjs';
import { first, map, takeWhile, tap} from 'rxjs/operators'
/*

obd%   ---(2)-(3)-(4)-(5)----|------>
             takeWhile(x=> x<4)
salida ---(2)-(3)|------------------>


*/
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x,y})=> ({x,y})),
    takeWhile(({y}) => y <= 150,true),//para devolver el ultimo valor 
).subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
})



