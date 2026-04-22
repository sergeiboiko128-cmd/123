function renderCart() {
    const cartContainer = document.getElementById('tovar');
    if (!cartContainer) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div>
                <p class="p2">Корзина пустая</p>
            </div>
        `;
        
        const totalElement = document.getElementById('mein_dengi');
        if (totalElement) totalElement.innerHTML = '0 ₽';
        return;
    }
    
    let total = 0;
    let cartHTML = '';
    
    cart.forEach((item, index) => {
        const priceValue = parseFloat(item.price.replace(/[^\d]/g, ''));
        const itemTotal = priceValue * (item.quantity || 1);
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-image">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-category">${item.category}</div>
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-description">${item.description.substring(0, 80)}...</p>
                </div>
                <div class="cart-item-quantity">
                    <div class="quantity-controls">
                        <button class="qty-btn minus" data-index="${index}" data-change="-1">-</button>
                        <span class="quantity-value">${item.quantity || 1}</span>
                        <button class="qty-btn plus" data-index="${index}" data-change="1">+</button>
                    </div>
                </div>
                <div class="cart-item-price">
                    <div class="item-total">${itemTotal.toLocaleString()} ₽</div>
                    <div class="item-original">${item.price} × ${item.quantity || 1}</div>
                </div>
                <div>
                    <button class="remove-item-btn" data-index="${index}">удалить</button>
                </div>
            </div>
        `;
    });
    
    cartContainer.innerHTML = cartHTML;
    
    const totalElement = document.getElementById('mein_dengi');
    if (totalElement) {
        totalElement.innerHTML = total.toLocaleString() + ' ₽';
    }
    
    addCartEventListeners();
    
    updateCartBadge();
}

function addCartEventListeners() {
    const minusBtns = document.querySelectorAll('.qty-btn.minus');
    const plusBtns = document.querySelectorAll('.qty-btn.plus');
    const removeBtns = document.querySelectorAll('.remove-item-btn');
    
    minusBtns.forEach(btn => {
        btn.removeEventListener('click', handleQuantityChange);
        btn.addEventListener('click', handleQuantityChange);
    });
    
    plusBtns.forEach(btn => {
        btn.removeEventListener('click', handleQuantityChange);
        btn.addEventListener('click', handleQuantityChange);
    });
    
    removeBtns.forEach(btn => {
        btn.removeEventListener('click', handleRemoveItem);
        btn.addEventListener('click', handleRemoveItem);
    });
}

function handleQuantityChange(event) {
    const index = parseInt(event.target.getAttribute('data-index'));
    const change = parseInt(event.target.getAttribute('data-change'));
    updateQuantity(index, change);
}

function handleRemoveItem(event) {
    const index = parseInt(event.target.getAttribute('data-index'));
    removeFromCart(index);
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart[index]) {
        const newQuantity = (cart[index].quantity || 1) + change;
        
        if (newQuantity <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = newQuantity;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function clearCart() {
    if (confirm('Вы уверены, что хотите очистить корзину?')) {
        localStorage.removeItem('cart');
        renderCart();
        updateCartBadge();
    }
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

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Корзина пуста! Добавьте товары в корзину.');
        return;
    }
    
    let total = 0;
    cart.forEach(item => {
        const priceValue = parseFloat(item.price.replace(/[^\d]/g, ''));
        total += priceValue * (item.quantity || 1);
    });
    
    let itemsList = '';
    cart.forEach(item => {
        itemsList += `\n• ${item.name} - ${item.quantity} шт. × ${item.price}`;
    });
    
    alert(`Спасибо за заказ!\n\nВаш заказ:${itemsList}\n\nОбщая сумма: ${total.toLocaleString()} ₽\n`);
}

document.addEventListener('DOMContentLoaded', function() {
    renderCart();
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
});

window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.checkout = checkout;


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