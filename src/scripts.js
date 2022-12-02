const btnCalc = document.querySelector("#calcular");
const btnLimpar = document.querySelector("#limpar");

let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");

const calcularNotas = (nota1, nota2, nota3) => {
  nota1 = Number(nota1.value);
  nota2 = Number(nota2.value);
  nota3 = Number(nota3.value);

  const total = (nota1 + nota2 + nota3) / 3;
  if (nota1 == "" || nota2 == "" || nota3 == "") {
    return `Complete todos os campos antes de calcular a média`;
  } else if (total >= 7) {
    return `Parabéns, você passou sua media foi de: ${total.toFixed(2)}`;
  } else if (total >= 5 && total < 7) {
    return `Sua media foi de: ${total.toFixed(2)}, você está de recuperação`;
  } else {
    return `Você foi reprovado, sua media foi de: ${total.toFixed(2)}`;
  }
};

const limparInputs = () => {
  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
  document.querySelector("#resultado").textContent = "";
};

const resultado = () => {
  document.querySelector("#resultado").textContent = calcularNotas(
    nota1,
    nota2,
    nota3
  );
};

btnLimpar.addEventListener("click", (e) => {
  e.preventDefault();
  limparInputs();
});

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();
  resultado();
});
