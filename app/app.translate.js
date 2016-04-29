module.exports = angular.module('app.translate', ['pascalprecht.translate'])
    .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    $translateProvider.translations('en', {
        hello_message: "Login",
        goodbye_message: "Password"
    });
    $translateProvider.translations('ru', {
        hello_message: "Логин",
        goodbye_message: "Пароль"
    });
    $translateProvider.preferredLanguage("en");
    $translateProvider.fallbackLanguage("en");
});