import { Observable, from, fromEvent, interval, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, concatMap, debounceTime, exhaustMap, map,  mergeMap,  switchMap, take, tap} from 'rxjs/operators'


//helper
const peticionhttpLogin = (userPass)=>  ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map(res => res.response['token']),
    catchError(err=> of('xxx'))

)


//creando un formulario
const form = document.createElement('form')
const inpuEmail = document.createElement('input');
const inpuPass = document.createElement('input');
const submitBtn = document.createElement('button');

//configuraciones
inpuEmail.type = 'email';
inpuEmail.placeholder = 'email';
inpuEmail.value = 'eve.holt@reqres.in'

inpuPass.type = 'password';
inpuPass.placeholder = 'password';
inpuPass.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar';

form.append(inpuEmail,inpuPass, submitBtn);
document.querySelector('body').append(form);

//streams
const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(ev=> ev.preventDefault()),
    //obtener la informacion
    map( ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    //peticion
    //mergeMap(peticionhttpLogin)//el argumento se pasa a la funcion
    //evnvia cuantas subscripciones tenga

    //switchMap(peticionhttpLogin)
    //cancela las peticiones anteriores 

    exhaustMap(peticionhttpLogin)
    //ignora las peticiones despues de la primera

).subscribe(token => console.log(token))



















