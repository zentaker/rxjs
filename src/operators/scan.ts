
import { from, interval } from 'rxjs';
import { map, reduce, scan, take, tap } from 'rxjs/operators'
/*

obd%   ---(1)-(3)-(5)------|------>
       scan((acc,curr)=> acc+curr, 0)
salida ---(1)-(4)-(9)------|------------>


*/
const numeros = [1,2,3,4,5]

const totalAcumulador = (acc, cur) => acc + cur;


//reduce
from(numeros).pipe(
    //muestra el total acumulador 
    reduce(totalAcumulador, 0)
).subscribe(console.log)

//scan
from(numeros).pipe(
    //muestra el total acumulador 
    scan(totalAcumulador, 0)
).subscribe(console.log)


//redux
interface Usuario {
    id?: string;
    autentificado?: boolean;
    token?: string;
    edad?: number;
}

const user:Usuario[] = [
    {id:'ale', autentificado: false, token: null},
    {id:'ale', autentificado: true, token: 'abc'},
    {id:'ale', autentificado: true, token: 'abc123'}

]
//obtener el valor acumulado de mi estado con scan
const state$ = from(user).pipe(
    //mantener ttodas las modificacione en el ussuario
    scan((acc, curr)=> {
        //le voy a estraer las propiedades
        return{...acc, ...curr}
    },  {edad: 33} as Usuario)
);
const id$ = state$.pipe(
    map(state => state.id)
)
id$.subscribe(console.log)




