// =========================================================================
// BANCO DE DADOS (Simulação)
// =========================================================================
const livros = [
    {
        id: 1,
        titulo: "Café com Deus Pai",
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

// =========================================================================
// 1. FUNÇÃO DA NAVBAR (Cabeçalho)
// =========================================================================
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
                <a class="navbar-brand text-light ps-4 fs-3" href="index.html"><b>Livraria</b></a>
                
                <button class="navbar-toggler bg-light border-0" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-3">
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="#">Lançamentos</a></li>
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="nossas_lojas.html">Nossas Lojas</a></li>
                        <li class="nav-item"><a class="nav-link text-light fw-bold" href="fale_conosco.html">Contato</a></li>
                         <li class="nav-item"><a class="nav-link text-light fw-bold" href="sobre_livraria.html">Sobre</a></li>
                    </ul>
                </div>
                
                <div class="d-none d-lg-flex ms-auto me-3">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar livro..." aria-label="Search">
                        <button class="btn btn-outline-light text-dark" type="submit">Buscar</button>
                    </form>
                </div>

                <div class="d-flex align-items-center me-4 mt-2 mt-lg-0">
                    <a href="login.html" class="text-white me-3 fs-4" title="Login"><i class="bi bi-person-circle"></i></a>
                    <div class="position-relative">
                        <a href="carrinho.html" class="text-white fs-4" title="Carrinho"><i class="bi bi-cart3"></i></a>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.7rem;">5</span>
                    </div>
                </div>
            </div>
        </nav>
        `;
        destacarPaginaAtual();
    }
}

// =========================================================================
// 2. FUNÇÃO DO FOOTER (Rodapé)
// =========================================================================
function carregarFooter() {
    const footerContainer = document.getElementById("footer-placeholder");

    if (footerContainer) {
        footerContainer.innerHTML = `
        <footer class="border-top text-muted bg-dark pt-5 pb-4 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 text-center text-md-start mb-4">
                        <b class="text-light d-block mb-2">Atendimento</b>
                        <a href="politica_venda.html" class="text-decoration-none text-secondary d-block hover-link">Política de Vendas e Trocas</a>
                        <a href="termos.html" class="text-decoration-none text-secondary d-block hover-link">Termos e Condições</a>
                        <a href="fale_conosco.html" class="text-decoration-none text-secondary d-block hover-link">Fale Conosco</a>
                    </div>
                    <div class="col-12 col-md-4 text-center mb-4">
                        <b class="text-light d-block mb-2">Institucional</b>
                        <a href="sobre_livraria.html" class="text-decoration-none text-secondary d-block hover-link">Sobre a Livraria</a>
                        <a href="nossas_lojas.html" class="text-decoration-none text-secondary d-block hover-link">Nossas Lojas</a>
                        <a href="trabalhe_conosco.html" class="text-decoration-none text-secondary d-block hover-link">Trabalhe Conosco</a>
                    </div>
                    <div class="col-12 col-md-4 text-center text-md-end">
                        <b class="text-light d-block mb-2">Contato</b>
                        <a href="fale_conosco.html" class="text-decoration-none text-secondary d-block hover-link mb-2">Formulário do Site</a>
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

// =========================================================================
// 3. FUNÇÃO HOME (Carregar Lista de Produtos) - VERSÃO SEGURA
// =========================================================================
function carregarProdutos() {
    const container = document.getElementById("produtos-container");
    
    if (!container) return; // Se não estiver na home, para.

    let htmlContent = "";

    livros.forEach(livro => {
        htmlContent += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card text-center bg-light h-100 shadow-sm hover-card position-relative">
                
                <div style="height: 250px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <a href="produto.html?id=${livro.id}" class="d-block">
                        <img src="${livro.imagem}" class="card-img-top p-3" alt="${livro.titulo}" style="max-height: 100%; width: auto;">
                    </a>
                </div>

                <div class="card-header fw-bold text-success">
                    ${livro.preco}
                </div>
                
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                        <a href="produto.html?id=${livro.id}" class="text-decoration-none text-dark">
                            <b>${livro.titulo}</b>
                        </a>
                    </h5>
                    <p class="card-text text-muted small flex-grow-1 truncar-3l">
                        ${livro.descricao}
                    </p>
                </div>
                
                <div class="card-footer bg-white border-top-0 pb-3">
                    <a href="carrinho.html" class="btn btn-warning w-100 fw-bold">
                        Adicionar ao Carrinho
                    </a>
                </div>

            </div>
        </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// =========================================================================
// 4. FUNÇÃO DETALHES DO PRODUTO (Página produto.html)
// =========================================================================
function carregarDetalhesProduto() {
    const container = document.getElementById("detalhe-produto");
    if (!container) return; 

    // Pega o ID da URL (ex: produto.html?id=2)
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // Busca o livro na lista
    const livro = livros.find(item => item.id == id);

    if (!livro) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3 class="text-muted">Produto não encontrado :(</h3>
                <a href="index.html" class="btn btn-warning mt-3">Voltar para a Loja</a>
            </div>
        `;
        return;
    }

    // Atualiza o Breadcrumb
    const breadcrumbTitulo = document.getElementById("breadcrumb-titulo");
    if(breadcrumbTitulo) breadcrumbTitulo.innerText = livro.titulo;

    // Renderiza o produto
    container.innerHTML = `
        <div class="col-12 col-md-6 text-center">
            <div class="p-4 border rounded bg-light shadow-sm d-inline-block">
                <img src="${livro.imagem}" class="img-fluid" style="max-height: 450px;" alt="${livro.titulo}">
            </div>
        </div>

        <div class="col-12 col-md-6">
            <h6 class="text-uppercase text-muted tracking-wide">Livro Físico</h6>
            <h1 class="display-5 fw-bold mb-3">${livro.titulo}</h1>
            
            <div class="mb-3">
                <span class="fs-2 fw-bold text-success">${livro.preco}</span>
                <span class="text-muted ms-2"><small>em até 3x sem juros</small></span>
            </div>

            <p class="lead mb-4" style="font-size: 1.1rem;">
                ${livro.descricao}
                <br><br>
                Sinopse completa: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="d-grid gap-3 d-md-flex">
                <button class="btn btn-warning btn-lg px-5 fw-bold text-dark flex-grow-1">
                    <i class="bi bi-cart-plus me-2"></i> Adicionar ao Carrinho
                </button>
                <button class="btn btn-outline-dark btn-lg px-4" title="Favoritar">
                    <i class="bi bi-heart"></i>
                </button>
            </div>

            <div class="mt-5 border-top pt-4">
                <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-truck text-muted me-2 fs-5"></i>
                    <span>Entrega para todo o Brasil</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="bi bi-shield-check text-muted me-2 fs-5"></i>
                    <span>Compra 100% Segura</span>
                </div>
            </div>
        </div>
    `;
}

// =========================================================================
// 5. FUNÇÃO PÁGINA DE CONTATO (fale_conosco.html)
// =========================================================================
function configurarFormularioContato() {
    const formContato = document.getElementById("form-contato");
    
    if (formContato) {
        formContato.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const botao = formContato.querySelector('button[type="submit"]');
            const textoOriginal = botao.innerText;

            botao.disabled = true;
            botao.innerText = "Enviando...";

            setTimeout(() => {
                const msgSucesso = document.getElementById("msg-sucesso");
                if(msgSucesso) msgSucesso.classList.remove("d-none");
                
                formContato.reset();
                botao.disabled = false;
                botao.innerText = textoOriginal;

                setTimeout(() => {
                    if(msgSucesso) msgSucesso.classList.add("d-none");
                }, 5000);

            }, 1500); 
        });
    }
}

// =========================================================================
// UTILITÁRIOS
// =========================================================================
function destacarPaginaAtual() {
    const currentPath = window.location.pathname.split("/").pop(); // Pega só o nome do arquivo
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add('active');
            link.style.textDecoration = 'underline';
        }
    });
}

// =========================================================================
// INICIALIZAÇÃO (Roda quando a página carrega)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Carrega Navbar e Footer em todas as páginas
    carregarNavbar();
    carregarFooter();

    // 2. Verifica se está na Home (lista de produtos)
    if (document.getElementById("produtos-container")) {
        carregarProdutos();
    }

    // 3. Verifica se está na página de Detalhes do Produto
    if (document.getElementById("detalhe-produto")) {
        carregarDetalhesProduto();
    }

    // 4. Verifica se está na página de Contato
    if (document.getElementById("form-contato")) {
        configurarFormularioContato();
    }
});
