module.exports = function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        //abstracts
        .state('tabsController', {
            url: '/main',
            templateUrl: 'views/shared/tabsController/tabsController.html',
            abstract: true
        })

        //login

        .state('login', {
            url: '/login',
            templateUrl: 'views/components/login/loginView.html'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'views/components/login/signupView.html'
        })

        //services

        .state('tabsController.scheduleTrainer', {
            url: '/slots/trainerName',
            views: {
                'services': {
                    templateUrl: 'views/components/scheduleTrainer/scheduleView.html',
                    controller: 'scheduleCtrl'
                }
            }
        })

        .state('tabsController.services', {
            url: '/services',
            views: {
                'services': {
                    templateUrl: 'views/components/services/servicesView.html',
                }
            }
        })

        //stream

        .state('tabsController.stream', {
            url: '/stream',
            views: {
                'stream': {
                    templateUrl: 'views/components/stream/streamView.html'
                }
            }
        })

        .state('tabsController.newPost', {
            url: '/newPost',
            views: {
                'stream': {
                    templateUrl: 'views/components/stream/newPostView.html'
                }
            }
        })
        .state('tabsController.addContacts', {
            url: '/addContacts',
            views: {
                'stream': {
                    templateUrl: 'views/components/stream/addContactsView.html'
                }
            }
        })

        //events

        .state('tabsController.myEvents', {
            url: '/my-events',
            views: {
                'events': {
                    templateUrl: 'views/components/myEvents/eventsView.html'
                }
            }
        })

        //account

        .state('tabsController.account', {
            url: '/account',
            views: {
                'account': {
                    templateUrl: 'views/components/account/accountView.html'
                }
            }
        });


    $urlRouterProvider.otherwise('/login')
};
