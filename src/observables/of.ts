import { of } from "rxjs";

/*
of(1,2,3,4)

        subscriber.next(1)     subscriber.complete()
            |                        |
            V                        V
obs%   ---(1)-(2)-(3)-(4)------------|------------>
salida ---(1)-(2)-(3)-(4)------------|------------>


*/

const obs$ = of(1,2,3,4);
//con operador spread
const obs2$ = of(...[1,2,3,4],5,6,7);
//puede recivir varios tipos de tipado
const obs3$ = of([1,2], {a:1,b:2}, function(){}, true, Promise.resolve(true));

console.log('inicio del obs$');

obs3$.subscribe(
    next => console.log('next', next),
    null,
    ()=> console.log('terminamos la secuencia')
)

console.log('fin del obs$');
