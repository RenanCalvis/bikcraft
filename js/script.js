//-Menu Ativo
const links = document.querySelectorAll('.header_menu a');
// Utilizando Function padrão.
function menuAtivo(link){
    const href = link.href;
    const url = document.location.href
    if(url.includes(href)){
        link.classList.add('ativo');
    }
}
links.forEach(menuAtivo);

//-Ativação de items por parametro via URl
const parametros = new URLSearchParams(location.search);

// Utilizando arrow Function.
parametros.forEach((parametro) => {
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
});

//Perguntas Frequentes button
const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach( eventosPerguntas = (pergunta) =>{
    pergunta.addEventListener("click", ativarPergunta = (event) =>{
        const pergunta = event.currentTarget;
        const controls = pergunta.getAttribute("aria-controls");
        const resposta = document.getElementById(controls);

        resposta.classList.toggle('ativo');
        const ativo = resposta.classList.contains("ativo"); //Retorna um boolean que é passado na função abaixo
        pergunta.setAttribute("aria-expanded", ativo);
    })
})

