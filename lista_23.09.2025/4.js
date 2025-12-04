/*
4) Um funcionário de uma empresa recebe aumento salarial anualmente. 

- Sabe-se que:Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
- Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;

- A partir de 1997 (inclusive), os aumentos salariais sempre correspondem
ao dobro do percentual do ano anterior. Faça um programa que determine o
salário atual desse funcionário. 

- Após concluir isto, faça
uma segunda versão do seu código que permita o usuário informar o
salário inicial do funcionário. Utilize obrigatoriamente a função
prompt() para coletar o salário inicial.
*/

// O salário está aumentando exponencialmente, não sei se foi intencional, mas isso leva a valores absurdos

const worker = {
  contractYear: 1995,
  initialSalary: 1000,
  initialIncrease: 0.0015,
};

function calcSalaryIncrease(worker) {
  contractYear = worker.contractYear;
  initialSalary = worker.initialSalary;
  initialIncrease = worker.initialIncrease;

  const increaseRuleYear = 1997;
  let salary = initialSalary;

  for (let year = contractYear + 1; year <= 2025; year++) {
    if (year >= increaseRuleYear) {
      initialIncrease *= 2;

      salary += salary * initialIncrease;
    } else {
      salary += salary * initialIncrease;
    }
  }

  console.log(`Salary in 2025: ${salary.toFixed(2)}`);
}

calcSalaryIncrease(worker);

// V2

function createWorker() {
  const contractYear = prompt("Type the year of contract: ");
  const initialSalary = prompt("Type the initial salary: ");
  const initialIncrease = prompt("Type the initial increase: ");

  try {
    const cY = Number(contractYear);
    const iS = Number(initialSalary);
    const iI = Number(initialIncrease);

    if (isNaN(cY) || isNaN(iS) || isNaN(iI)) throw new Error();

    const worker = {
      contractYear: cY,
      initialSalary: iS,
      initialIncrease: iI,
    };

    return worker;
  } catch {
    throw new Error("Invalid data. (use only numbers)");
  }
}

const createdWorker = createWorker();
calcSalaryIncrease(createdWorker);
