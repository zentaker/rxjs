import { Observable, Observer } from "rxjs";

/*
        subscriber.next('hola')     subscriber.complete()
            |                        |
            V                        V
obd%   ---(hola)-(Mundo)-(error)-----|--(hola)---->
salida ---(hola)-(Mundo)-------------|------------>


*/

//observer
const observer: Observer<any> = { // es un objeto que recibe las notificaciones
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')

}


//const obs$ = Observable.create();

//subject obs$
const obs$ = new Observable<string>( subs => {//siempre asignar el tipo de dato

    //crear subcripciones

    //metodos
    subs.next('next');//emitir el valor a los subcritos(observers)
    subs.next('mundo');//emicion de valores

    //error 
    const a = undefined;
    a.nombre = 'Alejndro' //emicion de valores

    //metodos
    subs.complete();//le dice a los subribers que ya no se emite

    subs.next('hola');
    subs.next('next');//emitir el valor a los subcritos
    subs.next('mundo');

});
obs$.subscribe(observer);


/* 
obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error),
    () => console.info('completado')
) */






