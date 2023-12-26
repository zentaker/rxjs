
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

const numeros$ = new Observable< number | string>(subscriber => {
    const valores = [1, '1', 1, 1, 2, 3, 3, 2, 4, 4];
    valores.forEach(valor => subscriber.next(valor));
});


/* numeros$.pipe(
    //solo va a dejar pasar cullos valores no han sido previamente emitidos 
    distinct()// ===     1 != '1'
).subscribe(console.log) */

numeros$.pipe(
    
    distinctUntilChanged()// ===     1 != '1'
).subscribe(console.log)

interface Personaje {
    nombre: string
}

const personajes: Personaje[] =[
    {
        nombre: 'megaman'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'zero'
    },
    {
        nombre: 'dr.willy'
    },
    {
        nombre: 'megaman'
    },
    {
        nombre: 'zero'
    },
]
/* 

from(personajes).pipe(
    //no funciona directamente con obejtos 
    distinct(p => p.nombre)//definir el campo que tiene que estar pendeinte
).subscribe(console.log) */

from(personajes).pipe(
    //no funciona directamente con obejtos 
    //distinctUntilChanged((ant,act)=> ant.nombre ===act.nombre)//definir el campo que tiene que estar pendeinte
    distinctUntilKeyChanged('nombre')// de esa manera puedes trabajar directamente en objetos
).subscribe(console.log)

