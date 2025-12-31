// Arquivo: js/script.js

document.addEventListener("DOMContentLoaded", () => {
    carregarNavbar();
    carregarFooter();
});

function carregarNavbar() {
    const navbarContainer = document.getElementById("navbar-placeholder");

    if (navbarContainer) {
        navbarContainer.innerHTML = `
        <header class="py-1 bg-dark">
            <h6 class="text-center text-light pt-2" style="font-size: 0.9rem;">
                Aceitamos todas as formas de pagamento: Pix, Crédito, Débito
            </h6>
        </header>
        <nav class="navbar navbar-expand-lg bg-warning py-3 shadow-sm" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand text-light ps-4 fs-3" href="/index.html"><b>Livraria</b></a>
                
                <button class="navbar-toggler bg-light border-0" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-3">
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="/index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="#">Lançamentos</a></li>
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="/nossas_lojas.html">Nossas Lojas</a></li>
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="/fale_conosco.html">Contato</a></li>
                         <li class="nav-item"><a class="nav-link text-light fw-bold" href="/sobre_livraria.html">Sobre</a></li>
                    </ul>
                </div>
                
                <div class="d-none d-lg-flex ms-auto me-3">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar livro..." aria-label="Search">
                        <button class="btn btn-outline-light text-dark" type="submit">Buscar</button>
                    </form>
                </div>

                <div class="d-flex align-items-center me-4 mt-2 mt-lg-0">
                    <a href="/login.html" class="text-white me-3 fs-4" title="Login"><i class="bi bi-person-circle"></i></a>
                    <div class="position-relative">
                        <a href="/carrinho.html" class="text-white fs-4" title="Carrinho"><i class="bi bi-cart3"></i></a>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.7rem;">5</span>
                    </div>
                </div>
            </div>
        </nav>
        `;
        destacarPaginaAtual();
    }
}

function carregarFooter() {
    const footerContainer = document.getElementById("footer-placeholder");

    if (footerContainer) {
        footerContainer.innerHTML = `
        <footer class="border-top text-muted bg-dark pt-5 pb-4 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 text-center text-md-start mb-4">
                        <b class="text-light d-block mb-2">Atendimento</b>
                        <a href="/politica_venda.html" class="text-decoration-none text-secondary d-block hover-link">Política de Vendas e Trocas</a>
                        <a href="/termos.html" class="text-decoration-none text-secondary d-block hover-link">Termos e Condições</a>
                        <a href="/fale_conosco.html" class="text-decoration-none text-secondary d-block hover-link">Fale Conosco</a>
                    </div>
                    <div class="col-12 col-md-4 text-center mb-4">
                        <b class="text-light d-block mb-2">Institucional</b>
                        <a href="/sobre_livraria.html" class="text-decoration-none text-secondary d-block hover-link">Sobre a Livraria</a>
                        <a href="/nossas_lojas.html" class="text-decoration-none text-secondary d-block hover-link">Nossas Lojas</a>
                        <a href="/trabalhe_conosco.html" class="text-decoration-none text-secondary d-block hover-link">Trabalhe Conosco</a>
                    </div>
                    <div class="col-12 col-md-4 text-center text-md-end">
                        <b class="text-light d-block mb-2">Contato</b>
                        <a href="/contato.html" class="text-decoration-none text-secondary d-block hover-link mb-2">Formulário do Site</a>
                        
                        <a href="mailto:email@dominio.com" class="text-decoration-none text-secondary d-block mb-2">
                            <i class="bi bi-envelope me-2"></i>email@dominio.com
                        </a>
                        <a href="tel:+5528999990000" class="text-decoration-none text-secondary d-block">
                            <i class="bi bi-telephone me-2"></i>(28) 99999-0000
                        </a>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center text-secondary">
                        <small>&copy; 2025 Livraria. Todos os direitos reservados.</small>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

function destacarPaginaAtual() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.style.textDecoration = 'underline';
        }
    });
}