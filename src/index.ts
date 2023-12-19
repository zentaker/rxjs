import { Observable, Observer, Subject } from "rxjs";


//observer
const observer: Observer<any> = { // es un objeto que recibe las notificaciones
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')

};

const intervalos$ = new Observable<number>(subs =>{
    const intervalID = setInterval(
        () => subs.next(Math.random()),1000
        );

        return () => clearInterval(intervalID);
})

/* 
* 1- casteo multiple
* 2- tambien es un observer
* 3- next, error y compplete
*/

const subject$ = new Subject();

//tambien funciona como un observer 
intervalos$.subscribe(subject$)


// las subripciones son las mismas 
const subs1 = subject$.subscribe(rnd => {
    console.log('subs1', rnd);
});
const subs2 = subject$.subscribe(rnd => {
    console.log('subs2', rnd);
});

//el subject tambien es un observer
setTimeout(()=> {

    //insertar informacion al flujo de datos que el observable esta emitiendo
    subject$.next(10)
    subject$.complete()


}, 3500)


