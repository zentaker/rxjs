

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('total arr', total);

