/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão clicado como se estivesse 
    selecionada

    - passo 5 - esconder a imagem anterior

    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        mudarAsDescricoes(indice);
    })
})

function mudarAsDescricoes(indice) {
    if (imagens[indice] == imagens[0]) {
        document.querySelector('.descricao').innerHTML = 'The Last of Us é uma série distópica da HBO baseada na franquia de jogos de videogame de mesmo nome criada por Neil Druckmann. O drama narra um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção.';
    }
    if (imagens[indice] == imagens[1]) {
        document.querySelector('.descricao').innerHTML = 'Joel é o protagonista de The Last of Us, onde acompanhamos sua vida durante e depois do surto (como é chamada a transmissão fúngica ocorrida na série). O protagonista era um construtor antes do evento, quando tinha 36 anos. Foi na noite de seu aniversário que fugiu com a filha Sarah e o irmão Tommy para um lugar seguro, mas uma tragédia mudou sua vida para sempre.';
    }
    if (imagens[indice] == imagens[2]) {
        document.querySelector('.descricao').innerHTML = 'É durante um trabalho de contrabando que Joel conhece Ellie, adolescente que virá a ser sua parceira. Os dois se conhecem por intermédio de Marlene, a líder do grupo rebelde Vaga-lumes, que pede a Joel e sua parceira Tess que levem a jovem para um agrupamento da guerrilha em Massachusetts.';
    }
    if (imagens[indice] == imagens[3]) {
        document.querySelector('.descricao').innerHTML = 'A adolescente Ellie é uma garota órfã de 14 anos que viveu aos cuidados da FEDRA (sigla em inglês para Agência Federal de Resposta a Desastres), mas que após sua fuga foi parar em uma instalação dos Vaga-lumes.';
    }
    if (imagens[indice] == imagens[4]) {
        document.querySelector('.descricao').innerHTML = 'Inicialmente é vista como uma "carga" por Joel; porém, durante as explorações feitas entre os dois, a relação entre eles se torna mais fraternal.';
    }
    if (imagens[indice] == imagens[5]) {
        document.querySelector('.descricao').innerHTML = 'Ellie é protegida por Marlene pois esconde em seu organismo uma possível resposta ao surto de Cordyceps (fungo responsável pela pandemia). Mesmo infectada, ela não desenvolve a doença como outros.';
    }
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}