document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('[data-secao]');
    const conteudo = document.getElementById("conteudo-principal");
    const conteudoPadrao = conteudo.innerHTML;

    // Navegação por seções
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
                        conteudo.classList.remove("animar-saida");
                        conteudo.classList.add("animar-entrada");
                    });
            }, 500);
        });
    });

    // Botão Página Principal
    const botaoPaginaPrincipal = document.getElementById("btn-pagina-principal");
    if (botaoPaginaPrincipal) {
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
    }

    // Menu mobile
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-nav-menu-items');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('mobileMenuActive');
            menu.classList.toggle('mobileMenuInactive');
        });
    }
});

// Mostrar/ocultar telefone
function alternarContato() {
    const telefone = document.getElementById("telefone");
    if (telefone) {
        telefone.style.display = (telefone.style.display === "block") ? "none" : "block";
    }
}
