# Welcome to my backend app

<details>
  <summary>Summary 📝</summary>
  <ol>
    <li><a href="#Objective">Objective</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#DB-Scheme">DB Scheme</a></li>
    <li><a href="#local-installation">Installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
  </ol>
</details>

## objective
Este proyecto requería una API funcional conectada a una base de datos con al menos una relación de uno a muchos y una relación de muchos a muchos.

## About
Decidí crear una aplicación web para ayudar a los amantes del gimnasio, que les permitiría crear y realizar un seguimiento de nuevas rutinas para sus ejercicios diarios. He visto muchas apps de este estilo pero ninguna que nos permita cambiar tan libremente las rutinas adaptandolas a nuestras necesidades.    


## Stack
Tecnologías utilizadas:
<div align="center">
<a href="https://www.mongodb.com/">
    <img src= "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>


## DB Scheme
![DB-Scheme](https://i.gyazo.com/23a7d15f2b357f69496a483f997c4432.png)

## Local installation
1. Clone the repository
2. ` $ npm i `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ Ejecutamos los seeders ``` 
6. ``` $ npm run dev ``` 
7. ...

## Endpoints

<details>
<summary>Auth</summary>
- AUTH
    - REGISTER
        - BY DEFAULT IS USER.       
            POST http://localhost:4000/api/auth/register
        body:
        ``` js
            {
                "firstName":"Pepe",
                "email":"pepe@pepe.com",
                "password":"123456789"
            }
        ```

    - LOGIN 
        - IT WILL RETURN A TOKEN.
            POST http://localhost:4000/api/auth/login
        body:
        ``` js
            {
                "email":"pepe@pepe.com",
                "password":"123456789"
            }
        ```
</details>
<details>
<summary>Users</summary>
- USERS
    - GET ALL USERS (SUPER_ADMIN)
        - ONLY SUPER_ADMIN IS ALLOWED TO DO THIS ENDPOINT       
            GET http://localhost:4000/api/users
        Auth:
        ``` bearer
            {
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJob2xhQGhvbGEuYWRpb3MiLCJpYXQiOjE3MjA1OTYyNzMsImV4cCI6MTcyMDYwMzQ3M30.QnL_HgGPVLOb0d4iUUuFCeSab1lp3SpOVV_js0T4ExY
            }
        ```
        This token is just an example, it doesn't work.

</details>
