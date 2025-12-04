/*
2) Faça um programa que peça 10 números inteiros, calcule e mostre a
quantidade de números pares e a quantidade de números ímpares. Utilize
obrigatoriamente a função prompt() para coletar os números.
*/

function createNumList(n) {
  const numbersList = [];

  for (let i = 0; i < n; i++) {
    let num = prompt(`${i + 1} - Type an integer number: `);

    try {
      num = parseInt(num);

      if (isNaN(num)) throw new Error();

      numbersList.push(num);
    } catch {
      throw new Error("Invalid number.");
    }
  }

  return numbersList;
}

function sortEvenOdd(numbersList) {
  let even = 0;
  let odd = 0;

  for (let x of numbersList) {
    if (x % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log(`Even numbers: ${even} | Odd numbers: ${odd}`);
}

const numbersList = createNumList(10);
sortEvenOdd(numbersList);
