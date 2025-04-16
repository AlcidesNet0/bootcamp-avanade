## Board de Tarefas em Java

[![Java](https://img.shields.io/badge/Java-17-orange.svg?style=flat-square&logo=java)](https://www.oracle.com/java/)
[![Maven](https://img.shields.io/badge/Maven-3.x-blue.svg?style=flat-square&logo=apache-maven)](https://maven.apache.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-blue.svg?style=flat-square&logo=mysql)](https://www.mysql.com/)
[![Liquibase](https://img.shields.io/badge/Liquibase-4.x-blueviolet.svg?style=flat-square&logo=liquibase)](https://www.liquibase.org/)
[![Lombok](https://img.shields.io/badge/Lombok-1.18.x-green.svg?style=flat-square&logo=projectlombok)](https://projectlombok.org/)

Este projeto implementa um board de tarefas em Java, permitindo o gerenciamento de tarefas em diferentes colunas, com funcionalidades como criação, movimentação, bloqueio, desbloqueio e cancelamento de cards. O sistema utiliza um banco de dados MySQL para persistência e Liquibase para gerenciamento de schema.

### Funcionalidades

* **Criação de Boards:** Permite criar novos boards com um nome definido pelo usuário e configurar colunas personalizadas, além das colunas padrão (Inicial, Pendente, Final e Cancelamento).
* **Gerenciamento de Cards:**
    * **Criação:** Adiciona novos cards a coluna inicial do board com título e descrição.
    * **Movimentação:** Move cards para a próxima coluna disponível, seguindo a ordem das colunas do board.
    * **Bloqueio/Desbloqueio:** Permite bloquear um card, impedindo sua movimentação, com um motivo especificado. É possível desbloquear cards posteriormente.
    * **Cancelamento:** Move um card para a coluna de cancelamento.
* **Visualização:**
    * **Board:** Exibe um resumo do board, listando suas colunas e a quantidade de cards em cada uma.
    * **Coluna:** Mostra os detalhes de uma coluna específica e os cards contidos nela, incluindo título e descrição.
    * **Card:** Exibe os detalhes de um card específico, como título, descrição, status de bloqueio (e motivo, se bloqueado), histórico de bloqueios e a coluna atual.
* **Exclusão de Boards:** Permite remover boards existentes.

### Tecnologias Utilizadas

* **Java:** Linguagem de programação principal.
* **Maven:** Ferramenta de build e gerenciamento de dependências.
* **MySQL:** Banco de dados relacional para persistência dos dados.
* **JDBC:** API Java para interação com o banco de dados MySQL.
* **Liquibase:** Ferramenta para gerenciamento de migrações de schema do banco de dados.
* **Lombok:** Biblioteca Java para reduzir a quantidade de código boilerplate através de anotações.

### Pré-requisitos

* **Java Development Kit (JDK):** Versão 17 ou superior instalada.
* **Maven:** Versão 3.x instalada.
* **MySQL:** Servidor MySQL instalado e em execução.
* **Configuração do Banco de Dados:** Um banco de dados chamado `board` deve existir no servidor MySQL, com um usuário `board` e senha `board` configurados com as permissões necessárias para acessar e modificar o banco de dados.

### Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd bootcamp-avanade/desafio-02-board-tarefas
    ```

2.  **Configure o banco de dados:**
    * Certifique-se de que o servidor MySQL esteja em execução.
    * Crie o banco de dados `board` (caso não exista).
    * Crie um usuário `board` com a senha `board` e conceda as permissões necessárias para o banco de dados `board`.

3.  **Execute as migrações do Liquibase:**
    O projeto utiliza Liquibase para gerenciar o schema do banco de dados. As migrações serão executadas automaticamente ao iniciar a aplicação. Certifique-se de que as configurações de conexão no arquivo `br.com.dio.persistence.config.ConnectionConfig` estejam corretas.

4.  **Execute a aplicação:**
    ```bash
    ./gradlew run
    ```
    Ou, se preferir usar o Maven:
    ```bash
    mvn compile exec:java -Dexec.mainClass="br.com.dio.Main"
    ```

5.  **Interaja com o menu:**
    A aplicação iniciará e exibirá um menu no console, permitindo criar boards, selecionar boards existentes e interagir com eles para gerenciar as tarefas.


---

Sinta-se à vontade para contribuir com este projeto!