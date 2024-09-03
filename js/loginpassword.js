const loginForm = document.getElementById('loginForm');
const regb = document.getElementById('buttonreg');

function loginpassword(login, password, first) {
  const encodedData = new URLSearchParams({ 'S': `${login}⇥${password}` }).toString();
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
      window.location.href = './pages/pagenavclient.html';
      localStorage.setItem('id', dataaccount[1]);
      localStorage.setItem('login', dataaccount[2]);
      localStorage.setItem('password', dataaccount[3]);
      localStorage.setItem('name', dataaccount[4]);
      localStorage.setItem('fam', dataaccount[5]);
      localStorage.setItem('age', dataaccount[6]);
      localStorage.setItem('oncourier', dataaccount[7]);
      localStorage.setItem('addres', dataaccount[9]);
      localStorage.setItem('numberphone', dataaccount[10]);
      localStorage.setItem('otch', dataaccount[11]);
    }
    else if (dataaccount[0] == 'YesCourier' && dataaccount[7] == '1'){
      window.location.href = './pages/pagenavcourier.html';
      localStorage.setItem('id', dataaccount[1]);
      localStorage.setItem('login', dataaccount[2]);
      localStorage.setItem('password', dataaccount[3]);
      localStorage.setItem('name', dataaccount[4]);
      localStorage.setItem('fam', dataaccount[5]);
      localStorage.setItem('age', dataaccount[6]);
      localStorage.setItem('oncourier', dataaccount[7]);
      localStorage.setItem('addres', dataaccount[9]);
      localStorage.setItem('numberphone', dataaccount[10]);
      localStorage.setItem('otch', dataaccount[11]);
      localStorage.setItem('car', dataaccount[14]);
    }
    else if (dataaccount[0] == 'No'){
        let itema = document.getElementById("soob");
        if (first == 0) {
          itema.innerText = `Неверный логин или пароль`;
        }

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
}

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  // Получаем значения из полей формы
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  loginpassword(username, password, 0);      
});


document.getElementById('buttonreg').onclick = function() {
    window.location.href = './pages/deliveryorclient.html';
};

document.addEventListener("DOMContentLoaded", function() {
   if (localStorage.getItem('login') != '' && localStorage.getItem('password') != '') {
    loginpassword(localStorage.getItem('login'), localStorage.getItem('password'), 1);
   }
});

