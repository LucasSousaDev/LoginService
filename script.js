const API_URL = 'http://localhost:5000/api';

// Função para mostrar mensagens
function showMessage(message, isError = false) {
    alert(message); // Por enquanto usando alert, você pode melhorar isso depois com uma UI mais bonita
}

// Função para alternar visibilidade da senha
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = '👀'; // Olho aberto
    } 
    else {
        passwordInput.type = 'password';
        toggleButton.textContent = '👁️'; // Olho fechado
    }
}

// Função para registrar um novo usuário
async function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validações
    if (!username || !email || !password || !confirmPassword) {
        showMessage('Por favor, preencha todos os campos', true);
        return;
    }

    if (password !== confirmPassword) {
        showMessage('As senhas não coincidem', true);
        return;
    }

    if (password.length < 6) {
        showMessage('A senha deve ter pelo menos 6 caracteres', true);
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            showMessage('Registro realizado com sucesso! Redirecionando para o login...');
            // Aguarda 2 segundos antes de redirecionar
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            showMessage(data.message || 'Erro ao realizar o registro. Tente novamente.', true);
        }
    } catch (error) {
        console.error('Erro ao registrar:', error);
        showMessage('Erro ao conectar com o servidor. Verifique se a API está rodando.', true);
    }
}

// Função para fazer login
async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            showMessage(data.message);
            // Salvar o token
            localStorage.setItem('token', data.token);
            // Mostrar área logada
            showLoggedInArea(data.user);
        } else {
            showMessage(data.message, true);
        }
    } catch (error) {
        showMessage('Erro ao conectar com o servidor', true);
    }
}

// Função para fazer logout
async function logout() {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (response.ok) {
            showMessage('Logout realizado com sucesso!');
            // Limpar o token e dados do usuário
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // Redirecionar para a página de login
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        } else {
            showMessage(data.message || 'Erro ao fazer logout.', true);
        }
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        showMessage('Erro ao conectar com o servidor', true);
    }
}

// Função para mostrar a área logada
function showLoggedInArea(user) {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loggedInArea').style.display = 'block';
    document.getElementById('userInfo').textContent = `Usuário: ${user.username} (${user.email})`;
}

// Função para esconder a área logada
function hideLoggedInArea() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loggedInArea').style.display = 'none';
}

// Verificar se já está logado ao carregar a página
window.onload = function() {
    const token = localStorage.getItem('token');
    if (token) {
        // Se tiver token, mostrar área logada
        showLoggedInArea({ username: 'Usuário', email: 'email@example.com' });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.container');
    const loginButton = document.querySelector('.login-button');

    loginButton.addEventListener('click', handleLogin);

    // Permite submeter o formulário também pressionando Enter
    loginForm.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    });
});

async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação básica
    if (!email || !password) {
        showMessage('Por favor, preencha todos os campos', true);
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Login bem sucedido
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            showMessage('Login realizado com sucesso!');
            // Redireciona para a página principal
            window.location.href = 'dashboard.html';
        } else {
            // Login falhou
            showMessage(data.message || 'Erro ao fazer login. Verifique suas credenciais.', true);
        }

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        showMessage('Erro ao conectar com o servidor. Tente novamente mais tarde.', true);
    }
} 