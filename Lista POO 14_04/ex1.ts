const entrada1 = require("readline-sync");

let valor:number[] = [];
let maior:number=0;
let menor:number=0;
for(let i=0; i<15; i++){
    valor[i]=parseFloat(entrada1.question("digite a altura: "))
}  
for(let i=0;i<15;i++){
    if(valor[i]> maior){
        maior=valor[i];
    }
    if(valor[i]<menor){
        menor=valor[i];
    }
}
console.log(maior);
console.log(menor);

