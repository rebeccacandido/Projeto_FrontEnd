/*
Solicite dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente os seguintes resultados:

• A maior e a menor altura do grupo; 
• A média de altura das pessoas do gênero Masculino; 
• O número de pessoas do gênero Feminino. 

• Orientações o desenvolvimento do TED: 
• Deve ser utilizada, obrigatoriamente, a linguagem JavaScript acompanhada de um arquivo HTML; 
• A resposta deve ser postada no github do aluno e disponibilizado o endereço do github no classroom, na Atividade 2.
*/

const people = {};

for (let i = 0; i < 15; i++) {
  let height = prompt("Person " + (i + 1) + " height (m):");
  let gender = prompt(
    "Person " + (i + 1) + " gender (male or female):"
  ).toLowerCase();

  if (isNaN(Number(height)) || (gender !== "male" && gender !== "female")) {
    alert(
      "Invalid input. Please enter a valid number for height and 'male' or 'female' for gender."
    );
    i--;
    continue;
  }

  people[i] = {
    height: Number(height),
    gender: gender,
  };
}

function dataFromPeople(peopleData) {
  let allHeights = [];
  let maleHeights = [];
  let femaleCount = 0;

  for (let key in peopleData) {
    const person = peopleData[key];
    allHeights.push(person.height);

    if (person.gender === "male") {
      maleHeights.push(person.height);
    } else if (person.gender === "female") {
      femaleCount++;
    }
  }

  const maxHeight = Math.max(...allHeights);
  const minHeight = Math.min(...allHeights);

  const avgMaleHeights =
    maleHeights.length > 0
      ? (maleHeights.reduce((sum, h) => sum + h) / maleHeights.length).toFixed(
          2
        )
      : 0;

  console.log(
    `Max height: ${maxHeight} | Min height: ${minHeight} | Average male height: ${avgMaleHeights} | Female count: ${femaleCount}`
  );
}

dataFromPeople(people);
