'use strict';

function accountCtrl($scope, $translate, currentUser) {

    var vm = this;

    vm.defineListeners = function () {
        $scope.$watch('user', function () {
            if (!vm.user) {
                vm.user = currentUser.getUser();
            }
        });
    };

    vm.defineScope = function () {
        $scope.user = currentUser.user;
        $scope.lang = 'ru';
    };


    vm.submit = function () {

        currentUser.modifyUser();

        //if (key) {
        //    $translate.use(key);
        //}
    };


    vm.init = function () {
        vm.defineScope();
        vm.defineListeners();
    };

    vm.init();

}

module.exports = ['$scope', '$translate', 'currentUser', accountCtrl];