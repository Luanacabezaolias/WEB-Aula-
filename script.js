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


function inserir(){
    let numero = document.getElementById("posicao").value - 1
    let novo = document.getElementById("novo").value
    document.getElementsByClassName("colocado")[numero].innerHTML = novo
}

function mostrar(){
    let numero = document.getElementById("numero").value -1
    let mes = document.getElementsByTagName("li")[numero].innerHTML
    document.getElementById("resultado").innerHTML = mes
}

//document.querySelector("#btnMsg").onclick = ()=>alert("testes")

document.querySelector("#btnMsg").addEventListener('keyDown', function(){
    alert("teste novamente")
})
