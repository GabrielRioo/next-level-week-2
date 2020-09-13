# next-level-week-2

## Anotações:

### Maik:
* Tamanho de fonte padrão: 16px / 100% / 1rem
* rem - é relativo a fonte que foi definida no `:root` (Root Element)
* `Font` = **font-weigth + font-family + font-size**
* `justify-content: space-evenly;` - espaçamento constante entre os elementos.

### Diego:
#### Preparando Ambiente:
* Criando o projeto: `yarn create react-app web --template typescript` - adiciona um template com tipagem
   * no terminal do VS Code: `yarn start` - Starta o projeto
   * Remover arquivos: /src/ - **App.css, App.test.tsx, index.css, logo.svg, serviceWorker.ts, setupTests.ts, README.md**
      * Ir no Index.tsx e remover: `import * as serviceWorker from './serviceWorker';` e `import './index.css';`
      * Ir em App.tsx e remover: `import logo from './logo.svg';` e `import './App.css';`. E Remover **TODO O HEADER**
   * Na pasta **public** deixar apenas o **index.html**
      * No index.html remover: 
         * `<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />`
         * `<meta name="description" content="Web site created using create-react-app"/>`
         * `<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />`
         * `<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />`
* Caso no seu terminal nao tenha o comando `. code` é so ir no visual studio code e digitar: `install code command in path`

* **Componentes** dentro do REACT, são funçoes que retornam um HTML (coisas que vão se repetir na aplicação)
   * Nome da função sempre começa com letra **Maiuscula**, pois assim difere das tags do HTML
   * Importar sempre o React mesmo que não esteja sendo usada `import React from 'react'`
   * Quando se trabalha com HTML dentro do JavaScript se chama: **JSX** - JavaScript + XML
   
* global.css - Estilizações globais, aplicados em qualquer pagina que o usuário estiver usando.

* Fontes: Archive e Poppins

* Imagens: é necessário importar as imagens para utiliza-las como variaveis no HTML:
   * `import logoImg from '../../asstes/logo.svg'` - na qual logoImg é um nome a sua escolha.
   * `<img src={logoImg} alt="logo" />`

* CSS:
  ```
  display: grid;
  grid-template-rows: 350px 1fr;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-areas: 
      "logo hero hero"
      "buttons buttons total"
  ;
  ```


#### Pastas:
* Public
   * index.html 
   * favicon
* src: O projeto em si
   * Assets: Imagens e **Estilo Global CSS**
   * Pages: Todos os componentes
   
* O CSS poe em cada pasta de cada componente.

