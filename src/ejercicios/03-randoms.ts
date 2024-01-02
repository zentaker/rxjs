import { Observable, Subject, combineLatest, concat, forkJoin, from, fromEvent, interval, merge, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, delay, endWith, filter, map, mergeMap, reduce, startWith, take, tap} from 'rxjs/operators'


/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
      take(5),
      map( val => Math.round(Math.random() * 100) )
    );
    // No tocar la creación del observable
    // ============================================
    const subject$ = new Subject();


    const subription =  reloj$.subscribe(subject$)
    
    
    // las subripciones son las mismas 
    const subs1 = subject$.subscribe( val => console.log('obs1', val));
    const subs2 = subject$.subscribe(val => console.log('obs2', val) );
      
    
    
    // Estos dos observables deben de emitir exactamente los mismos valores
    //reloj$.subscribe( val => console.log('obs1', val) );
    //reloj$.subscribe( val => console.log('obs2', val) );
  
  
  
  
  
  })();
  