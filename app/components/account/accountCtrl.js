'use strict';

function accountCtrl($scope, $translate) {

    $scope.lang = 'ru';

     $scope.changeLanguage = function (key) {
         if(key){
             $translate.use(key);
         }
    };

}

module.exports = ['$scope', '$translate', accountCtrl];