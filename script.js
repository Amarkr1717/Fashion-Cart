const loginButton = document.getElementById('loginButton');
        const loginForm = document.getElementById('loginForm');
        const closeButton = document.getElementById('closeButton');
        const overlay = document.getElementById('overlay');

        // Function to show the login form
        loginButton.addEventListener('click', () => {
            loginForm.style.display = 'block';
            overlay.style.display = 'block';
        });

        // Function to hide the login form
        closeButton.addEventListener('click', () => {
            loginForm.style.display = 'none';
            overlay.style.display = 'none';
        });

        // Hide the login form when clicking outside of it
        overlay.addEventListener('click', () => {
            loginForm.style.display = 'none';
            overlay.style.display = 'none';
        });