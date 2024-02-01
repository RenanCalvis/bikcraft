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

//-Ativação de items por parametro
const parametros = new URLSearchParams(location.search);

// Utilizando arrow Function.
parametros.forEach((parametro) => {
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
});

