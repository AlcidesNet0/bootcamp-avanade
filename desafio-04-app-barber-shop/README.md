# BarberShop System - Sistema de Agendamentos para Barbearias

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=for-the-badge&logo=mysql&logoColor=white)

## Descrição do Projeto

Este projeto consiste no desenvolvimento de um aplicativo full stack completo para facilitar o agendamento de serviços em barbearias. A aplicação oferece as seguintes funcionalidades principais:

* **Cadastro de Clientes:** Permite que novos clientes se registrem no sistema, fornecendo informações como nome, contato, etc.
* **Agendamento de Horários:** Os clientes podem visualizar a disponibilidade de horários e agendar seus serviços de forma intuitiva.
* **Gerenciamento de Serviços:** O sistema permite o cadastro e gerenciamento dos serviços oferecidos pela barbearia, incluindo nome, descrição e preço.

O backend da aplicação foi desenvolvido utilizando a linguagem de programação **Java**, proporcionando robustez e escalabilidade. A interface do usuário (frontend) foi construída com o framework **Angular**, oferecendo uma experiência dinâmica e responsiva, utilizando **Angular Material** para a interface. O banco de dados utilizado é o **MySQL**.

## Tecnologias Utilizadas

### Backend (Java)

* **Linguagem:** Java (versão 17)
* **Framework:** Spring Boot
* **Banco de Dados:** MySQL (versão 8.0)
* **Outras Bibliotecas/Ferramentas:** JPA, Gradle

### Frontend (Angular)

* **Framework:** Angular (versão 17)
* **Linguagem:** TypeScript
* **Componentes UI:** **Angular Material**
* **Outras Bibliotecas/Ferramentas:** RxJS, Angular CLI

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

### Backend

* **Java Development Kit (JDK):** Versão 17 ou superior.
* **Gerenciador de Build:** Maven ou Gradle (dependendo da configuração do projeto).
* **MySQL:** Versão 8.0 instalada e configurada.

### Frontend

* **Node.js:** Versão [especificar versão mínima recomendada].
    * [Link para download do Node.js](https://nodejs.org/)
* **npm** (geralmente instalado com o Node.js) ou **yarn**.
    * [Link para download do yarn (se preferir)](https://yarnpkg.com/)
* **Angular CLI:** Versão [especificar versão mínima recomendada].
    ```bash
    npm install -g @angular/cli
    ```

## Como Executar o Projeto

Siga as instruções abaixo para executar o backend e o frontend separadamente.

### Backend

1.  **Navegue até o diretório do backend:**
    ```bash
    cd backend
    ```
2.  **Execute a aplicação:**
    * **Com Maven:**
        ```bash
        ./mvnw spring-boot:run
        ```
    * **Com Gradle:**
        ```bash
        ./gradlew bootRun
        ```
3.  **A aplicação backend estará rodando em:** `http://localhost:[porta padrão da aplicação Java]` (verifique os logs para a porta exata).

### Frontend

1.  **Navegue até o diretório do frontend:**
    ```bash
    cd frontend
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Execute a aplicação frontend:**
    ```bash
    ng serve -o
    # ou
    yarn start
    ```
4.  **A aplicação frontend estará acessível em:** `http://localhost:4200` (ou outra porta especificada pelo Angular CLI).

## Configuração

### Backend

* **Arquivo de Configuração:** [Indicar o arquivo de configuração do backend, ex: `application.properties`, `application.yml`]
* **Configurações Importantes:**
    * **Banco de Dados:** Configure as informações de conexão com o MySQL (URL, usuário, senha, nome do banco de dados).
    * **Porta do Servidor:** Se necessário, configure a porta em que o servidor backend será executado.


### Frontend

* **Variáveis de Ambiente:** Algumas configurações podem ser definidas em arquivos de ambiente (`.env`, `environment.ts`).
* **API Backend:** Configure a URL base da API backend para que o frontend possa se comunicar corretamente. Geralmente isso é feito no arquivo `environment.ts` e utilizado nos serviços Angular (como `ClientsService`).

## Componentes Principais (Frontend)

* **`schedules-month/schedules-month.component.ts`:** Componente responsável pela tela de agendamentos, exibindo um calendário e uma tabela de agendamentos. Permite a criação e exclusão de agendamentos. Utiliza o `mat-calendar` e `mat-table` do Angular Material.
* **`clients/edit-client/edit-client.component.ts`:** Componente para editar informações de um cliente existente.
* **`clients/new-client/new-client.component.ts`:** Componente para cadastrar novos clientes no sistema.
* **`clients/list-clients/list-clients.component.ts`:** Componente que lista os clientes cadastrados.

## Serviços Principais (Frontend)

* **`clients.service.ts`:** Serviço Angular responsável por comunicar-se com a API backend para operações relacionadas a clientes (salvar, atualizar, deletar, listar, buscar por ID). Utiliza o `HttpClient` do Angular.

## Rotas (Frontend)

As rotas da aplicação Angular estão definidas em `app-routing.module.ts` (ou `app.routes.ts`) e incluem:

* `/clients/edit-client/:id`: Rota para a página de edição de um cliente específico.
* `/clients/new-client`: Rota para a página de cadastro de um novo cliente.
* `/clients/list`: Rota para a página que lista todos os clientes.
* `/schedules/month`: Rota para a página principal de agendamentos.
* `**`: Redireciona para a página de agendamentos (`/schedules/month`) para qualquer rota não correspondente.

## Estrutura do Backend (Java)

A estrutura do backend em Java inclui os seguintes pacotes principais:

* **`controller/`:** Responsável por receber e responder às requisições HTTP.
* **`exception/`:** Contém classes para tratamento de erros personalizados.
* **`repository/`:** Interfaces para interação com o banco de dados MySQL, utilizando Spring Data JPA.

Outros pacotes podem existir para a lógica de negócios (services), modelos de dados (entities), utilitários, etc.



## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, por favor, siga os seguintes passos:

1.  Faça um fork do repositório.
2.  Crie uma branch para sua feature (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4.  Faça o push para a branch (`git push origin feature/sua-feature`).
5.  Abra um Pull Request.

---