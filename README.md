# Músicas.net

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
