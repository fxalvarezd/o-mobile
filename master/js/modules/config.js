/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
    'use strict';

    // Set the following to true to enable the HTML5 Mode
    // You may have to set <base> tag in index and a routing configuration in your server
    $locationProvider.html5Mode(false);

    // default route
    $urlRouterProvider.otherwise('/homepage');

    // -----------------------------------   
    // Application Routes
    // -----------------------------------   
    $stateProvider
        .state('app', {
                abstract: true,
                templateUrl: helper.basepath('app.html'),
                controller: 'AppController',
                resolve: helper.resolveFor('modernizr', 'icons')
        })
        // -----------------------------------
        // Homepage
        // -----------------------------------
        .state('app.homepage', {
                url: '/homepage',
                title: 'Oshyn Inc.',
                templateUrl: helper.basepath('homepage.html')
        })
        // -----------------------------------
        // Services
        // -----------------------------------
        .state('app.services', {
                abstract: true,
                templateUrl: helper.basepath('services.html')
        })
        .state('app.services.video', {
                url: '/services',
                title: 'Services',
                templateUrl: helper.basepath('partials/services-video.html')
        })
        .state('app.services.main', {
                url: '/services',
                title: 'Services',
                templateUrl: helper.basepath('partials/services-menu.html')
        })
        // -----------------------------------
        // Portfolio
        // -----------------------------------
        .state('app.portfolio', {
                url: '/portfolio',
                title: 'Portfolio',
                templateUrl: helper.basepath('portfolio.html')
        })
        // -----------------------------------
        // Resources
        // -----------------------------------
        .state('app.resources', {
                url: '/resources',
                title: 'Resources',
                templateUrl: helper.basepath('resources.html')
        })
        // -----------------------------------
        // Partners
        // -----------------------------------
        .state('app.partners', {
                url: '/partners',
                title: 'Partners',
                templateUrl: helper.basepath('partners.html')
        })
        // -----------------------------------
        // Who We Are
        // -----------------------------------
        .state('app.who', {
                url: '/who',
                title: 'Who We Are',
                templateUrl: helper.basepath('who.html')
        })
        // -----------------------------------
        // Contact Us
        // -----------------------------------
        .state('app.contact', {
                url: '/contact',
                title: 'Contact Us',
                templateUrl: helper.basepath('contact.html')
        })
        ;
}]).config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
        'use strict';
        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });
}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ( $controllerProvider, $compileProvider, $filterProvider, $provide) {
            'use strict';
            App.controller = $controllerProvider.register;
            App.directive  = $compileProvider.directive;
            App.filter     = $filterProvider.register;
            App.factory    = $provide.factory;
            App.service    = $provide.service;
            App.constant   = $provide.constant;
            App.value      = $provide.value;
}]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.parentSelector = '.wrapper > section';
}])
;
