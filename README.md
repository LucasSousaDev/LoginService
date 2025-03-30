# Sistema de Login

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

## Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 