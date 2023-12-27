import { of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, map, pluck} from 'rxjs/operators'


const url = 'https://api.github.com/users?per_page=5'



const manejaErrores = (response: Response) => {
    if (!response.ok) {
        // Si la respuesta no es exitosa, procesa y lanza el cuerpo de la respuesta como error
        return response.json().then(body => {
            throw new Error(body.message);
        });
    }
    return response;
}

const fetchPromesa = fetch(url);
//trabaja en funcion a promesas y no obserbables
//no se pueden cancelar solicitudes anteriores

//then() cuando la promesa se resuelve exitosaa
fetchPromesa
    .then(manejaErrores)
    .then(resp => resp.json())
    .then(console.log)
    .catch(err => console.warn('error en usuarios', err))//manejar el error 

/* 

CATCHERROR

source%   ---(a)-----(b)---X-------------------->
                           --(1)--(2)--(3)----|->
                catchError(atrapaError)
salida -     (b)-----(b)-----(1)--(2)--(3)----|->

sirve para atrapar cualquier error que suceda en el observable



*/

const atrapaError2 = (err: AjaxError)=> {
    console.warn('error', err.message);
    return of({})
}


//usando peticion ajax
ajax(url).pipe(
    //map(resp => resp.response)
    pluck('response'),
    catchError(atrapaError2)
).subscribe(console.log)












