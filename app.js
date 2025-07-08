// Assumindo que a variável 'dados' com as músicas existe aqui fora

function pesquisar() {

    // Pega o elemento da seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Pega o valor do campo de pesquisa e converte para minúsculas (para busca case-insensitive)
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        // Se o campo de pesquisa estiver vazio, exibe uma mensagem e sai da função
        section.innerHTML = '<p>Por favor, insira um termo de pesquisa.</p>';
        return; 
    }
    
    // ERRO 2 CORRIGIDO: Inicializa a variável 'resultados' como uma string vazia antes do loop.
    let resultados = '';

    // Loop em cada objeto 'dado' dentro do array 'dados'
    for (let dado of dados) {
        
        // Converte o nome da música para minúsculas antes de comparar
        const nomeDaMusica = dado.nome.toLowerCase();
        const artistaDaMusica = dado.artista.toLowerCase();
        const descricaoDaMusica = dado.descricao.toLowerCase();
        const linkDaMusica = dado.link.toLowerCase();
        const imagemDaMusica = dado.imagem.toLowerCase();
        const tagsDaMusica = dado.tags.map(tag => tag.toLowerCase()).join(' '); // Converte as tags para minúsculas e junta em uma string

        if (nomeDaMusica.includes(campoPesquisa) || 
        artistaDaMusica.includes(campoPesquisa) || 
        descricaoDaMusica.includes(campoPesquisa) || 
        linkDaMusica.includes(campoPesquisa) || 
        imagemDaMusica.includes(campoPesquisa) || 
        tagsDaMusica.includes(campoPesquisa)) {
            // Se encontrar uma correspondência, concatena o HTML na variável 'resultados'
            resultados += `
                <div class="item-resultado">
                    <h2>Resultados da Pesquisa</h2>
                    <h3>${dado.nome} - ${dado.artista}</h3>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Música no Youtube</a>
                </div>`;
        }
    }
    section.innerHTML = resultados;

    // Se nenhum resultado for encontrado, você pode exibir uma mensagem.
    if (!resultados) {
        section.innerHTML = '<p>Nenhuma música encontrada com esse termo.</p>';
        return;
    }
}