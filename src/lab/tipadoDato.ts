import { Observable, fromEvent, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax'
import {catchError, debounceTime, map, mergeAll, pluck} from 'rxjs/operators'

//TIPADO DE DATO
export interface GithubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUsers[];
}


export interface GithubUsers {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
    score:               number;
}



//referecias 
const body = document.querySelector('body')
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList)

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

//helpers
const mostrarUsuarios = (usuarios: GithubUsers[])=>{
    orderList.innerHTML = '';
    console.log(usuarios);

     // Transforma las propiedades del objeto en un array y luego itera
     

    //ciclo for
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img')
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li)
        
    }

}

//1. saber que entra
input$.pipe(
    //no lo haga por cada tecla
    debounceTime<KeyboardEvent>(500),
    //extrae el value del input

    //DISCONTINUED
    //pluck<KeyboardEvent, string>('target.value'),
    //tranforma el evento en una nueva peticion 

    //Pluck disctonitnued NEW way
    map<KeyboardEvent, string>(event => event.target['value']),
    //hacer la segunda peticion en funcion al evento
    map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),

    //se va a subribir y emitir dichos valores
    mergeAll(),

    //tranformar nuevamente la respuesta 
    map<GithubUsersResp, GithubUsers[]>(items => items.items),//sale usuarios de github


    //DISCONTINUED
    //se puede tranformar denuevo
    //pluck('items')
//2. saber que sale 
).subscribe(mostrarUsuarios)
















