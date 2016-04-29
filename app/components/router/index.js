module.exports = function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabsController.stream', {
                url: '/stream',
                views: {
                    'tab1': {
                        templateUrl: 'views/components/stream/streamView.html'
                    }
                }
            })

            .state('tabsController.scheduleTrainer', {
                url: '/slots/trainerName',
                views: {
                    'tab4': {
                        templateUrl: 'views/components/scheduleTrainer/scheduleView.html'
                    }
                }
            })

            .state('tabsController.account', {
                url: '/account',
                views: {
                    'tab3': {
                        templateUrl: 'views/components/account/accountView.html'
                    }
                }
            })

            .state('tabsController', {
                url: '/main',
                templateUrl: 'views/shared/tabsController/tabsController.html',
                abstract: true
            })

            .state('tabsController.myAppointments', {
                url: '/my-events',
                views: {
                    'tab2': {
                        templateUrl: 'views/components/myEvents/eventsView.html'
                    }
                }
            })

            .state('login', {
                url: '/login',
                templateUrl: 'views/components/login/loginView.html'
            })

            .state('signup', {
                url: '/signup',
                templateUrl: 'views/components/login/signupView.html'
            })

            .state('tabsController.newPost', {
                url: '/newPost',
                views: {
                    'tab1': {
                        templateUrl: 'views/components/stream/newPostView.html'
                    }
                }
            })
            .state('tabsController.addContacts', {
                url: '/addContacts',
                views: {
                    'tab1': {
                        templateUrl: 'views/components/stream/addContactsView.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('/login')
    };
