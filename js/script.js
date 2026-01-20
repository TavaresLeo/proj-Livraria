// =========================================================================
// 1. DADOS DOS PRODUTOS (Simulando um Banco de Dados)
// =========================================================================
const livros = [
    {
        id: 1,
        titulo: "Café com Deus Pai",
        preco: "R$ 84,50",
        imagem: "img/cafe-com-Deus.jpg",
        descricao: "Um momento diário de renovação espiritual e conexão profunda com o divino através da leitura."
    },
    {
        id: 2,
        titulo: "Harry Potter e o Cálice de Fogo",
        preco: "R$ 54,50",
        imagem: "img/calice-de-fogo.jpg",
        descricao: "O quarto ano em Hogwarts traz desafios mortais e o retorno de forças sombrias."
    },
    {
        id: 3,
        titulo: "Como Fazer Amigos",
        preco: "R$ 34,50",
        imagem: "img/como-fazer-amigos.jpg",
        descricao: "O guia clássico e definitivo sobre como se relacionar, influenciar pessoas e obter sucesso."
    },
    {
        id: 4,
        titulo: "Heartstopper",
        preco: "R$ 39,90",
        imagem: "img/de-maos-dadas.jpg",
        descricao: "Uma história doce e emocionante sobre amizade, descobertas e o primeiro amor."
    },
    {
        id: 5,
        titulo: "Deixe de Ser Pobre",
        preco: "R$ 48,60",
        imagem: "img/deixa-de-se-pobre!.jpg",
        descricao: "Estratégias diretas para mudar sua mentalidade financeira e começar a acumular riqueza."
    },
    {
        id: 6,
        titulo: "Fahrenheit 451",
        preco: "R$ 41,50",
        imagem: "img/fahrenheit.jpg",
        descricao: "Um futuro distópico onde livros são proibidos e bombeiros têm a missão de queimá-los."
    },
    {
        id: 7,
        titulo: "A Garota do Lago",
        preco: "R$ 29,90",
        imagem: "img/garota-do-lago.jpg",
        descricao: "Um thriller investigativo cheio de reviravoltas sobre segredos sombrios em uma cidade pequena."
    },
    {
        id: 8,
        titulo: "Mais Esperto que o Diabo",
        preco: "R$ 43,50",
        imagem: "img/mais-esperto.jpg",
        descricao: "Uma entrevista exclusiva com o Diabo para descobrir como superar medos e procrastinação."
    }
];

// =========================================================================
// 2. COMPONENTES (Navbar e Footer)
// =========================================================================
function carregarNavbar() {
    const navbarContainer = document.getElementById("navbar-placeholder");

    if (navbarContainer) {
        navbarContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-warning py-3 shadow-sm" id="navbar">
            <div class="container">
                
                <button class="navbar-toggler bg-light border-0" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link fw-bold" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link fw-bold" href="#">Lançamentos</a></li>
                        <li class="nav-item"><a class="nav-link fw-bold" href="nossas_lojas.html">Nossas Lojas</a></li>
                        <li class="nav-item"><a class="nav-link fw-bold" href="fale_conosco.html">Contato</a></li>
                        <li class="nav-item"><a class="nav-link fw-bold" href="sobre_livraria.html">Sobre</a></li>
                    </ul>

                    <div class="d-flex flex-column flex-lg-row align-items-lg-center gap-3">
                        
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar livro..." aria-label="Search">
                            <button class="btn btn-outline-dark" type="submit"><i class="bi bi-search"></i></button>
                        </form>

                        <div class="d-flex align-items-center gap-3 ms-lg-2">
                            <a href="login.html" class="text-dark fs-4" title="Login">
                                <i class="bi bi-person-circle"></i>
                            </a>
                            
                            <div class="position-relative">
                                <a href="carrinho.html" class="text-dark fs-4" title="Carrinho"><i class="bi bi-cart3"></i></a>
                                <span id="contador-carrinho" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.7rem; display: none;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        `;
        destacarPaginaAtual();
    }
}

// =========================================================================
// 3. FUNÇÃO DO FOOTER (Rodapé)
// =========================================================================
// =========================================================================
// 3. FUNÇÃO DO FOOTER (Rodapé) - ATUALIZADA
// =========================================================================
function carregarFooter() {
    const footerContainer = document.getElementById("footer-placeholder");

    if (footerContainer) {
        // Note que removemos 'bg-dark' e adicionamos 'footer-custom'
        footerContainer.innerHTML = `
        <footer class="footer-custom pt-5 pb-4 mt-5">
            <div class="container">
                <div class="row">
                    
                    <div class="col-12 col-md-4 text-center text-md-start mb-4">
                        <b class="d-block">Atendimento</b>
                        <a href="politica_venda.html" class="footer-link">Política de Vendas e Trocas</a>
                        <a href="termos.html" class="footer-link">Termos e Condições</a>
                        <a href="fale_conosco.html" class="footer-link">Fale Conosco</a>
                    </div>

                    <div class="col-12 col-md-4 text-center mb-4">
                        <b class="d-block">Institucional</b>
                        <a href="sobre_livraria.html" class="footer-link">Sobre a Livraria</a>
                        <a href="nossas_lojas.html" class="footer-link">Nossas Lojas</a>
                        <a href="trabalhe_conosco.html" class="footer-link">Trabalhe Conosco</a>
                    </div>

                    <div class="col-12 col-md-4 text-center text-md-end footer-contact">
                        <b class="d-block">Contato</b>
                        <a href="fale_conosco.html" class="footer-link mb-2">Formulário do Site</a>
                        
                        <div class="mb-2">
                            <a href="mailto:email@dominio.com">
                                <i class="bi bi-envelope me-2"></i>email@dominio.com
                            </a>
                        </div>
                        <div>
                            <a href="tel:+5528999990000">
                                <i class="bi bi-telephone me-2"></i>(28) 99999-0000
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-12">
                        <div class="footer-divider pt-3 text-center">
                            <small>&copy; 2025 Livraria. Todos os direitos reservados.</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

// =========================================================================
// 4. FUNÇÃO HOME (Carregar Lista de Produtos)
// =========================================================================
function carregarProdutos() {
    const container = document.getElementById("produtos-container");
    if (!container) return; 

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
                    <button onclick="adicionarAoCarrinho(${livro.id})" class="btn btn-warning w-100 fw-bold">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// =========================================================================
// 5. FUNÇÃO DETALHES DO PRODUTO (Página produto.html)
// =========================================================================
function carregarDetalhesProduto() {
    const container = document.getElementById("detalhe-produto");
    if (!container) return; 

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
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

    const breadcrumbTitulo = document.getElementById("breadcrumb-titulo");
    if(breadcrumbTitulo) breadcrumbTitulo.innerText = livro.titulo;

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
            </p>
            <div class="d-grid gap-3 d-md-flex">
                <button onclick="adicionarAoCarrinho(${livro.id})" class="btn btn-warning btn-lg px-5 fw-bold text-dark flex-grow-1">
                    <i class="bi bi-cart-plus me-2"></i> Adicionar ao Carrinho
                </button>
                <button class="btn btn-outline-dark btn-lg px-4" title="Favoritar">
                    <i class="bi bi-heart"></i>
                </button>
            </div>
        </div>
    `;
}

// =========================================================================
// 6. FUNÇÃO CARRINHO DE COMPRAS
// =========================================================================
function carregarCarrinho() {
    const container = document.getElementById("itens-carrinho");
    if (!container) return;

    const carrinhoIds = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (carrinhoIds.length === 0) {
        container.innerHTML = `<div class="alert alert-warning text-center">Seu carrinho está vazio :(</div>`;
        atualizarTotais(0);
        return;
    }

    let htmlItens = "";
    let totalGeral = 0;

    carrinhoIds.forEach(item => {
        const livro = livros.find(l => l.id == item.id);
        if (livro) {
            const preco = parseFloat(livro.preco.replace("R$", "").replace(",", ".").trim());
            totalGeral += preco * item.quantidade;

            htmlItens += `
            <div class="card mb-3 shadow-sm">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center gap-3">
                            <img src="${livro.imagem}" width="60" class="rounded">
                            <div>
                                <h6 class="mb-0">${livro.titulo}</h6>
                                <small class="text-muted">Unitário: ${livro.preco}</small>
                            </div>
                        </div>
                        
                        <div class="d-flex align-items-center gap-4">
                            <div class="input-group input-group-sm" style="width: 100px;">
                                <button onclick="alterarQuantidade(${item.id}, -1)" class="btn btn-outline-secondary" type="button">-</button>
                                <input type="text" class="form-control text-center" value="${item.quantidade}" readonly>
                                <button onclick="alterarQuantidade(${item.id}, 1)" class="btn btn-outline-secondary" type="button">+</button>
                            </div>

                            <div class="text-end" style="min-width: 80px;">
                                <div class="fw-bold text-success mb-1">R$ ${(preco * item.quantidade).toFixed(2).replace(".", ",")}</div>
                                <button onclick="removerDoCarrinho(${item.id})" class="btn btn-sm btn-link text-danger text-decoration-none p-0">
                                    <small>Remover</small>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });

    container.innerHTML = htmlItens;
    atualizarTotais(totalGeral);
}

function atualizarTotais(valor) {
    const elementoSub = document.getElementById("valor-subtotal");
    const elementoTotal = document.getElementById("valor-total");
    
    if(elementoSub && elementoTotal) {
        const valorFormatado = "R$ " + valor.toFixed(2).replace(".", ",");
        elementoSub.innerText = valorFormatado;
        elementoTotal.innerText = valorFormatado;
    }
}

// =========================================================================
// 7. LÓGICA DE GERENCIAMENTO DO CARRINHO
// =========================================================================

function adicionarAoCarrinho(idLivro) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemExistente = carrinho.find(item => item.id === idLivro);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ id: idLivro, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Atualiza o badge imediatamente
    atualizarBadgeCarrinho();
    
    alert("Produto adicionado ao carrinho!");
}

// Função para aumentar ou diminuir quantidade
function alterarQuantidade(id, mudanca) {
    // 1. Pega o carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // 2. Encontra o item que foi clicado
    const item = carrinho.find(i => i.id === id);

    if (item) {
        // 3. Altera a quantidade
        item.quantidade += mudanca;

        // 4. Bloqueio de segurança: Não deixa baixar de 1
        if (item.quantidade < 1) {
            item.quantidade = 1;
        }
    }

    // 5. Salva e recarrega a tela
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho(); // Recalcula totais e redesenha a tela
    atualizarBadgeCarrinho(); // Atualiza o número no topo
}

function removerDoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
    atualizarBadgeCarrinho();
}

function atualizarBadgeCarrinho() {
    // 1. Pega os itens
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    // 2. Soma as quantidades
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

    // 3. Busca o elemento PELO ID (que agora existe na carregarNavbar)
    const badge = document.getElementById("contador-carrinho");

    if (badge) {
        badge.innerText = totalItens;
        // Se tem itens, mostra. Se é 0, esconde.
        badge.style.display = totalItens > 0 ? 'inline-block' : 'none';
    }
}

// =========================================================================
// 8. FORMULÁRIO DE CONTATO
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

function destacarPaginaAtual() {
    const currentPath = window.location.pathname.split("/").pop();
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
// 9. SISTEMA DE LOGIN (SIMULAÇÃO)
// =========================================================================

function configurarLogin() {
    const formLogin = document.getElementById("form-login");
    
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Pega o valor do email (Simulando que pegamos o nome do usuário)
            const email = document.getElementById("email").value;
            // Pega tudo antes do @ para usar como "Nome"
            const nomeUsuario = email.split("@")[0]; 

            // Salva no LocalStorage
            localStorage.setItem("usuario_logado", nomeUsuario);

            // Feedback e Redirecionamento
            alert(`Bem-vindo, ${nomeUsuario}!`);
            window.location.href = "index.html";
        });
    }
}

function verificarUsuarioLogado() {
    // Essa função roda na Navbar para mudar o ícone
    const usuario = localStorage.getItem("usuario_logado");
    const areaLogin = document.querySelector('a[title="Login"]'); // Busca o link do ícone de usuário

    if (usuario && areaLogin) {
        // Se tem usuário, troca o ícone pelo nome e botão de sair
        areaLogin.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <span class="fs-6 text-white">Olá, ${usuario}</span>
                <i class="bi bi-box-arrow-right text-danger fs-6" style="cursor:pointer" onclick="fazerLogout(event)" title="Sair"></i>
            </div>
        `;
        // Remove o link para não ir para a página de login de novo
        areaLogin.removeAttribute("href");
    }
}

function fazerLogout(event) {
    event.preventDefault(); // Evita comportamento padrão
    localStorage.removeItem("usuario_logado"); // Apaga o usuário
    window.location.reload(); // Recarrega a página
}

// =========================================================================
// 10. SISTEMA DE CADASTRO (NOVO)
// =========================================================================

function configurarCadastro() {
    const formCadastro = document.getElementById("form-cadastro");
    
    if (formCadastro) {
        formCadastro.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nome = document.getElementById("nome-cadastro").value;
            const senha = document.getElementById("senha-cadastro").value;
            const confirmSenha = document.getElementById("senha-confirm").value;
            const erroMsg = document.getElementById("erro-senha");

            // 1. Validação simples de senha
            if (senha !== confirmSenha) {
                erroMsg.classList.remove("d-none"); // Mostra erro
                return; // Para a execução
            } else {
                erroMsg.classList.add("d-none"); // Esconde erro
            }

            // 2. Simulação de Cadastro (Salva o nome como se tivesse logado)
            localStorage.setItem("usuario_logado", nome.split(" ")[0]); // Pega só o primeiro nome

            // 3. Feedback visual
            const botao = formCadastro.querySelector('button[type="submit"]');
            botao.disabled = true;
            botao.innerText = "Criando conta...";

            setTimeout(() => {
                alert("Conta criada com sucesso! Bem-vindo(a).");
                window.location.href = "index.html";
            }, 1000);
        });
    }
}

// =========================================================================
// 11. PÁGINA DE CHECKOUT (FINALIZAR COMPRA)
// =========================================================================

let valorFreteSelecionado = 0; // Variável global para guardar o frete

function carregarCheckout() {
    const listaResumo = document.getElementById("lista-resumo");
    if (!listaResumo) return;

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let subtotal = 0;
    let html = "";

    if (carrinho.length === 0) {
        window.location.href = "index.html"; // Se não tem item, joga pra home
        return;
    }

    // Desenha a lista de itens pequena
    carrinho.forEach(item => {
        const livro = livros.find(l => l.id == item.id);
        if (livro) {
            const preco = parseFloat(livro.preco.replace("R$", "").replace(",", ".").trim());
            const totalItem = preco * item.quantidade;
            subtotal += totalItem;

            html += `
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">${livro.titulo}</h6>
                    <small class="text-muted">Qtd: ${item.quantidade}</small>
                </div>
                <span class="text-muted">R$ ${totalItem.toFixed(2).replace(".", ",")}</span>
            </li>`;
        }
    });

    listaResumo.innerHTML = html;
    
    // Atualiza os valores na tela
    document.getElementById("resumo-subtotal").innerText = "R$ " + subtotal.toFixed(2).replace(".", ",");
    atualizarTotalFinal(subtotal);
}

// --- INTEGRAÇÃO COM API VIACEP ---
function buscarCep() {
    let cep = document.getElementById("cep").value.replace(/\D/g, ''); // Remove traços/pontos

    if (cep.length !== 8) {
        alert("CEP inválido. Digite 8 números.");
        return;
    }

    // Chama a API
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.erro) {
                document.getElementById("erro-cep").classList.remove("d-none");
            } else {
                document.getElementById("erro-cep").classList.add("d-none");
                
                // Preenche os campos automaticamente
                document.getElementById("endereco").value = dados.logradouro;
                document.getElementById("bairro").value = dados.bairro;
                document.getElementById("cidade").value = dados.localidade;
                document.getElementById("estado").value = dados.uf;
                
                // Foca no número para o usuário digitar
                document.getElementById("numero").focus();

                // Simula o cálculo de frete após achar o CEP
                simularOpcoesDeFrete(dados.uf);
            }
        })
        .catch(erro => {
            console.error("Erro na API:", erro);
            alert("Erro ao buscar CEP. Tente novamente.");
        });
}

function simularOpcoesDeFrete(estado) {
    const containerFrete = document.getElementById("opcoes-frete");
    
    // Simulação de preço baseada no estado (Sudeste mais barato, outros mais caros)
    let precoSedex = 25.00;
    let precoPac = 15.00;

    if (['SP', 'RJ', 'MG', 'ES'].includes(estado)) {
        precoSedex = 18.50;
        precoPac = 9.90;
    } else {
        precoSedex = 45.90;
        precoPac = 22.50;
    }

    containerFrete.innerHTML = `
        <div class="form-check border rounded p-3 mb-2">
            <input class="form-check-input" type="radio" name="frete" id="frete1" value="${precoPac}" onchange="atualizarFrete(this.value)" checked>
            <label class="form-check-label d-flex justify-content-between w-100" for="frete1">
                <span>Entrega Normal (PAC) - até 10 dias</span>
                <b>R$ ${precoPac.toFixed(2).replace(".", ",")}</b>
            </label>
        </div>
        <div class="form-check border rounded p-3">
            <input class="form-check-input" type="radio" name="frete" id="frete2" value="${precoSedex}" onchange="atualizarFrete(this.value)">
            <label class="form-check-label d-flex justify-content-between w-100" for="frete2">
                <span>Entrega Expressa (Sedex) - até 3 dias</span>
                <b>R$ ${precoSedex.toFixed(2).replace(".", ",")}</b>
            </label>
        </div>
    `;

    // Já seleciona o primeiro frete e atualiza o total
    atualizarFrete(precoPac);
}

function atualizarFrete(valor) {
    valorFreteSelecionado = parseFloat(valor);
    document.getElementById("resumo-frete").innerText = "R$ " + valorFreteSelecionado.toFixed(2).replace(".", ",");
    document.getElementById("resumo-frete").classList.add("text-success");
    
    // Recalcula o total geral
    carregarCheckout(); 
}

function atualizarTotalFinal(subtotal) {
    const total = subtotal + valorFreteSelecionado;
    document.getElementById("resumo-total").innerText = "R$ " + total.toFixed(2).replace(".", ",");
}

function finalizarPedidoReal() {
    const endereco = document.getElementById("endereco").value;
    const numero = document.getElementById("numero").value;

    if (!endereco || !numero) {
        alert("Por favor, preencha o endereço de entrega e o número.");
        return;
    }

    alert("SUCESSO! Seu pedido foi realizado.\nObrigado por comprar na Livraria!");
    
    // Limpa o carrinho e volta pra home
    localStorage.removeItem("carrinho");
    window.location.href = "index.html";
}

// =========================================================================
// 12. INICIALIZAÇÃO
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    carregarNavbar();
    carregarFooter();

    if (document.getElementById("produtos-container")) {
        carregarProdutos();
    }
    if (document.getElementById("detalhe-produto")) {
        carregarDetalhesProduto();
    }
    if (document.getElementById("itens-carrinho")) {
        carregarCarrinho();
    }
    if (document.getElementById("form-contato")) {
        configurarFormularioContato();
    }

    // Novas Funções de Login
    if (document.getElementById("form-login")) {
        configurarLogin();
    }

    if (document.getElementById("form-cadastro")) {
        configurarCadastro();
    }

    if (document.getElementById("form-checkout")) {
        carregarCheckout();
    }

    // Pequeno atraso para garantir que a Navbar carregou antes de buscar o badge
    setTimeout(() => {
        atualizarBadgeCarrinho();
        verificarUsuarioLogado();
    }, 100);
});