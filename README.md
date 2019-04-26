# Explicando Rest APIs

Este projeto contem três projetos distintos usados para explicar o que são REST APIs. O vídeo, disponível pode ser encontrado no link: https://youtu.be/PTBWzMr-v0I

Lembre-se de alterar os caminhos do arquivo, para que você possa executar os exemplos.

# API C#

## Instalação

Abra o arquivo netcore-api/Controllers/ValuesController.cs e altere a linha 13:

```string fileName = "/home/fcrozetta/projetos/beta/nomes.txt";```

Para o caminho do arquivo de seu projeto.

Para instalar e executar o projeto da api em C#, você vai precisar instalar o pacote dotnet. Você pode seguir as instruções para seu sistema operacional no site: https://dotnet.microsoft.com/download

Depois de instalado, acesse o diretório do projeto usando um prompt de comando, ou terminal, e execute o comando ```dotnet run```. Este comando irá baixar os pacotes necessários e executar o projeto.

Uma janela do seu navegador deve se abrir, com uma página dizendo que o site não existe. Tudo bem, nós não criamos uma página inicial para esta api.


Com o programa rodando, você pode fazer as chamadas, conforme o vídeo.

## Alterando a API

Para você poder alterar e treinar o uso da api, edite o arquivo ValuesController.cs, ou duplique o arquivo e renomeie para o nome do seu controller. Altere também dentro do arquivo, e teste se tudo está funcionando.Depois disso você pode alterar o fonte sabendo que tudo está funcionando.

# API Nest

## Instalação

Edite o arquivo nest-api/src/values/values.controller.ts, alterando a linha 7:

```nameFile = "/home/fcrozetta/projetos/beta/nomes.txt"```

para o caminho do seu projeto.

Para executar o projeto, você precisará do NodeJs e NPM instalado. Você pode segiuir as instruções de instalação para seu sistema operacional pelo site oficial: https://nodejs.org/

Depois de Instalado o node, abra um prompt de comando, ou terminal, e acesse o diretório do projeto (net-api). execute o comando ```npm install``` para instalar os pacotes necessários, e depois execute o comando ```npm run start:dev``` para inicializar o servidor. Depois disso você já pode fazer as chamadas para este servidor.

## Alterando a API

Você pode editar o arquivo values.controller.ts, ou criar um novo endpoint, usando o comando ```nest g controller meuController```.

Para compreender melhor como usar a api, é recomendada a leitura da documentação do Nest: https://docs.nestjs.com


# Aplicação Html + js

## Instalação
Abra o index.html no seu navegador.

## Alterando o programa
Você pode editar a aplicação para testar as chamadas de API da forma que desejar