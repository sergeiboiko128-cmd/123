
const headers = document.querySelectorAll('.proc1, .mat1, .pamat1, .carta1, .sssd1, .disk1');

headers.forEach(header => {
    header.addEventListener('click', function() {
        let nextElement = this.nextElementSibling;
        
        while (nextElement && nextElement.tagName === 'HR') {
            nextElement = nextElement.nextElementSibling;
        }
        
        if (nextElement && nextElement.classList.contains('sub-items')) {
            nextElement.classList.toggle('hidden');
        }
    });
});


const footerBtns = document.querySelectorAll('.footer-btn');

footerBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const panelId = this.getAttribute('data-panel');
        const panel = document.getElementById(panelId);
        
        if (panel) {
            panel.classList.toggle('open');
        }
    });
});


document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('footer-btn')) {
        const allPanels = document.querySelectorAll('.slide-panel');
        let isClickInsidePanel = false;
        
        allPanels.forEach(panel => {
            if (panel.contains(event.target)) {
                isClickInsidePanel = true;
            }
        });
        
        if (!isClickInsidePanel) {
            allPanels.forEach(panel => {
                panel.classList.remove('open');
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const signinTab = document.getElementById('signinTab');
    const signupTab = document.getElementById('signupTab');
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    const forgotLink = document.getElementById('forgotPassword');

    const redirectUrl = 'indexmein.html';

    function showSignin() {
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
        signinTab.classList.add('active');
        signupTab.classList.remove('active');
    }

    function showSignup() {
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupTab.classList.add('active');
        signinTab.classList.remove('active');
    }

    signinTab.addEventListener('click', function(e) {
        e.preventDefault();
        showSignin();
    });

    signupTab.addEventListener('click', function(e) {
        e.preventDefault();
        showSignup();
    });

    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = signinForm.querySelector('.user').value.trim();
        const password = signinForm.querySelector('.pass').value;
        const agreeCheckbox = signinForm.querySelector('#keepSigned');

        if (!username) {
            alert('Пожалуйста, введите логин');
            return;
        }

        if (!password) {
            alert('Пожалуйста, введите пароль');
            return;
        }

        if (password.length < 6 || password.length > 8) {
            alert('Пароль должен содержать от 6 до 8 символов');
            return;
        }

        if (!agreeCheckbox.checked) {
            alert('Вы должны согласиться с условиями');
            return;
        }

        alert(`Добро пожаловать, ${username}! Перенаправление...`);
        window.location.href = redirectUrl;
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = signupForm.querySelector('.user').value.trim();
        const email = signupForm.querySelector('input[type="email"]').value.trim();
        const password = signupForm.querySelector('.pass').value;
        const agreeCheckbox = signupForm.querySelector('#agreeTerms');

        if (!username) {
            alert('Придумайте логин');
            return;
        }

        if (!email) {
            alert('Введите email');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Введите корректный email (например, name@.com)');
            return;
        }

        if (!password) {
            alert('Введите пароль');
            return;
        }

        if (password.length < 6 || password.length > 8) {
            alert('Пароль должен содержать от 6 до 8 символов');
            return;
        }

        if (!agreeCheckbox.checked) {
            alert('Вы должны согласиться с условиями');
            return;
        }

        alert(`Регистрация прошла успешно! Добро пожаловать, ${username}!`);
        signupForm.reset();
        showSignin();
    });

    forgotLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = prompt('Введите ваш email для восстановления пароля:');
        if (email && email.includes('@')) {
            alert(`Инструкция по восстановлению пароля отправлена на ${email}`);
        } else if (email) {
            alert('Пожалуйста, введите корректный email');
        }
    });

    showSignin();
});