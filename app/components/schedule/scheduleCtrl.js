'use strict';

function scheduleTrainerCtrl($scope, $ionicPopup) {

    $scope.showPopup = function() {
        $scope.data = {};

        // A confirm dialog
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirm appointment',
                template: '<p class="text-center">Create appointment with <strong>Artem Davidchenko</strong> on <strong>Monday, 25 Apr 2016 from 10:00 till 11:00</strong>?</p>'
            });

            confirmPopup.then(function(res) {
                if(res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        }
    }();
}

module.exports = ['$scope', '$ionicPopup', scheduleTrainerCtrl];