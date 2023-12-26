
import { Observable, from, fromEvent} from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, pluck} from 'rxjs/operators'
/*

interval%   ---(a)------(b)-(c)-------(d)-----------|------>
             debounceTime(1000)
salida -     --------(a)----------(c)--------(d)----|------>
                -----        ------     ------
                1seg         1seg       1seg

*/

//al hacer un monton de clicks solo activa el ultimo pasando 1 seg
const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000)
).subscribe(console.log);

//para obserbables que emiten una gran cantidad de mensajes 

//ejemplo2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1500),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);




