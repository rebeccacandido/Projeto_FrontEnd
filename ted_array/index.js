/*
• Crie um array com 5 nomes e exiba o terceiro nome no console. 
• Adicione um nome ao final e um no início do array. 
• Remova o último nome e exiba o array atualizado. 
• Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8]. 
• Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]

• Orientações o desenvolvimento do TED: 
• A resposta deve ser postada no github do aluno e disponibilizado o endereço do github no
classroom, na Atividade 4.
*/

// 1
const names = ["João", "Maria", "José", "Ana", "Pedro"];
console.log(names[2]);

// 2
names.push("Carlos");
names.shift("Luís");

// 3
names.pop();
console.log(names);

// 4
const numbers = [2, 4, 6, 8];
const doubleNumbers = numbers.map((number) => number * 2);

// 5
const numbers2 = [1, 3, 5, 7, 9];
const fileteredNumbers2 = numbers2.filter((number) => number > 5);
