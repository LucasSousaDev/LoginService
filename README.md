# Sistema de Login

Segue informações e imagens do sistema:

![Image](https://github.com/user-attachments/assets/0ee52e27-4f43-4855-8222-d233bc5cf6dd)
![Image](https://github.com/user-attachments/assets/ae2d8222-f50b-41f4-bdc1-62a4631e60ca)
![Image](https://github.com/user-attachments/assets/5cdc2c3f-ec37-4632-88ac-49599d695782)

Um sistema de login completo com frontend em HTML, CSS e JavaScript puro.

## Funcionalidades

- Registro de usuários
- Login com email e senha
- Dashboard com informações do usuário
- Sistema de logout
- Mensagens de feedback
- Design responsivo

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API RESTful

## Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
```

2. Configure o arquivo `.env` com suas variáveis de ambiente:
```
API_URL=http://localhost:5000/api
```

3. Abra o arquivo `index.html` em seu navegador ou use um servidor local.

## Estrutura do Projeto

```
/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── script.js
├── .gitignore
├── .env
└── README.md
```

## Segurança

- Todas as senhas são enviadas de forma segura
- Autenticação via tokens JWT
- Proteção contra CSRF
- Validação de dados no frontend e backend

