import { Observable, Observer } from "rxjs";


//observer
const observer: Observer<any> = { // es un objeto que recibe las notificaciones
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')

};
const intervalos$ = new Observable<number>( subscriber => {
    //crear un contador, 1,2,3,4,5,6...
    let count = 0;
    const interval = setInterval(()=>{
        //cada segundo
        count = count +1;
        subscriber.next(count);
        console.log(count);
      
        
    },1000);

    setTimeout(()=>{
        subscriber.complete();//se emite el return 
    },2500)

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');

    }

})
//se crea una nueva instancia del obserbable
const subs1 = intervalos$.subscribe(observer)
const subs2 = intervalos$.subscribe(observer)
const subs3 = intervalos$.subscribe(observer)
// const subs1 = intervalos$.subscribe(num=> console.log('Num: ', num))
//cuando te subribes a un obserbable es cuando se comienza a ejecutar el codigo 
subs1.add(subs2.add(subs3));



//cancelas la subscripcion
setTimeout( ()=>{
    subs1.unsubscribe()
    //se crea una nueva subscripcion
    const subs2 = intervalos$.subscribe(num=> console.log('Num: ', num))
    console.log('completado timeout');

},6000)



