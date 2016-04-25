angular.module('app.controllers', [])
  
.controller('streamCtrl', function($scope) {

})
   
.controller('scheduleTrainerCtrl', function($scope, $ionicPopup) {

// Triggered on a button click, or some other target
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
})
   
.controller('accountCtrl', function($scope) {

})
      
.controller('trainersCtrl', function($scope) {

})
   
.controller('myAppointmentsCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('pageCtrl', function($scope) {

})
    
.controller('newPostCtrl', function($scope) {

})

.controller('addContactsCtrl', function($scope) {

})