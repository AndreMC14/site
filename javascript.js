document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('[data-secao]');
    const conteudo = document.getElementById("conteudo-principal");


    const conteudoPadrao = conteudo.innerHTML;


    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const secao = this.getAttribute("data-secao");

            conteudo.classList.remove("animar-entrada");
            conteudo.classList.add("animar-saida");

            setTimeout(() => {
                fetch(secao)
                    .then(response => response.text())
                    .then(html => {
                        conteudo.innerHTML = html;
                        console.log("Conteúdo carregado:", html);
                        conteudo.classList.remove("animar-saida");
                        conteudo.classList.add("animar-entrada");
                    });
            }, 500);
        });
    });


    const botaoPaginaPrincipal = document.getElementById("btn-pagina-principal");

    botaoPaginaPrincipal.addEventListener("click", function (e) {
        e.preventDefault();

        conteudo.classList.remove("animar-entrada");
        conteudo.classList.add("animar-saida");

        setTimeout(() => {
            conteudo.innerHTML = conteudoPadrao;
            conteudo.classList.remove("animar-saida");
            conteudo.classList.add("animar-entrada");
        }, 500);
    });
    const botaoToggleMenu = document.getElementById("btn-menu-toggle");
const menu = document.querySelector(".menu-interativo");

botaoToggleMenu.addEventListener("click", function () {
  menu.classList.toggle("ativo");
});
});


function alternarContato() {
    const telefone = document.getElementById("telefone");

    if (telefone.style.display === "block") {
        telefone.style.display = "none";
    } else {
        telefone.style.display = "block";
    }
}
