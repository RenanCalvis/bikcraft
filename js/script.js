const links = document.querySelectorAll('.header_menu a');

function menuAtivo(link){
    const href = link.href;
    const url = document.location.href
    if(url.includes(href)){
        link.classList.add('ativo');
    }
}
links.forEach(menuAtivo);

