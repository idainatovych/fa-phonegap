'use strict';

function AppMain($ionicPlatform,  $translate) {
    $ionicPlatform.ready(function() {
        if(typeof navigator.globalization !== "undefined") {
            navigator.globalization.getPreferredLanguage(function(language) {
                $translate.use((language.value).split("-")[0]).then(function(data) {
                    console.log("SUCCESS -> " + data);
                }, function(error) {
                    console.log("ERROR -> " + error);
                });
            }, null);
        }
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            //StatusBar.styleLightContent();
        }
    });
}

module.exports = ['$ionicPlatform', AppMain];
