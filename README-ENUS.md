<h2>User satisfaction survey API</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VictorMello1993/NLW-4?color=FF0000">
  
  <a href="https://github.com/VictorMello1993/FlappyBird/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VictorMello1993/NLW-4?color=D3D3D3">
  </a> 
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/VictorMello1993/NLW-4/stargazers"></a>
</p>


<p align="center">
  <a href="#earth_americas-overview">Overview</a> •
  <a href="#wrench-features">Features</a> •
  <a href="#triangular_flag_on_postgetting-started">Getting started</a> •  
  <a href="#gearrunning-api">Running API</a> •  
  <a href="#oil_drumdatabase">Database</a> •    
  <a href="#improvements-to-build">Improvements do build</a>
</p>

<h2>:earth_americas: Overview</h2>
<p> API built to enhance the back-end skills with Node.js during the NLW 4 event, promoted by <a href="https://rocketseat.com.br/">Rocketseat</a>. It's about an app which performs research user satisfaction survey by e-mail. 
A survey uses the concept of NPS (Net Promoter Score), the grades range from 0 to 10, and the calculus is made by the following way:</p>
  
<i>NPS = (number of promoters grades - number of detractors grades) / (total answered) * 100</i>
  
  The grades must track the following criteria:
  <ul>
    <li>Detractors grades range from 0 to 6</li>
    <li>Passive grades range from 7 to 8</li>
    <li>Promoter grades range from 9 e 10</li>
 </ul>
 
 Considering the formula, this shows users who give 7 or 8 aren't being part of survey, in order to avoid noises. Thus, the calculus normally considers with detractors or promoter grades, and the result is given as a percentage.
 
 ---
 
 <h2>:wrench: Features</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>TypeScript</li>
  <li>NodeJs</li>
  <li>Express</li>
  <li>Handlebars (Template Engine)</li>
  <li>SQLite</li>  
  <li>Jest (Automated tests)</li>
  <li>Supertest (Integration testing tool)</li>
  <li>Nodemailer (Sending mail lib, used with Ethereal SMTP)</li>
  <li>Insomnia (Tool used to document the requests performed by API). Postman also serves.</li>
  <li>Beekeeper Studio (Database management tool)</li>
</ul>

---

<h2>:triangular_flag_on_post:Getting started</h2>


1 - Clone the repository
```
git clone https://github.com/VictorMello1993/NLW-4.git
```
2 - Open VS Code and access "api" folder as root

3 - Open the terminal and install all of dependencies available to this project

#### NPM
```
npm install
```

#### Yarn
```
yarn
```

<h2>:gear:Running API</h2>
1 - Open the terminal and run the server typing the command suggested below

#### NPM
```
npm run dev
```

#### Yarn
```
yarn dev
```

2 - Click on the button below  to import the suggested workspace. It will be possible to access all of the application routes.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW04&uri=https%3A%2F%2Fgist.githubusercontent.com%2FVictorMello1993%2F5c7c6ef86b2bc670930ffec4b62c782f%2Fraw%2F26e11ce92ae612bd9d614cb7c2a7abf22c822524%2Fnlw04.json)

---

<h2>:oil_drum:Database</h2>
To see all of the tables created by the application, download <a href="https://www.beekeeperstudio.io/">Beekeeper Studio</a>, a database management software. In this project, we use SQLite, so to establish the database connection, just look for the <strong>database.sqlite</strong> file. Make sure the connection has been successfully established and then, click the <strong>Connect</strong> button. It's done, the database is ready to query it.

![Screenshot_1](https://user-images.githubusercontent.com/35710766/123499845-e7fe7a80-d60f-11eb-8993-9d68a9432120.png)

##  Improvements to build
- [ ] Implement an user login service with authentication and authorization with JWT (JSON Web Tokens)

---
## Versions of README
<img src="./api/eua.png" alt="Brazil flag" width="22px"/> <a href="/README-ENUS.md">English</a> | <img src="./api/br.jpg" alt="United States flag" width="22px"/> <a href="/README.md">Portuguese</a>
