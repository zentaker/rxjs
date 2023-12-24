import { asyncScheduler, of, range } from "rxjs";

/*
range(1,3)
 
obs$   ---(1)-(2)-(3)|------------>
salida ---(1)-(2)-(3)|------------>


*/
const src1$ = of(1,2,3,4,5);

//range(valor inicio, #valores)
const src2$ = range(1,5,asyncScheduler);//tranformarlo asincrona



console.log('inicio');
src2$.subscribe(console.log)
console.log('fin');


