# API REST para Abstração de Interface Bancária (Estilo Nubank)

[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-green.svg)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Maven-3.x-blue.svg)](https://maven.apache.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue.svg)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Descrição do Projeto

Esta API REST desenvolvida com Spring Boot tem como objetivo abstrair a interface de um aplicativo bancário moderno, inspirada em funcionalidades essenciais como as encontradas no Nubank. O projeto fornece uma camada de comunicação padronizada através de requisições HTTP para interagir com informações de usuários, contas e cartões bancários.

## Funcionalidades Atuais

* **Gerenciamento de Usuários:**
    * `GET /users/{id}`: Retorna os detalhes de um usuário específico com base no seu ID.
    * `POST /users`: Permite a criação de um novo usuário, incluindo informações de conta e cartão associados.
* **Validação de Dados:** Implementação de validação para os dados de entrada durante a criação de usuários, garantindo a integridade dos dados.
* **Tratamento de Erros:** Tratamento robusto de erros, incluindo:
    * Retorno de código de status `404 Not Found` quando um recurso (usuário) não é encontrado.
    * Retorno de código de status `409 Conflict` ao tentar criar um usuário com um ID já existente.
    * Tratamento de erros internos do servidor com código de status `500 Internal Server Error`.

## Tecnologias Utilizadas

* **Java:** Linguagem de programação principal.
* **Spring Boot:** Framework para desenvolvimento rápido de aplicações Java com configuração mínima.
* **Spring Web:** Módulo do Spring para construção de aplicações web e APIs RESTful.
* **Spring Data JPA:** Simplifica o acesso e a persistência de dados em bancos de dados relacionais utilizando o JPA (Java Persistence API).
* **Hibernate:** Implementação do JPA utilizada pelo Spring Data JPA.
* **PostgreSQL:** Banco de dados relacional utilizado para persistir os dados da aplicação.
* **Maven:** Ferramenta de gerenciamento de dependências e construção do projeto.
* **Jakarta Bean Validation:** API para validação de beans.

## Pré-requisitos

* **Java Development Kit (JDK):** Versão 17 ou superior instalada.
* **Maven:** Versão 3.x instalada.
* **PostgreSQL:** Uma instância do PostgreSQL em execução (local ou remota).

## Configuração do Projeto

1.  **Clonar o Repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd bootcamp-avanade/desafio-01-api-rest-spring-boot
    ```

2.  **Configurar o Banco de Dados:**
    * Crie um banco de dados PostgreSQL para a aplicação.
    * Configure as credenciais de acesso ao banco de dados no arquivo `src/main/resources/application-prd.yml`. É recomendado utilizar variáveis de ambiente para informações sensíveis em ambientes de produção.
        ```yaml
        spring:
          datasource:
            url: ${DATABASE_URL:jdbc:postgresql://localhost:5432/seu_banco_de_dados}
            username: ${DATABASE_USERNAME:seu_usuario}
            password: ${DATABASE_PASSWORD:sua_senha}
            driver-class-name: org.postgresql.Driver
          jpa:
            database: postgresql
            properties:
              hibernate:
                dialect: org.hibernate.dialect.PostgreSQLDialect
            hibernate:
              ddl-auto: create # ATENÇÃO: Em produção, considere usar 'update', 'validate' ou uma ferramenta de migração
        ```

## Execução da Aplicação

1.  **Compilar e Executar com Maven:**
    ```bash
    mvn spring-boot:run -Dspring-boot.run.profiles=prd
    ```
    O perfil `prd` será ativado para utilizar as configurações de produção definidas em `application-prd.yml`.

2.  **Acessar a API:**
    A API estará disponível por padrão na porta `8080`. Você pode interagir com os endpoints utilizando ferramentas como `curl`, Postman ou Insomnia.

    * **Buscar Usuário:** `GET http://localhost:8080/users/{id}`
    * **Criar Usuário (Exemplo de Body em JSON):**
        ```json
        {
          "name": "João da Silva",
          "account": {
            "balance": 1000.50
          },
          "card": {
            "bill": 50.20,
            "limit": 500.00
          }
        }
        ```

## Melhorias Implementadas (Detalhado)

* **Tratamento de `NoSuchElementException`:** O `UserController` agora utiliza `Optional` e retorna `ResponseEntity.notFound().build()` para requisições de usuários com IDs inexistentes, resultando em um código de status HTTP `404`.
* **Validação com `@Valid`:** O método `create` no `UserController` utiliza a anotação `@Valid` para acionar a validação das propriedades da entidade `User` definidas com as anotações do Jakarta Bean Validation (`@NotBlank`, `@NotNull`).
* **`GlobalExceptionHandler`:** A classe foi implementada para centralizar o tratamento de exceções:
    * `NoSuchElementException`: Retorna `404 Not Found`.
    * `IllegalArgumentException`: Retorna `400 Bad Request` (ou `409 Conflict` para tentativa de criar usuário com ID existente).
    * `Throwable`: Retorna `500 Internal Server Error` para exceções não tratadas, com logging do erro.


## Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).

---

**Sinta-se à vontade para contribuir com este projeto!**
