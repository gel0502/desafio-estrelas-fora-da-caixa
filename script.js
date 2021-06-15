const container = document.getElementById("container")
const cartas = document.querySelectorAll("#container > #card");

gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 671) + 1;
};

gerarValorresParaOsPersonagens = () => {
  return fetch(
    `https://rickandmortyapi.com/api/character/${gerarValorAleatorio()},${gerarValorAleatorio()},${gerarValorAleatorio()},${gerarValorAleatorio()}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((data) => {

      for(let i=0; i<data.length; i++){
        imagem = cartas[i].querySelector("img");
        nome = cartas[i].querySelector("h2");

        imagem.src = data[i].image;
        nome.textContent = data[i].name;
      }
    });
};

window.addEventListener('load', () => {
  gerarValorresParaOsPersonagens();
})
document.onload = gerarValorresParaOsPersonagens();