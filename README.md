# next-level-week-2

## Anotações:

### Maik: (proxima aula: 04)
* Tamanho de fonte padrão: 16px / 100% / 1rem
* rem - é relativo a fonte que foi definida no `:root` (Root Element)
* `Font` = **font-weigth + font-family + font-size**
* `justify-content: space-evenly;` - espaçamento constante entre os elementos.
* Por um favicon: `<link rel="shortcut icon" href="">`
* Um botão so envia um formulario se estiver dentro do `form`
   * A não ser que o botão fora do form tenha como parâmetro `<button type="submit" form="id_Form">`
* `!important` - tem a maior força no CSS   
* JavaScript no **final do Body**, para que leia todo HTML antes do codigo JavaScript
   * Ou usar no head como: `script src="/script/main.js" defer>` com o **defer** ele vai ler o codigo html e depois o JS.
* Clonar uma tag HTML e por na Pagina:
```
// Duplicar os campos
const field = document.querySelector('.schedule-item').cloneNode(true)
// Colocar na página 
document.querySelector('#schedule-items').appendChild(field)
```
* Baixar o **node.js** LTS - nodejs.org
* `npm init -y` - cria o package.json
* `npm install express `- biblioteca (node modules)
* `package-lock.json` - mapear as dependencias da aplicação
* `npm install nodemon -D` - monitoramento de reinicialiação automatica do servidor (-D é so para desenvelvimento)
   * alterar no package.json o script para: `"dev": "nodemon src/server.js"` 
   * Rodar com: `npm run dev`
* `npm install nunjucks` - Template Engine


### Diego: (proxima aula: 02)
(assisti a aula 03 - parei faltando 50min)
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

* `yarn add react-router-dom` - navegação do endereço.
   * `yarn add @types/react-router-dom -D` O -D significa que só terá essa dependencia em Desenvolvimento
   * Criar em src: `routes.tsx`
   * **Propriedades** são atributos para uma tag.
   ```
   <BrowserRouter>
       <Route path="/" component={Landing} exact/>
   </BrowserRouter>
   ```
   * **Path** - é o caminho na barra de endereço
   * **compoment** - é qual pagina irá carregar.
   * **HOT RELOAD** - `import { Link } from 'react-router-dom'`
      * Substituir as tag `<a href=""> </a>` por `<Link to=""> </Link>` 
   

* **Componentes** dentro do REACT, são funçoes que retornam um HTML (coisas que vão se repetir ao longo da aplicação)
   * Nome da função sempre começa com letra **Maiuscula**, pois assim difere das tags do HTML
   * Importar sempre o React mesmo que não esteja sendo usada `import React from 'react'`
   * Quando se trabalha com HTML dentro do JavaScript se chama: **JSX** - JavaScript + XML
   
* TypeScript: Para você poder usar variaveis em varias paginas.<br>
**Componente:**
```
interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
      <strong> { props.title } </strong>
    )
```
**Pagina:**<br>
`<PageHeader title="Que incrível que você quer dar aulas." />` 


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
  
  .logo-container {
        grid-area: logo;
  }
  .hero-image {
        grid-area: hero;
  }
  
  ...
  ```


#### Pastas:
* Public
   * index.html 
   * favicon
* src: O projeto em si
   * assets: Imagens e **Estilo Global CSS**
   * pages: Todos os componentes
   * components: coisas que vão ser compartilhadas com diversas paginas.
   
* O CSS poe em cada pasta de cada componente.

