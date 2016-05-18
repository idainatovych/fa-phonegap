'use strict';

function loginCtrl($scope, currentUserId, $location) {

    var vm = this;

    vm.defineListeners = function () {
        $scope.$watch('userId', function () {
            if($scope.userId){
                $location.url('/main/services')
            }
        });
    };

    vm.defineScope = function () {
        $scope.userId = currentUserId;

    };


    vm.init = function () {
        vm.defineScope();
        vm.defineListeners();
    };

    vm.init();
}

module.exports = ['$scope', 'currentUserId', '$location', loginCtrl];