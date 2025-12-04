/*
3) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.
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

function minMax(numbersList) {
  const max = Math.max(...numbersList);
  const min = Math.min(...numbersList);

  console.log(`Max: ${max} | Min: ${min}`);
}

const numbersList = createNumList(10);
minMax(numbersList);
