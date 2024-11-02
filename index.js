//Desafio Classificador Herói

/* criar variaveis para armazenar o nome do player
quantidade de experiênci (XP) de um herói, 
depois utilizar um estrutura de decisão para apresentar alguma das msgm abaixo.

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

//Declaração de Variveis
let nickName = 'Luiz';
let xp = 5000;
let rank = 'Seu rank é ';

console.log("Usuario cadastrado com sucesso!\n");

//estrutura de repetição
for (let i=1; i<=5;i++){
    console.log(i)
}
console.log("5 dias depois");
console.log("\nParabens " + nickName + " você chegou a marca dos 5k de XP!!");
console.log("\nVamos descobrir qual rank você chegou!!\n");

//estrutura de decisão
if (xp <= 1000){
    console.log(rank + "Ferro");
} else if(xp >=1001 &&  xp <=2000){
    console.log(rank + "Bronze");
} else if(xp>=2001 && xp <=5000){
    console.log(rank + "Prata Ouro");
}else if(xp >=5001 && xp <=8000 ) {
    console.log(rank + "Platina Diamante");
}else if (xp >=8001 && xp <=9000){
    console.log(rank + "Ascendente");
}

console.log("\nParabens " + nickName + ". " + rank + "Prata Outo."  );
