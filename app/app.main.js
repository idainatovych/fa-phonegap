'use strict';

function AppMain($ionicPlatform, $translate) {
    $ionicPlatform.ready(function () {
        if (typeof navigator.globalization !== "undefined") {
            navigator.globalization.getPreferredLanguage(function (language) {
                $translate.use((language.value).split("-")[0]).then(function (data) {
                    console.log("SUCCESS -> " + data);
                }, function (error) {
                    console.log("ERROR -> " + error);
                });
            }, null);
        }
        // Uncomment when we get logic for push notification
        //
        //var push = PushNotification.init({
        //    "android": {
        //        "senderID": "XXXXXXXX"
        //    },
        //    "ios": {
        //        "sound": true,
        //        "vibration": true,
        //        "badge": true,
        //        "categories": {
        //            "confirm": {
        //                "yes": {
        //                    "callback": "app.accept", "title": "Yes", "foreground": true, "destructive": false
        //                },
        //                "no": {
        //                    "callback": "app.reject", "title": "No", "foreground": true, "destructive": false
        //                }
        //            }
        //        }
        //    },
        //    "windows": {}
        //});
        //
        //push.on('error', function (e) {
        //    console.log("push error = " + e.message);
        //});
        //
        //push.on('registration', function (data) {
        //    console.log('registration event: ' + data.registrationId);
        //
        //    var oldRegId = localStorage.getItem('registrationId');
        //    if (oldRegId !== data.registrationId) {
        //        // Save new registration ID
        //        localStorage.setItem('registrationId', data.registrationId);
        //        // Post registrationId to your app server as the value has changed
        //    }
        //});


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
