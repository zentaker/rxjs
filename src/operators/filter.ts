import { from, fromEvent, range } from "rxjs";
import { filter, map, mapTo, pluck } from 'rxjs/operators'


/*

obd%   ---(1)---(2)---(3)---(4)----|------>
       filter(value => value% 2 === 1)
salida ---(1)---------(3)----------|------------>


*/

range(1,10).pipe(
    filter((val,i)=> {
        console.log('index',i)
        return val % 2 === 1;
    })
).subscribe(console.log);

interface Personsaje {
    tipo: string;
    nombre: string;
}


const personajes: Personsaje[] = [
    {
        tipo:'heroe',
        nombre:'batman'
    },
    {
        tipo:'heroe',
        nombre:'robin'
    },
    {
        tipo:'villano',
        nombre:'joker'
    }
]

from(personajes).pipe(
    filter(p => p.tipo !== 'heroe')
).subscribe(console.log)


//cuando solo e apreta la tecla enter

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), //keyboardEvent, string
    filter(key => key ==='Enter')
)

keyup$.subscribe(console.log)






