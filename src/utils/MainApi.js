export const BASE_URL = 'https://api.netumesta.students.nomoredomains.work';

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
    } else {
      return Promise.reject(`Ошибка: некорректно заполнено одно из полей`)
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
      return Promise.reject(`Ошибка: Не передано одно из полей`)
    } else if(res.status === 401){
      return Promise.reject(`Ошибка: пользователь с email не найден`)
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
      return Promise.reject(`Токен не передан или передан не в том формате`)
    } else if(res.status === 401){
      return Promise.reject(`Ошибка: Переданный токен некорректен `)
    } else {
      return res.json()
    }
  })
  .then(data => data);
}