import { of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, map, pluck} from 'rxjs/operators'



const url = 'https://httpbin.org/delay/1'

ajax.put(url, {
    id:1,
    nombre: 'alejandro'
}, {
    'mi-token': 'abc12345'
}).subscribe(console.log)


//mediante progrmacion si es un put o post
ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 'abc12345'
    },
    body: {
        id:1,
        nombre: 'alejandro'

    }
}).subscribe(console.log)














