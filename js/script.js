// Registro de usuario
document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const userObject = { username, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(userObject));

    document.getElementById('register').reset();
    document.getElementById('content-register').style.display = "none";
    alert("Se registró correctamente");
});

// Inicio de sesión
document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUserJSON = localStorage.getItem('registeredUser');

    if (!storedUserJSON) {
        alert("No hay usuario registrado con ese correo electrónico.");
        return;
    }

    const storedUser = JSON.parse(storedUserJSON);

    if (loginEmail === storedUser.email && loginPassword === storedUser.password) {
        document.getElementById('userName').textContent = storedUser.username;
        document.getElementById('content-login').style.display = "none";
        alert("Se inició sesión correctamente");
        document.getElementById('register-button').style.display = 'none';
        document.getElementById('login-button').style.display = 'none';
    } else {
        alert("Correo electrónico o contraseña inválidos.");
    }

    document.getElementById('login').reset();
    
});

// Mostrar formulario de registro e inicio de sesión
const registerButton = document.getElementById('register-button');
const loginButton = document.getElementById('login-button');
const xmarkLog = document.getElementById('x-log');
const xmarkReg = document.getElementById('x-reg');

registerButton.addEventListener('click', function () {
    document.getElementById('content-register').style.display = "block";
});

loginButton.addEventListener('click', function () {
    document.getElementById('content-login').style.display = "block";
});

xmarkLog.addEventListener('click', function () {
    document.getElementById('content-login').style.display = "none";
});

xmarkReg.addEventListener('click', function () {
    document.getElementById('content-register').style.display = "none";
});

// Menú de usuario
const userIcon = document.getElementById('userIcon');
const options = document.getElementById('options');
const signOut = document.getElementById('singOut');
const linkReg = document.getElementById('link-reg');
const regButton = document.getElementById('register-button');
const logButton = document.getElementById('login-button');

userIcon.addEventListener('click', function () {
    options.classList.toggle('active');
});

signOut.addEventListener('click', function () {
    options.classList.toggle('active');
    document.getElementById('register-button').style.display = 'block';
    document.getElementById('login-button').style.display = 'block';
    document.getElementById('userName').textContent = '';
});

linkReg.addEventListener('click', function () {
    document.getElementById('content-login').style.display = "none";
    document.getElementById('content-register').style.display = "block";
});

regButton.addEventListener('click', function () {
    document.getElementById('content-login').style.display = "none";
});

logButton.addEventListener('click', function () {
    document.getElementById('content-register').style.display = "none";
});
