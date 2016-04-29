module.exports = function ($ionicPlatform, $translate) {
    $ionicPlatform.ready(function () {
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
};
