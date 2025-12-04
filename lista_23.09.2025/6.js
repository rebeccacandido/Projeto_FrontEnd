/*
6) Escreva uma função que informe o retorno de um investimento (montante) 
com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
fornecidos pelo usuário. Utilize obrigatoriamente a função prompt() para coletar os
valores necessários.

Use a fórmula: M = C * ((1+i) ** t), Onde:

    C = Capital inicial investido
    i = Taxa de juros, em percentual
    t = Tempo do investimento, em meses

Exiba o resultado com duas casas decimais.
*/

function calcInvestmentReturn() {
  const initialCapital = prompt("Type the initial capital: ");
  const investmentTime = prompt("Type the investment time: ");
  const monthlyInterest = prompt("Type the monthly interest: ");

  try {
    const iC = Number(initialCapital);
    const iT = Number(investmentTime);
    const mI = Number(monthlyInterest);

    if (isNaN(iC) || isNaN(iT) || isNaN(mI)) throw new Error();

    const investmentReturn = iC * (1 + mI) ** iT;

    console.log(`The investment return is ${investmentReturn.toFixed(2)}`);
  } catch {
    throw new Error("Invalid data. (use only numbers)");
  }
}

calcInvestmentReturn();
