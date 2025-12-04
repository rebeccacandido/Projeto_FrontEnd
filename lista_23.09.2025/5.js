/*
5) Escreva uma função que encontre a área e o perímetro de um círculo, 
de acordo com o raio fornecido. Utilize obrigatoriamente a função prompt()
para coletar o salário inicial.
*/

const radius = prompt("Insert the circle radius: ");

function circlePerimeter(radius) {
  const length = 2 * Math.PI * radius;

  console.log(`The circle perimeter is ${length.toFixed(2)}`);
}

circlePerimeter(radius);
