const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  // Получаем значения из полей формы
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const fam = document.getElementById('fam').value;
  const otch = document.getElementById('otch').value;
  const age = document.getElementById('Age').value;
  const phone = document.getElementById('Phone').value;
  const mail = document.getElementById('Mail').value;

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

      const encodedData = new URLSearchParams({ 'S': `${username}⇥${password}⇥${name}⇥${fam}⇥${age}⇥${phone}⇥${mail}⇥${otch}` }).toString();
      //http://serverdelivery.somee.com/Home/LoginPassword
      fetch('http://serverdelivery.somee.com/Home/RegClient' ,  {
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
        if(dataaccount[0] == 'ST2') {
            window.location.href = '../index.html';
        }
        else if (dataaccount[0] == 'ST1'){
            let itema = document.getElementById("soob");
            itema.innerText = `Такой логин уже сущевствует`;
        }
        // Например, можете отобразить сообщение об успешной регистрации
      })
      .catch(error => {
        console.error('Ошибка:', error);
        // Можете отобразить сообщение об ошибке пользователю
      });
});
document.getElementById('returnf').onclick = function() {
    window.location.href = '../index.html';
  };