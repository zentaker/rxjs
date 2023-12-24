import { asyncScheduler } from "rxjs";

//setTimeout ( ()=> {}, 3000);
//setInterval ( ()=> {}, 3000);

const saludar = () => console.log('hola mundo');
const saludar2= nombre => console.log(`Hola ${nombre}`);
asyncScheduler.schedule(saludar,2000);
asyncScheduler.schedule(saludar2,2000,'alejandro')//en el state solo se pued mandar 1 valor 

const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state);
    this.schedule(state+1, 1000)
}, 3000, 0)

setTimeout( ()=>{
    subs.unsubscribe();
}, 6000);

// otra maenra de hacerlo 
asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000);

