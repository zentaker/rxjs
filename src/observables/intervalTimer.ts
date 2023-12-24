import { interval, timer } from "rxjs";

/*
interval(1000)
 
obs$   ---(1)-(2)-(3)-(4)------------>
salida ---(1)-(2)-(3)-(4)------------>
           --- --- ---
           1s  1s  1s

*/
/*
timer(2000)
 
obs$   ------(1)|------------>
salida ------(1)|------------>
        ----- 
        2s  

*/
//son asincronos por naturaleza

const observer = {
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)

const interval$ = interval(2000);

const timer$ = timer(2000);
//crear un interval que inicia en 2 segundos 
const timer1$ = timer(2000, 1000);

//en que momento quieres que se ejecute 
const timer2$ = timer(hoyEn5);

console.log('inicio');
//interval$.subscribe(observer);
timer2$.subscribe(observer);
console.log('fin');

