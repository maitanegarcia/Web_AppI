<<<<<<< HEAD


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('formulario_registro');
    const showLoginFormButton = document.getElementById('show-login');
    const showRegisterFormButton = document.getElementById('show-register');

    showLoginFormButton.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    showRegisterFormButton.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';

    });
    // Add event listener to the login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle login form submission
        const usuario = loginForm.querySelector('input[type="text"]').value;
        const contrasena = loginForm.querySelector('input[type="password"]').value;
        // Log the values to the console
        console.log('Usuario:', usuario);
        console.log('Contraseña:', contrasena);
        // Your login logic here
        // For example, you can send the data to the server for authentication
        window.location.href = '../views/Pagina_Principal.html';

    });


    // Add event listener to the registration form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Log a message when the event listener is entered
        console.log('Registration form submission event listener entered.');
        // Handle registration form submission
        const nombre = registerForm.querySelector('#register_nombre').value;
        const primer_Apellido = registerForm.querySelector('#primer_apellido').value;
        const segundo_Apellido = registerForm.querySelector('#segundo_apellido').value;
        const correo_Electronico = registerForm.querySelector('#correo_electronico').value;
        const usuario = registerForm.querySelector('#usuario').value;
        const contrasena = registerForm.querySelector('#contrasena').value;

        // Insert user data into database
        const sql = `INSERT INTO usuarios (nombre, primer_apellido, segundo_apellido, correo_electronico, usuario, contrasena) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
        db.run(sql, [nombre, primer_Apellido, segundo_Apellido, correo_Electronico, usuario, contrasena], function (err) {
            if (err) {
                // Log an error message if there's an error
                console.error(err.message);
            } else {
                console.log('Nombre:', nombre);
                console.log('Usuario:', usuario);
                console.log('Contraseña:', contrasena);
                // Log a success message when the row is inserted
                console.log('Registration successful.');
                console.log(`A row has been inserted with rowid ${this.lastID}`);
                // Optionally, you can redirect user or show a success message here
            }
        });
        // Log a message when the event listener is not triggered (e.g., if there's an issue with selecting the form element)
    console.log('Registration form submission event listener not triggered.');
    });

    

});
=======


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('formulario_registro');
    const showLoginFormButton = document.getElementById('show-login');
    const showRegisterFormButton = document.getElementById('show-register');

    showLoginFormButton.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    showRegisterFormButton.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';

    });
    // Add event listener to the login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle login form submission
        const usuario = loginForm.querySelector('input[type="text"]').value;
        const contrasena = loginForm.querySelector('input[type="password"]').value;
        // Log the values to the console
        console.log('Usuario:', usuario);
        console.log('Contraseña:', contrasena);
        // Your login logic here
        // For example, you can send the data to the server for authentication
        window.location.href = '../views/Pagina_Principal.html';

    });


    // Add event listener to the registration form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Log a message when the event listener is entered
        console.log('Registration form submission event listener entered.');
        // Handle registration form submission
        const nombre = registerForm.querySelector('#register_nombre').value;
        const primer_Apellido = registerForm.querySelector('#primer_apellido').value;
        const segundo_Apellido = registerForm.querySelector('#segundo_apellido').value;
        const correo_Electronico = registerForm.querySelector('#correo_electronico').value;
        const usuario = registerForm.querySelector('#usuario').value;
        const contrasena = registerForm.querySelector('#contrasena').value;

        // Insert user data into database
        const sql = `INSERT INTO usuarios (nombre, primer_apellido, segundo_apellido, correo_electronico, usuario, contrasena) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
        db.run(sql, [nombre, primer_Apellido, segundo_Apellido, correo_Electronico, usuario, contrasena], function (err) {
            if (err) {
                // Log an error message if there's an error
                console.error(err.message);
            } else {
                console.log('Nombre:', nombre);
                console.log('Usuario:', usuario);
                console.log('Contraseña:', contrasena);
                // Log a success message when the row is inserted
                console.log('Registration successful.');
                console.log(`A row has been inserted with rowid ${this.lastID}`);
                // Optionally, you can redirect user or show a success message here
            }
        });
        // Log a message when the event listener is not triggered (e.g., if there's an issue with selecting the form element)
    console.log('Registration form submission event listener not triggered.');
    });

    

});
>>>>>>> 09a89df851a0aa9aaea4ac96a8a97e744e91a87e
