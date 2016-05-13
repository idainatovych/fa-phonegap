module.exports = function ($stateProvider, $urlRouterProvider, RestangularProvider) {

    // The URL of the API endpoint
    RestangularProvider.setBaseUrl('http://fa.shade.europe.apibest.com/app_dev.php/api/v1/');

    // JSON-LD @id support
    RestangularProvider.setRestangularFields({
        id: '@id'
    });

    RestangularProvider.setSelfLinkAbsoluteUrl(false);

    // Hydra collections support
    RestangularProvider.addResponseInterceptor(function (data, operation) {
        // Remove trailing slash to make Restangular working
        function populateHref(data) {
            if (data['@id']) {
                data.href = data['@id'].substring(1);
            }
        }

        // Populate href property for the collection
        populateHref(data);

        if ('getList' === operation) {
            var collectionResponse = data['hydra:member'];
            collectionResponse.metadata = {};

            // Put metadata in a property of the collection
            angular.forEach(data, function (value, key) {
                if ('hydra:member' !== key) {
                    collectionResponse.metadata[key] = value;
                }
            });

            // Populate href property for all elements of the collection
            angular.forEach(collectionResponse, function (value) {
                populateHref(value);
            });

            return collectionResponse;
        }

        return data;
    });

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
            templateUrl: 'views/components/signUp/signupView.html',
            controller: 'signUpCtrl as vm'
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
                    templateUrl: 'views/components/account/accountView.html',
                    controller: 'accountCtrl as vm'
                }
            }
        });


    $urlRouterProvider.otherwise('/login')
};
