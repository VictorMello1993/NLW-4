<h2>API de pesquisa de satisfação do usuário </h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VictorMello1993/NLW-4?color=FF0000">
  
  <a href="https://github.com/VictorMello1993/FlappyBird/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VictorMello1993/NLW-4?color=D3D3D3">
  </a> 
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/VictorMello1993/NLW-4/stargazers"></a>
</p>


<p align="center">
  <a href="#earth_americas-visão-geral">Visão geral</a> •
  <a href="#wrench-recursos">Recursos</a> •
  <a href="#triangular_flag_on_postcomeçando">Começando</a> •  
  <a href="#triangular_flag_on_postexecutando-a-api">Executando a API</a> •  
  <a href="#melhorias-a-implementar">Melhorias a implementar</a> •  
</p>

<h2>:earth_americas: Visão geral</h2>
<p>API construída para reforçar os conhecimentos de back-end com Node.js durante o evento da NLW 4, promovida pela <a href="https://rocketseat.com.br/">Rocketseat</a>. Trata-se 
de uma aplicação responsável pela realização da pesquisa de satisfação do usuário via e-mail. A pesquisa utiliza o conceito de NPS (Net Promoter Score), as notas variam de 0 a 10, e o cálculo é feito da seguinte forma:
  
  <i>NPS = (nº de promotores - nº de detratores) / (nº de entrevistados) * 100</i>
  
  As notas devem seguir o seguinte critério:
  <ul>
    <li>Notas detratores variam de 0 a 6</li>
    <li>Notas passivas variam entre 7 e 8</li>
    <li>Notas promotores variam entre 9 e 10</li>
 </ul>
 
 Considerando a fórmula, isso demonstra que usuários que dão nota 7 ou 8 não estão fazendo parte da pesquisa, isso é para evitar ruídos. Portanto, normalmente o cálculo leva em consideração ou com notas detratores ou com notas promotores, e o resultado final é dado em porcentagem.
 
 ---
 
 <h2>:wrench: Recursos</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>TypeScript</li>
  <li>NodeJs</li>
  <li>Express</li>
  <li>Handlebars (Template Engine)</li>
  <li>SQLite</li>  
  <li>Jest (testes automatizados)</li>
  <li>Supertest (ferramenta de testes de integração)</li>
  <li>Nodemailer (biblioteca de envio de e-mails, utilizado em conjunto com SMTP da Ethereal)</li>
  <li>Insomnia (ferramenta para documentar as requisições realizadas pela API). Postman também serve.</li>
  <li>Beekeeper Studio (ferramenta de gerenciamento de banco de dados)</li>
</ul>

---

<h2>:triangular_flag_on_post:Começando</h2>


1 - Clone o repositório
```
git clone https://github.com/VictorMello1993/NLW-4.git
```
2 - Abra VS Code e acesse a pasta "api" como pasta raíz da aplicação

3 - Abra o terminal e instale todas as dependências do projeto
```
npm install
```
4 - Instale o Yarn com o comando ```npm i -g yarn``` ou através do site https://classic.yarnpkg.com/en/docs/install#windows-stable clicando no botão ```Download Installer```, conforme a imagem abaixo:

<img alt="Imagem instalação da Yarn" src="./api/YarnInstall.png"/>

Se já possui yarn instalado, pule esta etapa.

<br/>

5 - Execute o servidor com o comando ```yarn dev```

Pronto, a aplicação está pronta para ser utilizada!


<h2>:gear:Executando a API</h2>

1 - Abra o servidor digitando o comando ```yarn dev```

2 - Abra Insomnia e configure ambiente clicando em ```No Environment``` -> ```Manage Environments``` colocando o seguinte JSON:

```
{
  "baseURL": "http://localhost:3333"
}
```

Em seguida, clique em ```Done```

3 - Crie as pastas para organizar as requisições da seguinte forma:

<ul>
  <li>NPS para requisição GET responsável pelo cálculo do NPS</li>
  <li>SendMail para requisição POST responsável pelo envio de e-mail/li>
  <li>Surveys para requisições GET e POST para consulta e cadastro de pesquisa, respectivamente</li>
  <li>Users para requisições GET e POST para consulta e cadastro de usuários</li>
</ul>

Segue abaixo a imagem:

<img src="./api/Insomnia.png" alt="Demonstração insomnia"/>

4 - Criar e executar as requisições para cada ação da API:

  <h3>Users</h3>
  1 -  Na pasta Users, criar a rota para a requisição GET com url ```localhost``` , que equivale à rota '', conforme configurado no passo 2 acima, e  clicar em '' para efetuar a requisição GET da API e listar todos os usuários cadastrados no sistema.
  
  <img src="./api/Insomnia2UserGET.png" alt="Demonstração listagem de usuários"/>
  
  
  2 -  Criar a rota para a requisição POST com a mesma url conforme o passo anterior. Porém, POST indica que será cadastrado um novo usuário. Portanto, é preciso preencher os dados necessários para funcionar corretamente, com seguinte JSON:
  ```
    {
      "name": "Preencher o nome aqui",
      "email": "Preencher o e-mail aqui"
    }
  ```
  
  Em seguinda, clique em ```Send```. Segue a imagem abaixo de exemplo
  
  Perceba que toda vez que é cadastrado um novo usuário, é gerado um novo id, do tipo UUID, além de preencher automaticamente a data atual em que foi cadastrado.
  <img src="./api/Insomnia2UserPOST.png" alt="Demonstração cadastro de usuário"/>
  
  <h3>Surveys</h3>
  Para executar a API de pesquisas (surveys), o procedimento é praticamente o mesmo conforme a seção de usuários, porém com a rota diferente. Desta vez, com a rota ```_.baseURL/surveys``` ou ```http://localhost:3333/surveys```
 
  
  <img src="./api/InsomniaSurveyGET.png" alt="Demonstração listagem de pesquisas"/>
  <i><span align="center">Requisição GET de surveys (pesquisas) </span></i>
  
  

---

##  Melhorias a implementar
- [ ] Criar um serviço de login do usuário com autenticação e autorização com JWT (JSON Web Tokens)

---
## Versões do README
<a href="/README-ENUS.md">Inglês</a> | <a href="/README.md">Português</a>
