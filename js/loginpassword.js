const loginForm = document.getElementById('loginForm');
const regb = document.getElementById('buttonreg');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  // Получаем значения из полей формы
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Проверка ввода (вставьте вашу логику проверки)
  /*if (username === 'user' && password === 'password') {
    alert("Вход выполнен успешно!");
    // Здесь вы можете перенаправить пользователя на другую страницу
  } else {
    alert("Неверный логин или пароль");
  }*/
    /*fetch('http://serverdelivery.somee.com/Home/LoginPassword', { mode: 'no-cors' }, {
        method: 'POST',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'S': `${username}⇥${password}` }).toString()
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Ошибка:', error));*/

      const encodedData = new URLSearchParams({ 'S': `${username}⇥${password}` }).toString();
      //http://serverdelivery.somee.com/Home/LoginPassword
      fetch('https://serverdelivery.somee.com/Home/LoginPassword' ,  {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // Указываем формат данных
        },
        body: encodedData // Отправляем URL-encoded данные
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.text(); // Преобразуем ответ сервера в JSON-объект
      })
      .then(dataFromServer => {
        // Обрабатываем данные, полученные от сервера
        console.log(dataFromServer); // Выводим данные в консоль
        
        let dataaccount = dataFromServer.split('⇥');
        console.log(dataaccount[0]);
        if(dataaccount[0] == 'YesClient' && dataaccount[7] == '0') {
            alert('Успешный вход за клиента');
        }
        else if (dataaccount[0] == 'YesCourier' && dataaccount[7] == '1'){
            alert('Успешный вход за курьера');
        }
        else if (dataaccount[0] == 'No'){
            let itema = document.getElementById("soob");
            itema.innerText = `Неверный логин или пароль`;

        }
        else {
            alert('Error');
        }
        // Например, можете отобразить сообщение об успешной регистрации
      })
      .catch(error => {
        console.error('Ошибка:', error);
        // Можете отобразить сообщение об ошибке пользователю
      });
});


document.getElementById('buttonreg').onclick = function() {
    window.location.href = './pages/deliveryorclient.html';
  };


