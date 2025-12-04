/*
1) Supondo que a população de um país A
seja da ordem de 80000 habitantes com uma taxa anual de crescimento de
3% e que a população de B seja 200000 habitantes com uma taxa anual de
crescimento de 1.5%. Faça um programa que calcule e escreva o número de
anos necessários para que a população do país A ultrapasse ou iguale a
população do país B, mantidas as taxas de crescimento.
*/

const countryA = {
  habitants: 80000,
  anualGrowth: 0.03,
};

const countryB = {
  habitants: 200000,
  anualGrowth: 0.015,
};

function willOvercomePopulation(countryA, countryB) {
  let years = 0;

  do {
    countryA.habitants += countryA.habitants * countryA.anualGrowth;
    countryB.habitants += countryB.habitants * countryB.anualGrowth;

    years++;

    if (countryA.habitants === countryB.habitants) {
      console.log("Both countries have the same amount of habitants.");
    }

    if (countryA.habitants >= countryB.habitants) {
      years--;

      console.log(
        `Country A will overcome Country B's population, with a difference of ${(
          countryA.habitants - countryB.habitants
        ).toFixed(2)} in ${years} years.`
      );
    }
  } while (countryA.habitants < countryB.habitants);
}

willOvercomePopulation(countryA, countryB);
