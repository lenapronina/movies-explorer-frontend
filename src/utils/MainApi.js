export const BASE_URL = 'https://api.dontbeatfilm.students.nomoredomains.work';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => {
    if(res.status === 200){
      return res.json();
    } else if (res.status === 409){
      return Promise.reject('Пользователь с таким email уже существует');
    } else {
      return Promise.reject('При регистрации пользователя произошла ошибка');
    }
  })
  .then(data => data);
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    if(res.status === 400 ){
      return Promise.reject(`Вы ввели неправильный логин или пароль.`)
    } else if(res.status === 401){
      return Promise.reject(`При авторизации произошла ошибка. Переданный токен некорректен.`)
    } else {
      return res.json()
    }
  })
  .then((data) => {
    if (data){
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then((res) => {
    if(res.status === 400 ){
      return Promise.reject(`При авторизации произошла ошибка. Токен не передан или передан не в том формате.`)
    } else if(res.status === 401){
      return Promise.reject(`При авторизации произошла ошибка. Переданный токен некорректен.`)
    } else {
      return res.json()
    }
  })
  .then(data => data);
}

export const updateUserInfo = (updatedData, token)=> {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: updatedData.name,
      email: updatedData.email
    })
  })
  .then((res) => {
    if (res.ok){
      return res.json();
    }
    return Promise.reject('При обновлении профиля произошла ошибка')
  });
}