
import { fromEvent} from 'rxjs';
import { first, map, tap} from 'rxjs/operators'
/*

obd%   ---(a)-(b)-(c)-(d)----|------>
             first()
salida ---(a)|---------------------->


*/
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(()=> console.log('tap')),
    first<MouseEvent>(event => event.clientX >= 300)// first<any, any>() por default
).subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
})


//desestructuracion 
click$.pipe(
    tap<MouseEvent>(console.log),
 /*    map(event => ({
        clientY: event.clientY,
        clientX: event.clientX  
    })), */
    map(({clientY, clientX}) => ({clientY, clientX})),
    first(event => event.clientX >= 300)// quito el <MouseEvent> por que no se recive


).subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
})





