const form = document.querySelector("#search-form > form");
const input:HTMLInputElement | null = document.querySelector("#input-localizacao");

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
if(!input ) return
  const localizaçao = input.value;

  if(localizaçao.length < 3 ) {
    alert('o local precisa ter pelo menos 3 letras. ');
    return;
  }

   const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizaçao}&appid=f03a51d816916ca067830d65866f9ecc&lang=pt_br&units=metric`)
   const dados = await resposta.json();

   console.log(dados);
});