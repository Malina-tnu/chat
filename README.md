# Сайт с чатом

Этот пример - с одной стороны учебный, с другой - в нём реализованые важнейшие вещи, которые обычно требуются при разработке сайтов:

- Обычные страницы, которые проходят через роутер
- Шаблонизация EJS, (ejs-locals: partials, helpers, layouts)
- JSON-сервис (та же страница по сути)
- Авторизация (Express, Connect, MongoDB)
- Закрытая страница (`/chat`, требует авторизации)
- Чат при помощи Sock.JS, интеграция с авторизацией (можно использовать Socket.IO или ws.js)
- Работа с базой данных (MongoDB, Mongoose)
- Асинхронные цепочки вызовов (Async.js)
- Логирование (winston + фабрика логгеров по модулю)
- Кластеризация (общая архитектура + clusterMaster по желанию)
- Архитектура пригодна для разработки и расширения

# Использование

1. `git clone`
2. `npm start`
3. `http://127.0.0.1:3000`

Войти в сайт можно будет через ссылку "Войти" справа. Новый посетитель генерируется автоматом, с любым паролем.
 Если такое имя уже есть, то соответствие пароля проверяется.