function calcular(raio){
    return `Perimetro: ${Math.PI} Área: ${Math.PI * raio * raio}`;
}
console.log(calcular(10));


// função normal
function exemplo(num){
    return num * num;
}

console.log(exemplo(20));

// arrow function 
const exemplo2 = (num)=>{
    return num * num;
}

// arrow function simplificada 
const exemplo3 = (num)=>{return num * num;}
console.log(exemplo(20))

