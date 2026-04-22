
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



document.addEventListener('DOMContentLoaded', function() {
    
    const footerButtons = document.querySelectorAll('.footer-btn');
    
    console.log('Найдено кнопок футера:', footerButtons.length); 
    
    footerButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            event.preventDefault(); 
            
            const panelId = this.getAttribute('data-panel');
            const panel = document.getElementById(panelId);
            
            console.log('Клик по кнопке:', panelId, 'Панель найдена:', !!panel); 
            
            if (panel) {
                panel.classList.toggle('open');
                
             
                footerButtons.forEach(otherBtn => {
                    const otherPanelId = otherBtn.getAttribute('data-panel');
                    const otherPanel = document.getElementById(otherPanelId);
                    if (otherPanel && otherPanel !== panel && otherPanel.classList.contains('open')) {
                        otherPanel.classList.remove('open');
                    }
                });
            } else {
                console.log('Панель не найдена для ID:', panelId);
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        const isFooterBtn = event.target.classList && event.target.classList.contains('footer-btn');
        
        const isInsidePanel = event.target.closest('.slide-panel');
        
        if (!isFooterBtn && !isInsidePanel) {
            const allPanels = document.querySelectorAll('.slide-panel');
            allPanels.forEach(function(panel) {
                panel.classList.remove('open');
            });
        }
    });
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
            alert('Введите корректный email (например, name@domain.ru)');
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

const productsData = {
    i7_1: {
        category: "Процессоры",
        name: "Intel Core i7-13700K",
        description: "16 ядер / 24 потока, до 5.4 ГГц, 30MB кэш, идеален для игр и стриминга",
        price: "37 990 ₽",
        discount: "-15%",
        img: "картинки_каталог/intel-core-i7-13700k.png"
    },
    i7_2: {
        category: "Процессоры",
        name: "Intel Core i7-12700KF",
        description: "12 ядер / 20 потоков, до 5.0 ГГц, без встроенной графики",
        price: "29 990 ₽",
        discount: "-10%",
        img: "картинки_каталог/intel-core-i7-12700k.png"
    },
    i7_3: {
        category: "Процессоры",
        name: "Intel Core i7-14700K",
        description: "20 ядер / 28 потоков, до 5.6 ГГц, новейшая архитектура",
        price: "45 990 ₽",
        discount: "-5%",
        img: "картинки_каталог/intel-Core-i7-14700K.jpg"
    },
    i7_4: {
        category: "Процессоры",
        name: "Intel Core i7-11700K",
        description: "8 ядер / 16 потоков, до 5.0 ГГц, отличный выбор для сборки",
        price: "34 990 ₽",
        discount: "-20%",
        img: "картинки_каталог/Intel Core i7-11700K.jpg"
    },
        i9_1: {
        category: "Процессоры",
        name: "Intel Core i9-13900K",
        description: "24 ядра / 32 потока, до 5.8 ГГц, топовый для игр и работы",
        price: "59 990 ₽",
        discount: "-8%",
        img: "картинки_каталог/Core-i9-13900K.jpg"
    },
    i9_2: {
        category: "Процессоры",
        name: "Intel Core i9-14900K",
        description: "24 ядра / 32 потока, до 6.0 ГГц, максимальная производительность",
        price: "69 990 ₽",
        discount: "-5%",
        img: "картинки_каталог/Intel Core i9-14900K.jpg"
    },
    i9_3: {
        category: "Процессоры",
        name: "Intel Core i9-12900K",
        description: "16 ядер / 24 потока, до 5.2 ГГц, отличный баланс цены",
        price: "44 990 ₽",
        discount: "-12%",
        img: "картинки_каталог/Core-i9-12900K.jpg"
    },
    i9_4: {
        category: "Процессоры",
        name: "Intel Core i9-11900K",
        description: "8 ядер / 16 потоков, до 5.3 ГГц, для энтузиастов",
        price: "32 990 ₽",
        discount: "-18%",
        img: "картинки_каталог/Intel Core i9-11900K.jpg"
    },
        r5_1: {
        category: "Процессоры",
        name: "AMD Ryzen 5 7600X",
        description: "6 ядер / 12 потоков, AM5, до 5.3 ГГц, отличный для игр",
        price: "22 990 ₽",
        discount: "-10%",
        img: "картинки_каталог/AMD Ryzen 5 7600X.png"
    },
    r5_2: {
        category: "Процессоры",
        name: "AMD Ryzen 5 5600X",
        description: "6 ядер / 12 потоков, AM4, до 4.6 ГГц, лучший выбор",
        price: "15 990 ₽",
        discount: "-15%",
        img: "картинки_каталог/AMD Ryzen 5 5600X.jpg"
    },
    r5_3: {
        category: "Процессоры",
        name: "AMD Ryzen 5 7500F",
        description: "6 ядер / 12 потоков, AM5, без встроенной графики",
        price: "18 990 ₽",
        discount: "-8%",
        img: "картинки_каталог/AMD Ryzen 5 7500F.jpg"
    },
    r5_4: {
        category: "Процессоры",
        name: "AMD Ryzen 5 8600G",
        description: "6 ядер / 12 потоков, со встроенной графикой RDNA 3",
        price: "21 990 ₽",
        discount: "-5%",
        img: "картинки_каталог/AMD Ryzen 5 8600G.jpg"
    },
        r7_1: {
        category: "Процессоры",
        name: "AMD Ryzen 7 7800X3D",
        description: "8 ядер / 16 потоков, 3D V-Cache, лучший для игр",
        price: "42 990 ₽",
        discount: "-7%",
        img: "картинки_каталог/AMD Ryzen 7 7800X3D.jpg"
    },
    r7_2: {
        category: "Процессоры",
        name: "AMD Ryzen 7 7700X",
        description: "8 ядер / 16 потоков, AM5, до 5.4 ГГц",
        price: "32 990 ₽",
        discount: "-10%",
        img: "картинки_каталог/AMD Ryzen 7 7700X.jpg"
    },
    r7_3: {
        category: "Процессоры",
        name: "AMD Ryzen 7 5800X3D",
        description: "8 ядер / 16 потоков, 3D V-Cache, AM4",
        price: "35 990 ₽",
        discount: "-12%",
        img: "картинки_каталог/AMD Ryzen 7 5800X3D.jpg"
    },
    r7_4: {
        category: "Процессоры",
        name: "AMD Ryzen 7 5700X",
        description: "8 ядер / 16 потоков, до 4.6 ГГц, отличная цена",
        price: "19 990 ₽",
        discount: "-20%",
        img: "картинки_каталог/AMD Ryzen 7 5700X.jpg" 
    },
        am5_1: { 
        category: "Материнские платы", 
        name: "ASUS ROG STRIX B650E-F", 
        description: "AM5, PCIe 5.0, WiFi 6E, 14+2 фазы питания", 
        price: "24 990 ₽", 
        discount: "-5%", 
        img: "картинки_каталог/ASUS ROG STRIX B650E-F.webp" 
    },
    am5_2: { 
        category: "Материнские платы", 
        name: "MSI MAG B650 TOMAHAWK", 
        description: "AM5, DDR5, 2.5G LAN, отличный выбор", 
        price: "19 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/MSI MAG B650 TOMAHAWK.png"     
    },
    am5_3: { 
        category: "Материнские платы", 
        name: "Gigabyte B650 AORUS", 
        description: "AM5, 16+2+2 фазы, PCIe 5.0 M.2", 
        price: "21 990 ₽", 
        discount: "-10%", 
        img: "картинки_каталог/Gigabyte B650 AORUS.png" 
    },
    am5_4: { 
        category: "Материнские платы", 
        name: "ASRock B650 PRO RS", 
        description: "AM5, 14+2+1 фазы, бюджетный вариант", 
        price: "15 990 ₽", 
        discount: "-15%", 
        img: "картинки_каталог/ASRock B650 PRO RS.png" 
    },
        lga1700_1: { 
        category: "Материнские платы", 
        name: "ASUS PRIME Z790-P", 
        description: "LGA 1700, DDR5, PCIe 5.0, 14+1 фазы", 
        price: "22 990 ₽", 
        discount: "-5%", 
        img: "картинки_каталог/ASUS PRIME Z790-P.png" 
    },
    lga1700_2: { 
        category: "Материнские платы", 
        name: "MSI PRO Z790-A", 
        description: "LGA 1700, DDR5, WiFi 6E", 
        price: "23 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/MSI PRO Z790-A.png" 
    },
    lga1700_3: { 
        category: "Материнские платы", 
        name: "Gigabyte B760 DS3H", 
        description: "LGA 1700, DDR4, бюджетный вариант", 
        price: "11 990 ₽", 
        discount: "-12%", 
        img: "картинки_каталог/Gigabyte B760 DS3H.jpg" 
    },
    lga1700_4: { 
        category: "Материнские платы", 
        name: "ASRock Z690 Steel Legend", 
        description: "LGA 1700, DDR4, 16+1 фазы", 
        price: "17 990 ₽", 
        discount: "-10%", 
        img: "картинки_каталог/ASRock Z690 Steel Legend.png" 
    },
        atx_1: { 
        category: "Материнские платы", 
        name: "ASUS ROG MAXIMUS Z790 HERO", 
        description: "ATX, DDR5, 20+1 фазы, WiFi 6E", 
        price: "49 990 ₽", 
        discount: "-5%", 
        img: "картинки_каталог/ASUS ROG MAXIMUS Z790 HERO.png" 
    },
    atx_2: { 
        category: "Материнские платы", 
        name: "MSI MPG Z790 CARBON", 
        description: "ATX, DDR5, 18+1+1 фазы, отличный выбор", 
        price: "39 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/MSI MPG Z790 CARBON.png" 
    },
    atx_3: { 
        category: "Материнские платы", 
        name: "Gigabyte Z790 AORUS MASTER", 
        description: "ATX, DDR5, 20+1+2 фазы, топовая модель", 
        price: "44 990 ₽", 
        discount: "-7%", 
        img: "картинки_каталог/Gigabyte Z790 AORUS MASTER.jpg" 
    },
    atx_4: { 
        category: "Материнские платы", 
        name: "ASRock Z790 Taichi", 
        description: "ATX, DDR5, 24+1+2 фазы, премиум класс", 
        price: "47 990 ₽", 
        discount: "-6%", 
        img: "картинки_каталог/ASRock Z790 Taichi.webp" 
    },
        matx_1: { 
        category: "Материнские платы", 
        name: "ASUS TUF GAMING B760M", 
        description: "mATX, DDR5, 12+1 фазы, военная сборка", 
        price: "14 990 ₽", 
        discount: "-10%", 
        img: "картинки_каталог/ASUS TUF GAMING B760M.webp" 
    },
    matx_2: { 
        category: "Материнские платы", 
        name: "MSI MAG B760M MORTAR", 
        description: "mATX, DDR5, 12+1+1 фазы, отличная цена", 
        price: "13 990 ₽", 
        discount: "-12%", 
        img: "картинки_каталог/MSI MAG B760M MORTAR.png" 
    },
    matx_3: { 
        category: "Материнские платы", 
        name: "Gigabyte B760M AORUS ELITE", 
        description: "mATX, DDR5, 12+1+1 фазы, RGB подсветка", 
        price: "12 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/Gigabyte B760M AORUS ELITE.png" 
    },
    matx_4: { 
        category: "Материнские платы", 
        name: "ASRock B760M Steel Legend", 
        description: "mATX, DDR5, 10+1+1 фазы, бюджетный вариант", 
        price: "10 990 ₽", 
        discount: "-15%", 
        img: "картинки_каталог/ASRock B760M Steel Legend.png" 
    },
        ddr5_1: { 
        category: "Оперативная память", 
        name: "Kingston FURY 32GB DDR5", 
        description: "5200MHz, CL40, RGB подсветка", 
        price: "11 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/Kingston FURY 32GB DDR5.png" 
    },
    ddr5_2: { 
        category: "Оперативная память", 
        name: "Corsair Vengeance 32GB", 
        description: "5600MHz, CL36, отличная стабильность", 
        price: "12 990 ₽", 
        discount: "-5%", 
        img: "картинки_каталог/Corsair Vengeance 32GB.jpg" 
    },
    ddr5_3: { 
        category: "Оперативная память", 
        name: "G.Skill Trident Z5 RGB", 
        description: "6000MHz, CL30, топовая серия", 
        price: "15 990 ₽", 
        discount: "-10%", 
        img: "картинки_каталог/G.Skill Trident Z5 RGB.png" 
    },
    ddr5_4: { 
        category: "Оперативная память", 
        name: "TeamGroup T-Force Delta", 
        description: "6400MHz, CL32, RGB, 32GB", 
        price: "14 990 ₽", 
        discount: "-7%", 
        img: "картинки_каталог/TeamGroup T-Force Delta.jpg" 
    },
        ram16_1: { 
        category: "Оперативная память", 
        name: "Kingston FURY 16GB DDR4", 
        description: "3200MHz, CL16, отличный выбор", 
        price: "3 990 ₽", 
        discount: "-10%", 
        img: "картинки_каталог/Kingston FURY 16GB DDR4.png" 
    },
    ram16_2: { 
        category: "Оперативная память", 
        name: "Corsair Vengeance LPX 16GB", 
        description: "3600MHz, CL18, низкий профиль", 
        price: "4 490 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/Corsair Vengeance LPX 16GB.png" 
    },
    ram16_3: { 
        category: "Оперативная память", 
        name: "G.Skill Aegis 16GB", 
        description: "3200MHz, CL16, бюджетный вариант", 
        price: "3 490 ₽", 
        discount: "-15%", 
        img: "картинки_каталог/G.Skill Aegis 16GB.png" 
    },
    ram16_4: { 
        category: "Оперативная память", 
        name: "Patriot Viper 16GB", 
        description: "3600MHz, CL18, радиаторы", 
        price: "3 990 ₽", 
        discount: "-12%", 
        img: "картинки_каталог/Patriot Viper 16GB.png" 
    },
        ram32_1: { 
        category: "Оперативная память", 
        name: "Kingston FURY 32GB DDR4", 
        description: "3200MHz, CL16, 2x16GB", 
        price: "7 990 ₽", 
        discount: "-10%", 
        img: "картинки_каталог/Kingston FURY 32GB DDR4.png" 
    },
    ram32_2: { 
        category: "Оперативная память", 
        name: "Corsair Vengeance 32GB", 
        description: "3600MHz, CL18, RGB подсветка", 
        price: "8 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/Corsair Vengeance 32GB.jpg" 
    },
    ram32_3: { 
        category: "Оперативная память", 
        name: "G.Skill Ripjaws V 32GB", 
        description: "3200MHz, CL16, отличная цена", 
        price: "6 990 ₽", 
        discount: "-15%", 
        img: "картинки_каталог/G.Skill Ripjaws V 32GB.jpg" 
    },
    ram32_4: { 
        category: "Оперативная память", 
        name: "TeamGroup T-Force Vulcan 32GB", 
        description: "3600MHz, CL18, 2x16GB", 
        price: "7 490 ₽", 
        discount: "-12%", 
        img: "картинки_каталог/TeamGroup T-Force Vulcan 32GB.jpg" 
    },
        ram64_1: { 
        category: "Оперативная память", 
        name: "Kingston FURY 64GB DDR4", 
        description: "3200MHz, CL16, 4x16GB", 
        price: "14 990 ₽", 
        discount: "-10%", 
        img: "картинки_каталог/Kingston FURY 64GB DDR4.png" 
    },
    ram64_2: { 
        category: "Оперативная память", 
        name: "Corsair Vengeance 64GB", 
        description: "3600MHz, CL18, 2x32GB", 
        price: "15 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/Corsair Vengeance 64GB.jpg" 
    },
    ram64_3: { 
        category: "Оперативная память", 
        name: "G.Skill Trident Z 64GB", 
        description: "3200MHz, CL16, RGB подсветка", 
        price: "16 990 ₽", 
        discount: "-12%", 
        img: "картинки_каталог/G.Skill Trident Z 64GB.png" 
    },
    ram64_4: { 
        category: "Оперативная память", 
        name: "Patriot Viper Steel 64GB", 
        description: "3600MHz, CL18, 2x32GB", 
        price: "13 990 ₽", 
        discount: "-15%", 
        img: "картинки_каталог/Patriot Viper Steel 64GB.png" 
    },
        rtx5080_1: { 
        category: "Видеокарты", 
        name: "RTX 5080 16GB", 
        description: "16GB GDDR7, 384-bit, трассировка лучей", 
        price: "149 990 ₽", 
        discount: "-5%", 
        img: "картинки_каталог/RTX 5080 16GB.webp" 
    },
    rtx5080_2: { 
        category: "Видеокарты", 
        name: "RTX 5080 MSI GAMING", 
        description: "16GB GDDR7, улучшенное охлаждение", 
        price: "154 990 ₽", 
        discount: "-3%", 
        img: "картинки_каталог/RTX 5080 MSI GAMING.webp" 
    },
    rtx5080_3: { 
        category: "Видеокарты", 
        name: "RTX 5080 ASUS TUF", 
        description: "16GB GDDR7, военная сборка", 
        price: "159 990 ₽", 
        discount: "-2%", 
        img: "картинки_каталог/RTX 5080 ASUS TUF.png" 
    },
    rtx5080_4: { 
        category: "Видеокарты", 
        name: "RTX 5080 Gigabyte", 
        description: "16GB GDDR7, система охлаждения WINDFORCE", 
        price: "151 990 ₽", 
        discount: "-4%", 
        img: "картинки_каталог/RTX 5080 Gigabyte.webp" 
    },
        rtx5070_1: { 
        category: "Видеокарты", 
        name: "RTX 5070 12GB", 
        description: "12GB GDDR7, 192-bit, DLSS 4", 
        price: "99 990 ₽", 
        discount: "-5%", 
        img: "картинки_каталог/RTX 5070 12GB.png" 
    },
    rtx5070_2: { 
        category: "Видеокарты", 
        name: "RTX 5070 MSI VENTUS", 
        description: "12GB GDDR7, 2x вентилятора", 
        price: "94 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/RTX 5070 MSI VENTUS.png" 
    },
    rtx5070_3: { 
        category: "Видеокарты", 
        name: "RTX 5070 ASUS DUAL", 
        description: "12GB GDDR7, компактный дизайн", 
        price: "96 990 ₽", 
        discount: "-7%", 
        img: "картинки_каталог/RTX 5070 ASUS DUAL.webp" 
    },
    rtx5070_4: { 
        category: "Видеокарты", 
        name: "RTX 5070 Gigabyte", 
        description: "12GB GDDR7, 3x WINDFORCE", 
        price: "97 990 ₽", 
        discount: "-6%", 
        img: "картинки_каталог/RTX 5070 Gigabyte.png" 
    },
        rtx5060_1: { 
        category: "Видеокарты", 
        name: "RTX 5060 8GB", 
        description: "8GB GDDR7, 128-bit, отличный для 1080p", 
        price: "59 990 ₽", 
        discount: "-5%", 
        img: "картинки_каталог/RTX 5060 8GB.png" 
    },
    rtx5060_2: { 
        category: "Видеокарты", 
        name: "RTX 5060 MSI GAMING", 
        description: "8GB GDDR7, TWIN FROZR 9", 
        price: "62 990 ₽", 
        discount: "-3%", 
        img: "картинки_каталог/RTX 5060 MSI GAMING.png" 
    },
    rtx5060_3: { 
        category: "Видеокарты", 
        name: "RTX 5060 ASUS DUAL", 
        description: "8GB GDDR7, 2x вентилятора", 
        price: "58 990 ₽", 
        discount: "-8%", 
        img: "картинки_каталог/RTX 5060 ASUS DUAL.png" 
    },
    rtx5060_4: { 
        category: "Видеокарты", 
        name: "RTX 5060 Gigabyte", 
        description: "8GB GDDR7, WINDFORCE 2X", 
        price: "60 990 ₽", 
        discount: "-6%", 
        img: "картинки_каталог/RTX 5060 Gigabyte.png" 
    },
        rtx5090_1: { 
        category: "Видеокарты", 
        name: "RTX 5090 24GB", 
        description: "24GB GDDR7, 512-bit, топовый флагман", 
        price: "249 990 ₽", 
        discount: "-3%", 
        img: "картинки_каталог/RTX 5090 24GB.png" 
    },
    rtx5090_2: { 
        category: "Видеокарты", 
        name: "RTX 5090 MSI SUPRIM", 
        description: "24GB GDDR7, премиум охлаждение", 
        price: "259 990 ₽", 
        discount: "-2%", 
        img: "картинки_каталог/RTX 5090 MSI SUPRIM.png" 
    },
    rtx5090_3: { 
        category: "Видеокарты", 
        name: "RTX 5090 ASUS ROG STRIX", 
        description: "24GB GDDR7, максимальная производительность", 
        price: "269 990 ₽", 
        discount: "-1%", 
        img: "картинки_каталог/RTX 5090 ASUS ROG STRIX.jpg" 
    },
    rtx5090_4: { 
        category: "Видеокарты", 
        name: "RTX 5090 Gigabyte AORUS", 
        description: "24GB GDDR7, жидкокристаллический дисплей", 
        price: "264 990 ₽", 
        discount: "-2%", 
        img: "картинки_каталог/RTX 5090 Gigabyte AORUS.png" 
    }
};
let currentGrid = null;
function createProductGrid(productKey) {
    const products = [];
        for (let i = 1; i <= 4; i++) {
        const key = `${productKey}_${i}`;
        if (productsData[key]) {
            products.push(productsData[key]);
        }
    }
    
    if (products.length === 0) return null;
    
    const grid = document.createElement('div');
    grid.className = 'products-grid';
    
    products.forEach(product => {
        const card = createCard(product);
        grid.appendChild(card);
    });
    
    return grid;
}

function createCard(product) {
    const card = document.createElement('div');
    card.className = 'kartochkaa';
    card.innerHTML = `
        <div class="productimg">
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product4">
            <div class="product1">${product.category}</div>
            <h2 class="product2">${product.name}</h2>
            <p class="product3">${product.description}</p>
            <div class="cenik">
                <div class="price">
                    <span class="meinprice">${product.price}</span>
                    <span class="discount">${product.discount}</span>
                </div>
                <button class="knopochka">В корзину</button>
            </div>
        </div>
    `;

        const btn = card.querySelector('.knopochka');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
       
    });
    
    return card;
}

function showProducts(productKey) {
    const container = document.getElementById('productContainer');
    
    if (currentGrid) {
        currentGrid.classList.remove('show');
        currentGrid.classList.add('hide-transition');
        
        setTimeout(() => {
            if (currentGrid && currentGrid.parentNode) {
                currentGrid.remove();
            }
            createAndShowNewGrid(productKey, container);
        }, 300);
    } else {
        createAndShowNewGrid(productKey, container);
    }
}

function createAndShowNewGrid(productKey, container) {
    const newGrid = createProductGrid(productKey);
    if (!newGrid) return;
    
    container.appendChild(newGrid);
    currentGrid = newGrid;
    
    setTimeout(() => {
        newGrid.classList.add('show');
    }, 10);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.proc').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('prociki');
            if (productId && productsData[`${productId}_1`]) {
                showProducts(productId);
            }
        });
    });
    
    document.querySelectorAll('.mat').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('materinka');
            if (productId && productsData[`${productId}_1`]) {
                showProducts(productId);
            }
        });
    });
    
    document.querySelectorAll('.pamat').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('oper');
            if (productId && productsData[`${productId}_1`]) {
                showProducts(productId);
            }
        });
    });
    
    document.querySelectorAll('.carta').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('rtx');
            if (productId && productsData[`${productId}_1`]) {
                showProducts(productId);
            }
        });
    });
});





function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    showNotification(`${product.name} добавлен в корзину!`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #c5b120;
        color: #121212;
        padding: 12px 24px;
        border-radius: 48px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease;
        cursor: pointer;
    `;
    
    document.body.appendChild(notification);
    
    if (!document.querySelector('#cartNotificationStyle')) {
        const style = document.createElement('style');
        style.id = 'cartNotificationStyle';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 2500);
    
    notification.onclick = () => {
        notification.remove();
    };
}

const originalCreateCard = createCard;
window.createCard = function(product) {
    const card = document.createElement('div');
    card.className = 'kartochkaa';
    
    if (product.category === 'Видеокарты') {
        card.classList.add('gpu');
    } else if (product.category === 'Оперативная память') {
        card.classList.add('ram');
    }
    
    card.innerHTML = `
        <div class="productimg">
            <img src="${product.img}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product4">
            <div class="product1">${product.category}</div>
            <h2 class="product2">${product.name}</h2>
            <p class="product3">${product.description}</p>
            <div class="cenik">
                <div class="price">
                    <span class="meinprice">${product.price}</span>
                    <span class="discount">${product.discount}</span>
                </div>
                <button class="knopochka add-to-cart-btn">В корзину</button>
            </div>
        </div>
    `;

    const btn = card.querySelector('.add-to-cart-btn');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product);
    });
    
    return card;
};

createCard = window.createCard;
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    showNotification(`${product.name} добавлен в корзину!`);
    
    updateCartBadge();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #c5b120;
        color: #121212;
        padding: 12px 24px;
        border-radius: 48px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease;
        cursor: pointer;
    `;
    
    document.body.appendChild(notification);
    
    if (!document.querySelector('#cartNotificationStyle')) {
        const style = document.createElement('style');
        style.id = 'cartNotificationStyle';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 2500);
    
    notification.onclick = () => {
        notification.remove();
    };
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    
    let badge = document.querySelector('.cart-badge');
    
    if (totalItems > 0) {
        if (!badge) {
            const cartIcon = document.querySelector('.head3 a:first-child, .ak a:first-child');
            if (cartIcon) {
                badge = document.createElement('span');
                badge.className = 'cart-badge';
                badge.style.cssText = `
                    position: absolute;
                    top: -8px;
                    right: -12px;
                    background: #c5b120;
                    color: #121212;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    font-size: 11px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Poppins', sans-serif;
                `;
                cartIcon.style.position = 'relative';
                cartIcon.appendChild(badge);
            }
        }
        if (badge) {
            badge.textContent = totalItems > 99 ? '99+' : totalItems;
            badge.style.display = 'flex';
        }
    } else {
        if (badge) {
            badge.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();  
});