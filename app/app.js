
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'pascalprecht.translate'])
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
    })
    .run(function ($ionicPlatform, $translate) {

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(typeof navigator.globalization !== "undefined") {
                navigator.globalization.getPreferredLanguage(function(language) {
                    $translate.use((language.value).split("-")[0]).then(function(data) {
                        console.log("SUCCESS -> " + data);
                    }, function(error) {
                        console.log("ERROR -> " + error);
                    });
                }, null);
            }
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })