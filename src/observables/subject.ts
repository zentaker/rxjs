import { Observable, Observer, Subject } from "rxjs";


//observer
const observer: Observer<any> = { // es un objeto que recibe las notificaciones
    //metodos determinan como va a reaccionar cuando recive un valor 
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')

};

//observeble es un objeto que realiza algo que se puede observar 
const intervalos$ = new Observable<number>(subs =>{
    const intervalID = setInterval(
        () => subs.next(Math.random()),1000
        );

        return () => {
            clearInterval(intervalID);
            console.log('intervalo destruido');
        } 
})

/* 
* 1- casteo multiple
* 2- tambien es un observer
* 3- next, error y compplete
*/

// se crea un subject para difundir un evento a muchos observers
//un subject es un tema en particular para separar las subripciones
const subject$ = new Subject();

//tambien funciona como un observer 
const subription =  intervalos$.subscribe(subject$)


// las subripciones son las mismas 
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

//el subject tambien es un observer
setTimeout(()=> {

    //insertar informacion al flujo de datos que el observable esta emitiendo
    subject$.next(10)
    subject$.complete()
    subription.unsubscribe();


}, 3500)


