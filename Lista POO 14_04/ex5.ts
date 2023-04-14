const entrada5 = require("readline-sync");

let vetor:number[] = [];
let divi:number[] = [];
let i:number=0
for(i;i<20;i++){
    vetor[i]= parseFloat(entrada5.question("digite um numero: "));
    if(vetor[i]%4==0){
        divi.push(vetor[i])
    }
}   

console.log(divi)
