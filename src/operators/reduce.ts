
import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators'
/*

obd%   ---(1)-(3)-(5)------|------>
       reduce((acc,curr)=> acc+curr, 0)
salida -----------------(9)|------------>


*/

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('total arr', total);

interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
})



