angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.stream', {
    url: '/stream',
    views: {
      'tab1': {
        templateUrl: 'templates/stream.html',
        controller: 'streamCtrl'
      }
    }
  })

  .state('tabsController.scheduleTrainer', {
    url: '/slots/trainerName',
    views: {
      'tab4': {
        templateUrl: 'templates/scheduleTrainer.html',
        controller: 'scheduleTrainerCtrl'
      }
    }
  })

  .state('tabsController.account', {
    url: '/account',
    views: {
      'tab3': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/main',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.trainers', {
    url: '/services',
    views: {
      'tab4': {
        templateUrl: 'templates/trainers.html',
        controller: 'trainersCtrl'
      }
    }
  })

  .state('tabsController.myAppointments', {
    url: '/my-appointments',
    views: {
      'tab2': {
        templateUrl: 'templates/myAppointments.html',
        controller: 'myAppointmentsCtrl'
      }
    }
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('page', {
    url: '/page9',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.newPost', {
    url: '/newPost',
    views: {
      'tab1': {
        templateUrl: 'templates/newPost.html',
        controller: 'newPostCtrl'
      }
    }
  })
  .state('tabsController.addContacts', {
    url: '/addContacts',
    views: {
      'tab1': {
        templateUrl: 'templates/addContacts.html',
        controller: 'addContactsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page7')

  

});