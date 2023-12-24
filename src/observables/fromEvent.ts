import { fromEvent } from "rxjs";

/*
of(document, 'scroll')
 
obs%   ---(Event)-(Event)-(Event)----|------------>
salida ---(Event)-(Event)-(Event)----|------------>


*/


//eventos del dom
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer ={
    next: val => console.log('next', val)

}


src1$.subscribe(({x,y})=> {
    console.log(x,y);
})
src2$.subscribe( evento => {
    console.log(evento.key);
})