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

// --- DADOS DOS PRODUTOS (LIVROS) ---
const livros = [
    {
        id: 1,
        titulo: "Café com Deus",
        preco: "R$ 84,50",
        imagem: "img/cafe-com-Deus.jpg",
        descricao: "Um momento diário de renovação espiritual e conexão profunda com o divino através da leitura.",
        link: "carrinho.html"
    },
    {
        id: 2,
        titulo: "Harry Potter e o Cálice de Fogo",
        preco: "R$ 54,50",
        imagem: "img/calice-de-fogo.jpg",
        descricao: "O quarto ano em Hogwarts traz desafios mortais e o retorno de forças sombrias.",
        link: "carrinho.html"
    },
    {
        id: 3,
        titulo: "Como Fazer Amigos",
        preco: "R$ 34,50",
        imagem: "img/como-fazer-amigos.jpg",
        descricao: "O guia clássico e definitivo sobre como se relacionar, influenciar pessoas e obter sucesso.",
        link: "carrinho.html"
    },
    {
        id: 4,
        titulo: "Heartstopper",
        preco: "R$ 39,90",
        imagem: "img/de-maos-dadas.jpg",
        descricao: "Uma história doce e emocionante sobre amizade, descobertas e o primeiro amor.",
        link: "carrinho.html"
    },
    {
        id: 5,
        titulo: "Deixe de Ser Pobre",
        preco: "R$ 48,60",
        imagem: "img/deixa-de-se-pobre!.jpg",
        descricao: "Estratégias diretas para mudar sua mentalidade financeira e começar a acumular riqueza.",
        link: "carrinho.html"
    },
    {
        id: 6,
        titulo: "Fahrenheit 451",
        preco: "R$ 41,50",
        imagem: "img/fahrenheit.jpg",
        descricao: "Um futuro distópico onde livros são proibidos e bombeiros têm a missão de queimá-los.",
        link: "carrinho.html"
    },
    {
        id: 7,
        titulo: "A Garota do Lago",
        preco: "R$ 29,90",
        imagem: "img/garota-do-lago.jpg",
        descricao: "Um thriller investigativo cheio de reviravoltas sobre segredos sombrios em uma cidade pequena.",
        link: "carrinho.html"
    },
    {
        id: 8,
        titulo: "Mais Esperto que o Diabo",
        preco: "R$ 43,50",
        imagem: "img/mais-esperto.jpg",
        descricao: "Uma entrevista exclusiva com o Diabo para descobrir como superar medos e procrastinação.",
        link: "carrinho.html"
    }
];

// --- FUNÇÃO PARA GERAR OS CARDS NA TELA ---
function carregarProdutos() {
    const container = document.getElementById("produtos-container");
    
    // Verifica se o container existe (só vai existir na home)
    if (!container) return;

    let htmlContent = "";

    livros.forEach(livro => {
        htmlContent += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card text-center bg-light h-100 shadow-sm hover-card">
                <a href="#" class="position-absolute end-0 p-3 text-danger" title="Favoritar">
                    <i class="bi bi-suit-heart" style="font-size: 24px;"></i>
                </a>
                
                <div style="height: 250px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <a href="/produto.html?id=${livro.id}">
                        <img src="${livro.imagem}" class="card-img-top p-3" alt="Capa do livro ${livro.titulo}" style="max-height: 100%; width: auto;">
                    </a>
                </div>

                <div class="card-header fw-bold text-success">
                    ${livro.preco}
                </div>
                
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title"><b>${livro.titulo}</b></h5>
                    <p class="card-text text-muted small flex-grow-1">${livro.descricao}</p>
                </div>
                
                <div class="card-footer bg-white border-top-0 pb-3">
                    <a href="${livro.link}" class="btn btn-warning w-100 fw-bold">
                        Adicionar ao Carrinho
                    </a>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// Adiciona a função de produtos ao carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    // ... (suas funções anteriores de Navbar e Footer continuam aqui)
    carregarProdutos();
});
