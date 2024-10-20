function generateNumber() {
  const min = Math.ceil(document.querySelector(".num-1").value);
  const max = Math.floor(document.querySelector(".num-2").value);

  if (min >= max) {
    // SE O VALOR MINIMO FOR MAIOR OU IGUAL AO VALOR MAXIMO, VAI DAR ERRO
    alert("O valor minimo tem que ser MENOR que o valor máximo.");
  } else {
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    const resp = document.querySelector("h2");
    resp.innerText = `O numero sorteado é ${resultado}`;
  }
}
