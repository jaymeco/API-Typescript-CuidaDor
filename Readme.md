# API para o projeto CuidaDor

## Principais tecnologias utilizadas
- [NodeJs](https://nodejs.org/en/) 14.17.6
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) 4.2.3
- [TypeOrm](https://typeorm.io/#/) 0.2.31
- [Express](https://expressjs.com) 4.17.1

## Instalação
**Instalar os pacotes**
```
yarn install
```
## Documentação
>A documentação foi feita utilizado o apidoc, para a inicialização da documentação siga os passos abaixo:

>***Disclamer: É necessário instalar o pacote apidoc globalmente na sua máquina (não instalar no projeto):***

**Instalação do pacote**
```
yarn global add apidoc || npm install --global apidoc
```

**Geração da documentação**
```
yarn doc || npm run doc || npx apidoc -i src/docs/ -o docs/ -f .doc.ts
```

## Variáveis ambiente
>Atualmete no projeto as únicas variáveis ambiente são referente ao typeOrm

**Variáveis ambiente do ``ormconfig.env``:

| Variável                |  Descrição do seu valor                                    |
| ----------------------- | ---------------------------------------------------------- |
|  TYPEORM_CONNECTION     |  Nome do banco a ser conectado                             |
|  TYPEORM_URL            |  URL do banco em nuvem                                     |
|  TYPEORM_MIGRATIONS     |  Path das migrations que serão executadas                  |
|  TYPEORM_MIGRATIONS_DIR |  Path onde estão as migrations da aplicação                |
|  TYPEORM_SYNCHRONIZE    |  Flag de sicronização do typeOrm                           |
|  TYPEORM_LOGGING        |  Flag para a geração de logs durante a execução do projeto |
|  TYPEORM_ENTITIES       |  Path das entidades da aplicação                           |
