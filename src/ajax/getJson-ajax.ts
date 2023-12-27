import { of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, map, pluck} from 'rxjs/operators'



const url = 'https://httpbifn.org/delay/1'


//getJson
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'abc123'

});
const obs1$ = ajax(url);
//mas informacion sobre la response y request
obs1$.subscribe(data => console.log("ajax:", data))

const manejaErrores = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok:false,
        usuarios:[]
    })
}


//informacion propiamente de la respuesta
obs$.pipe(
    catchError(manejaErrores)
).subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en subs:', err),
    complete: ()=> console.log('complete')
})














