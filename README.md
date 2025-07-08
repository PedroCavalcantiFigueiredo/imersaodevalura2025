# Músicas.net

- https://imersaodevalura2025.vercel.app/

`Músicas.net` é uma aplicação web front-end simples e elegante que funciona como um motor de busca para um catálogo de músicas. O projeto permite aos usuários pesquisar dinamicamente em uma lista predefinida de canções e visualizar os resultados em tempo real. A interface é limpa, responsiva e focada na experiência do usuário.
Foi desenvolvido durante a Imersão Dev da Alura 2024.
## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Funciona](#-como-funciona)
  - [Estrutura dos Dados](#estrutura-dos-dados)
  - [Lógica da Aplicação](#lógica-da-aplicação)
  - [Estilização](#estilização)
- [Como Executar](#-como-executar)
- [Estrutura dos Arquivos](#-estrutura-dos-arquivos)
- [Contato](#-contato)

## ✨ Visão Geral

A aplicação apresenta uma interface com um campo de busca central. O usuário pode digitar qualquer termo relacionado a uma música (nome, artista, gênero, etc.), e a aplicação filtrará o catálogo, exibindo os resultados correspondentes. Cada resultado inclui o nome da música, o artista, uma breve descrição e um link para ouvi-la no YouTube.

## 🚀 Funcionalidades

-   **Busca Dinâmica:** Pesquise em todo o catálogo de músicas por nome, artista, descrição e tags.
-   **Resultados em Tempo Real:** Os resultados são exibidos instantaneamente na página sem a necessidade de recarregamento.
-   **Interface Limpa:** Design minimalista com foco na usabilidade.
-   **Design Responsivo:** A aplicação se adapta perfeitamente a diferentes tamanhos de tela, desde desktops até dispositivos móveis.
-   **Links Externos:** Cada resultado fornece um link direto para a música no YouTube.

## 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web fundamentais:

-   **HTML5:** Para a estrutura semântica da página.
-   **CSS3:** Para a estilização, utilizando recursos modernos como:
    -   **Flexbox:** Para criar layouts flexíveis e alinhamento de itens.
    -   **Media Queries:** Para garantir a responsividade em diferentes dispositivos.
    -   **Fontes Customizadas:** Importação da fonte "Chakra Petch" do Google Fonts.
-   **JavaScript (ES6):** Para toda a lógica de interatividade, incluindo:
    -   Manipulação do DOM para exibir os resultados da busca.
    -   Lógica de filtragem e iteração sobre o conjunto de dados.

## 🛠️ Como Funciona

A aplicação é dividida em três arquivos principais que separam a estrutura (`index.html`), a lógica (`app.js` e `dados.js`) e a apresentação (`style.css`).

### Estrutura dos Dados (`dados.js`)

O arquivo `dados.js` atua como o banco de dados da aplicação. Ele contém um único array de objetos chamado `dados`. Cada objeto representa uma música e possui a seguinte estrutura:

```javascript
{
    nome: "Nome da Música",
    artista: "Nome do Artista",
    descricao: "Descrição detalhada da música.",
    link: "URL para a música",
    imagem: "URL de uma imagem representativa",
    tags: ["tag1", "tag2", "tag3"]
}
```

## Lógica da Aplicação (app.js)
A interatividade é controlada pelo arquivo app.js. A função principal é a pesquisar():

- Captura do Input: A função é acionada pelo clique no botão "Pesquisar". Ela obtém o valor digitado no campo de pesquisa (id="campo-pesquisa") e o converte para letras minúsculas para garantir uma busca case-insensitive.

- Validação: Verifica se o campo de pesquisa não está vazio.

- Iteração e Filtragem: A função itera sobre cada objeto no array dados. Para cada música, ela compara o termo de pesquisa com os valores das chaves nome, artista, descricao, link, imagem e tags.

- Renderização Dinâmica: Se uma correspondência for encontrada, um bloco HTML é gerado dinamicamente com as informações da música e concatenado a uma variável de resultados.

- Exibição no DOM: Ao final do loop, o conteúdo da seção de resultados (id="resultados-pesquisa") é substituído pelo HTML gerado. Caso nenhum resultado seja encontrado, uma mensagem informativa é exibida.

## Estilização (style.css)
O style.css é responsável por toda a aparência visual da aplicação.

- Layout: Utiliza display: flex no body para centralizar todo o conteúdo vertical e horizontalmente na página.

- Fonte: A fonte Chakra Petch é importada do Google Fonts para dar uma identidade visual única ao projeto.

- Responsividade: @media queries são usadas para ajustar o tamanho das fontes, larguras dos inputs e da área de resultados para telas menores, como tablets (max-width: 768px) e celulares (max-width: 480px).

- Efeitos Visuais: Efeitos sutis de hover são aplicados aos botões e links para melhorar a interatividade e o feedback visual para o usuário.

##🚀 Como Executar
Para executar este projeto localmente, siga os passos abaixo:

- Clone o repositório:
Bash
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)

- Navegue até o diretório do projeto:
Bash
cd nome-do-repositorio

- Abra o arquivo index.html:

Não é necessário um servidor web. Basta abrir o arquivo index.html diretamente em seu navegador de preferência (Google Chrome, Firefox, etc.).

## 📁 Estrutura dos Arquivos
.
- ├── 📄 index.html      # Arquivo principal com a estrutura da página
- ├── 🎨 style.css       # Folha de estilos para a aplicação
- ├── 🧠 app.js         # Lógica principal da aplicação (função de pesquisa)
- └── 🎵 dados.js        # Banco de dados com o catálogo de músicas
## 📬 Contato
Desenvolvido por Pedro – pedraions@gmail.com

Sinta-se à vontade para entrar em contato para feedback ou sugestões!
