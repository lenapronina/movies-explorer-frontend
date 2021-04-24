# movies-explorer-frontend
![Project preview](./public/readme-image.png)

## О проекте
Movies-explorer — сервис поиска документальных фильмов от BeatFilm. В приложении реализован поиск по ключевому слову, отдельно можно настроить фильтр для короткометражек. Фильмы можно добавлять в сохраненные, а по клику на карточку документалки перейти на страницу с трейлером фильма. Для использования сервиса необходима регистрация.
[Ссылка на сервис](https://dontbeatfilm.students.nomoredomains.work)

### Функциональность
Приложение реализовано на React JS с помощью функциональных компонентов. Для загрузки фильмов используется api от beatfilm; авторизация, добавление фильмов в сохраненные – через [movie-explorer-api](https://github.com/lenapronina/movies-explorer-api). 

### Начать работу

1. Склонировать репозиторий
  ```
  git clone https://github.com/lenapronina/movies-explorer-frontend.git
  ```
2. Перейти в директорию с проектом
  ```
  cd movies-explorer-frontend
  ```
3. Установить зависимости
  ```
  npm install
  ```
4. Запустить приложение  
  ```
  npm run start
  ```
5. Собрать оптимизированный build
  ```
  npm run build
  ```
6. Деплой проекта на удаленный сервер
  ```
  npm run deploy
  ```

### Используемые технологии

HTML · CSS · BEM · JS · React JS · git · npm