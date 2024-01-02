import { Observable, combineLatest, concat, forkJoin, from, fromEvent, interval, merge, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, delay, endWith, map, mergeMap, startWith, take, tap} from 'rxjs/operators'


/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    for( let nombre of nombres ) {
      //console.log( capitalizar(nombre) )
    }

    //solucion
    //from para convertir el arreglo en un obserbable
    from(nombres).pipe(
        //tomar el nombre y capitalizarlo
        map(capitalizar)

    ).subscribe(console.log)
  
  
  
  
  
  
  
  })();
  
  










