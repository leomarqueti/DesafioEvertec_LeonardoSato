# Desafio Técnico - Gestão de Pontos Turísticos

Aplicação Full Stack desenvolvida como parte do processo seletivo para a vaga de Desenvolvedor de Software. O sistema oferece uma solução completa para gerenciamento de pontos turísticos.

<img width="1754" height="815" alt="image" src="https://github.com/user-attachments/assets/f0c4f315-729c-4cec-8ed0-edfdfec19e79" />
---

## Tecnologias e Arquitetura

O projeto foi construído seguindo padrões de mercado, com separação clara entre API e Interface.

* **Backend:** .NET 9 (C#), Entity Framework Core.
* **Banco de Dados:** SQL Server.
* **Frontend:** React (Vite), JavaScript.

---

## ⚙️ Pré-requisitos de Ambiente

Para evitar erros de execução, certifique-se de que seu ambiente atende aos requisitos abaixo:

* **.NET SDK:** Versão **9.0** ou superior. (Obrigatório)
* **Node.js:** Versão **18.0** ou superior.
* **SQL Server:** LocalDB ou SQL Express.

---

## 🛠️ Guia de Execução

Começe com:
```bash
git clone https://github.com/leomarqueti/DesafioEvertec_LeonardoSato.git
cd DesafioEvertec_LeonardoSato
```

### 1. Backend (API)

1.  Acesse o diretório do projeto (onde está o arquivo `.csproj`):
    *(Nota: Devido à estrutura da solução, é necessário acessar a subpasta interna)*
    ```bash
    cd backend/PontosTuristicos/PontosTuristicos
    ```
2.  Restaure as dependências e gere o banco de dados:
    ```bash
    dotnet restore
    dotnet tool install --global dotnet-ef
    dotnet ef database update
    ```
   "Nota: A connection string padrão aponta para o (localdb)\mssqllocaldb. Se você utiliza o SQL Express ou outra instância, altere o arquivo appsettings.json."
    
3.  Inicie a aplicação forçando a porta HTTPS correta (7218):
    ```bash
    dotnet run --urls="https://localhost:7218"
    ```
    ✅ **Confirme se o terminal exibe:** `Now listening on: https://localhost:7218`

### 2. Frontend (Interface)

1.  Abra um **novo terminal** e acesse a pasta do frontend:
    ```bash
    cd frontend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o projeto:
    ```bash
    npm run dev
    ```
4.  O navegador abrirá automaticamente no endereço local (ex: `http://localhost:5173`).


---


## ❓ Resolução de Problemas Comuns 

Caso encontre dificuldades ao rodar o projeto em um ambiente limpo, verifique os pontos abaixo:

### 1. Erro de Certificado SSL ("Sua conexão não é particular")
Como o ambiente de desenvolvimento utiliza um certificado auto-assinado, o navegador pode bloquear o acesso à API (`https://localhost:7218`).
* **Solução Rápida:** No navegador, clique em **"Avançado"** > **"Ir para localhost (não seguro)"**.
* **Solução Definitiva:** Execute o comando abaixo no terminal para confiar no certificado de desenvolvimento .NET:
    ```bash
    dotnet dev-certs https --trust
    ```

### 2. Erro de Conexão com Banco de Dados (Error 26, 50 ou 52)
O projeto está configurado para usar o **SQL Server LocalDB** (`(localdb)\mssqllocaldb`), que é padrão no Visual Studio.
* **Se você não tem o LocalDB:** Instale o [SQL Server LocalDB].
* **Se você usa SQL Express ou Docker:** Altere a ConnectionString no arquivo `backend/PontosTuristicos/PontosTuristicos/appsettings.json`:
    ```json
    "DefaultConnection": "Server=.\\SQLEXPRESS;Database=DesafioEvertecDB;Trusted_Connection=True;TrustServerCertificate=True;"
    ```

### 3. Erro ao rodar Migrations ("dotnet-ef not found")
Se o comando `dotnet ef` não for reconhecido:
1.  Certifique-se de ter rodado: `dotnet tool install --global dotnet-ef`
2.  **Importante:** Feche e reabra o terminal para carregar as novas variáveis de ambiente.

--- 

## ✅ Checklist de Entregas (Conforme PDF)

### Funcionalidades Core
- [x] API RESTful (.NET 9).
- [x] Banco de Dados SQL Server com Entity Framework.
- [x] CRUD Completo (Criar, Ler, Detalhar).
- [x] Listagem com campos específicos (Nome/Localização).
- [x] Filtro de Busca (Nome, Descrição, Localização).
- [x] Paginação (Controle Anterior/Próximo).
- [x] Validação (Descrição máx. 100 caracteres).
- [x] Dropdown de Estados (UF).
---

**Desenvolvedor:** Leonardo Sato


