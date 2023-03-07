![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
# **Desafio Full Cycle Docker**
Este repositório é referente a dois desafios relacionados a Docker. Eles são descritos abaixo.

## **Desafio 1: Docker com Golang**
O objetivo deste desafio é criar uma imagem Docker que, quando executada, imprima a mensagem "Full Cycle Rocks!!". A imagem deve ter menos de 2MB e estar disponível no Docker Hub.

Você pode acessar a imagem clicando no link: [cambrosini/fullcycle](https://hub.docker.com/repository/docker/cambrosini/fullcycle/general)

**Requerimentos**

Para executar a imagem Docker, você precisar ter o Docker instalado em seu computador. Para isso você pode acessar o site oficial do [Docker](https://docs.docker.com/).

**Executando o projeto**

Para rodar a imagem, execute o seguinte comando:
```sh
docker run cambrosini/fullcycle
```

## **Desafio 2: Nginx e Node.js com MySQL**
 Este desafio tem relação com a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada na aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

**Requerimentos**

 Para executar o projeto, você precisar ter o Docker instalado em seu computador. Para isso você pode acessar o site oficial do [Docker](https://docs.docker.com/).

**Executando o projeto**

Clone o repositorio
```sh
git clone https://github.com/CleitonAmbrosini/Full-Cycle-Docker.git
```

 Entre na pasta do projeto e execute o seguinte comando:
 ```sh
docker-compose up -d
```

Para testar a aplicação, abra um navegador da web e acesse a URL http://localhost:8080. Isso deve retornar uma página com a mensagem "Full Cycle Rocks!" e uma lista dos nomes cadastrados no banco de dados.

**Serviços:**

O arquivo docker-compose.yml define três serviços:

- nginx:
  O serviço Nginx é um servidor web que funciona como um proxy reverso para a aplicação Node.js. Ele escuta na porta 8080 e encaminha todas as solicitações para o serviço node.

- app: O serviço Node.js é uma aplicação que adiciona um nome ao banco de dados MySQL e retorna uma lista de nomes cadastrados no banco de dados junto com a mensagem "Full Cycle Rocks!". Ele escuta na porta 3000.

- db: O serviço MySQL é um banco de dados que vai armazenar os nomes. Ele usa a imagem MySQL oficial.

##  Autor

### Cleiton A. Ambrosini
##### _Software Developer_

[![Linkedin Badge](https://img.shields.io/badge/Cleiton%20Ambrosini-blue?style=flat-square&logo=linkedin&labelColor=blue)](mailto:cleiton.ambro@gmail.com)
[![Gmail Badge](https://img.shields.io/badge/-cleiton.ambro@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cleiton.ambro@gmail.com)](https://www.linkedin.com/in/cleitonambrosini/)
