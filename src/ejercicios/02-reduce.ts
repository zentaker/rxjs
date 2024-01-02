import { Observable, combineLatest, concat, forkJoin, from, fromEvent, interval, merge, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, delay, endWith, filter, map, mergeMap, reduce, startWith, take, tap} from 'rxjs/operators'


/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  const totalReducer = (acumulador:number, valorActual: number) => {

      return acumulador + valorActual;
    
    }

  from(datos).pipe(
    filter(value => typeof value === 'number'),

    reduce<any>(totalReducer),



  ).subscribe( console.log ) // La salida debe de ser 32



})();

		







