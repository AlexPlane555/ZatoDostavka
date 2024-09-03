const navLinks = document.querySelectorAll('nav a');
  
        const pages = document.querySelectorAll('.page');

        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const pageId = link.dataset.page;
                const page = document.getElementById(pageId);

                // Скрываем все страницы
                pages.forEach(p => p.classList.remove('active'));

                // Показываем выбранную страницу
                page.classList.add('active');

                // Обновляем активный пункт в навигации
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
});
const container = document.getElementById('page1'); // Замените 'yourContainerId' на ID вашего контейнера


// Функция для создания и добавления div
function addOrderDiv(orderNumber, description, address) {
  // Создаем новый div
  const orderDiv = document.createElement('div');
  orderDiv.classList.add('order-item'); // Добавьте класс для стилизации (необязательно)

  // Создаем заголовок h3
  const orderHeader = document.createElement('h3');
  orderHeader.textContent = `Заказ ${orderNumber}`;
  orderDiv.appendChild(orderHeader);

  // Создаем параграф с описанием
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = description;
  orderDiv.appendChild(descriptionParagraph);

  // Создаем параграф с адресом
  const addressParagraph = document.createElement('p');
  addressParagraph.textContent = address;
  orderDiv.appendChild(addressParagraph);

  // Добавляем div в контейнер
  container.appendChild(orderDiv);
}

addOrderDiv(1, 'Описание заказа 1', 'Адрес заказа 1');
addOrderDiv(2, 'Описание заказа 2', 'Адрес заказа 2');
addOrderDiv(3, 'Описание заказа 3', 'Адрес заказа 3');
addOrderDiv(4, 'Описание заказа 4', 'Адрес заказа 4');
addOrderDiv(5, 'Описание заказа 5', 'Адрес заказа 5');
addOrderDiv(6, 'Описание заказа 6', 'Адрес заказа 6');

const container2 = document.getElementById('page2'); // Замените 'yourContainerId' на ID вашего контейнера


// Функция для создания и добавления div
function addOrderDiv2(orderNumber, description, address) {
  // Создаем новый div
  const orderDiv = document.createElement('div');
  orderDiv.classList.add('order-item'); // Добавьте класс для стилизации (необязательно)

  // Создаем заголовок h3
  const orderHeader = document.createElement('h3');
  orderHeader.textContent = `Заказ ${orderNumber}`;
  orderDiv.appendChild(orderHeader);

  // Создаем параграф с описанием
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = description;
  orderDiv.appendChild(descriptionParagraph);

  // Создаем параграф с адресом
  const addressParagraph = document.createElement('p');
  addressParagraph.textContent = address;
  orderDiv.appendChild(addressParagraph);

  // Добавляем div в контейнер
  container2.appendChild(orderDiv);
}

// Пример использования функции

addOrderDiv2(1, 'Описание заказа 1', 'Адрес заказа 1');
addOrderDiv2(4, 'Описание заказа 4', 'Адрес заказа 4');

document.getElementById('returnf').onclick = function() {
    localStorage.setItem('id', '');
    localStorage.setItem('login', '');
    localStorage.setItem('password', '');
    localStorage.setItem('name', '');
    localStorage.setItem('fam', '');
    localStorage.setItem('age', '');
    localStorage.setItem('oncourier', '');
    localStorage.setItem('addres', '');
    localStorage.setItem('numberphone', '');
    localStorage.setItem('car', '');
    window.location.href = '../index.html';
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('username').value = localStorage.getItem('login');
  document.getElementById('password').value = localStorage.getItem('password');
  document.getElementById('name').value = localStorage.getItem('name');
  document.getElementById('fam').value = localStorage.getItem('fam');
  document.getElementById('otch').value = localStorage.getItem('otch');
  document.getElementById('Age').value = localStorage.getItem('age');
  document.getElementById('Phone').value = localStorage.getItem('addres');
  document.getElementById('Mail').value = localStorage.getItem('numberphone');
  if (localStorage.getItem('car') == '1') { 
    document.getElementById('Car').value = 'Есть';
  }
  else {
    document.getElementById('Car').value = 'Нету';
  }
});
