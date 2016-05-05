'use strict';

function translate($translateProvider) {
    $translateProvider.translations('en', {
        email: "E-mail",
        password: "Password",
        accName: "First Name",
        accSurname: "Last Name",
        phone: "Phone",
        lang: "Language",
        btnSave: "Save"
    });
    $translateProvider.translations('ru', {
        email: "Почта",
        password: "Пароль",
        accName: "Имя",
        accSurname: "Фамилия",
        phone: "Телефон",
        lang: "Язык",
        btnSave: "Сохранить"
    });
    $translateProvider.preferredLanguage("ru");
    $translateProvider.fallbackLanguage("ru");
}

module.exports = translate;