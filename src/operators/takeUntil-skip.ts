import { fromEvent, interval} from 'rxjs';
import { first, map, skip, takeUntil, takeWhile, tap} from 'rxjs/operators'
/*

takeuntil
obd%   ---(a)-(b)-(c)-(d)-(e)-(f)|------>
click%   -----------------(Ev)----------->
             takeUntil(clickBtn$)
salida ---(a)-(b)-(c)-(d)|------------------>



skip
obd%   ---(a)-(b)-(c)-(d)-(e)|------>
             skip(3)
salida ---------------(d)-(e)|------>




*/
const btn = document.createElement('button');
btn.innerHTML = 'Detener boton';

document.querySelector('body').append(btn);

const counter$ = interval(1000);
//const clickBtn$ = fromEvent(btn, 'click');
const clickBtn$ = fromEvent(btn, 'click').pipe(
    //el primer click no se ejecuta 
    skip(1)
)

counter$.pipe(
    //recive un evento 
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
})

