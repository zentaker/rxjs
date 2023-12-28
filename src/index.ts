import { Observable, fromEvent, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, debounceTime, map, mergeAll, pluck} from 'rxjs/operators'



/* 

source$ --|----|-----------------------|--->
          |    \-----------(e)----------(f)-----|-->
          \----(a)-(b)-(c)------(d)---|---->  
          mergeAll()
salida$ -------(a)-(b)-(c)--(c)---(d)---(f)-----|--->-


unificar obserbales en una sola salida 
transforma el flujo para observar directamente los resultados de las peticiones
a.k.a > flatterning operator / operador de aplanamiento

*/














