import { Observable, from, fromEvent, interval, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, concatMap, debounceTime, map,  mergeMap,  switchMap, take, tap} from 'rxjs/operators'



//creando un formulario
const form = document.createElement('form')
const inpuEmail = document.createElement('input');
const inpuPass = document.createElement('input');
const submitBtn = document.createElement('button');

//configuraciones
inpuEmail.type = 'email';
inpuEmail.placeholder = 'email';
inpuEmail.value = 'eve.holt@reqreq.in'

inpuPass.type = 'password';
inpuPass.placeholder = 'password';
inpuPass.value = '123456'

submitBtn.innerHTML = 'Ingresar';

form.append(inpuEmail,inpuPass, submitBtn);
document.querySelector('body').append(form);

//streams
const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(ev=> ev.preventDefault()),
    //obtener la informacion
    
).subscribe(token => console.log(token))



















