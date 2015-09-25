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
                templateUrl: helper.basepath('services/services-video.html')
        })
        .state('app.services.main', {
                url: '/services',
                title: 'Services',
                templateUrl: helper.basepath('services/services-menu.html')
        })
        .state('app.audience-segmentation', {
                url: '/services/audience-segmentation',
                title: 'Services - Audience Segmentation and Personalization',
                templateUrl: helper.basepath('services/audience-segmentation.html')
        })
        .state('app.campaign-managment', {
                url: '/services/campaign-managment',
                title: 'Services - Campaign Management',
                templateUrl: helper.basepath('services/campaign-managment.html')
        })
        .state('app.analytics', {
                url: '/services/analytics',
                title: 'Services - Analytics',
                templateUrl: helper.basepath('services/analytics.html')
        })
        .state('app.seo', {
                url: '/services/seo',
                title: 'Services - SEO',
                templateUrl: helper.basepath('services/seo.html')
        })
        .state('app.social-media', {
                url: '/services/social-media',
                title: 'Services - Social Media',
                templateUrl: helper.basepath('services/social-media.html')
        })
        // -----------------------------------
        // Portfolio
        // -----------------------------------
        .state('app.portfolio', {
                url: '/portfolio',
                title: 'Portfolio',
                templateUrl: helper.basepath('portfolio.html')
        })
        .state('app.gears-of-war', {
                url: '/portfolio/gears-of-war',
                title: 'Portfolio - Gears of War',
                templateUrl: helper.basepath('portfolio/gears-of-war.html')
        })
        // -----------------------------------
        // Resources
        // -----------------------------------
        .state('app.resources', {
                url: '/resources',
                title: 'Resources',
                templateUrl: helper.basepath('resources.html')
        })
        .state('app.post', {
                url: '/resources/post/:id',
                title: 'Post',
                templateUrl: helper.basepath('resources/post.html')
        })
        .state('app.resource', {
                url: '/resources/resource/:id',
                title: 'Resource',
                templateUrl: helper.basepath('resources/resource.html')
        })
        .state('app.resource-download', {
                url: '/resources/resource/:id/download',
                title: 'Resources - Download',
                templateUrl: helper.basepath('resources/resource-download.html')
        })
        .state('app.resource-download.form', {
                url: '/form',
                title: 'Resources - Download',
                templateUrl: helper.basepath('resources/download-form.html')
        })
        .state('app.resource-download.thanks', {
                url: '/confirm',
                title: 'Resources - Download',
                templateUrl: helper.basepath('resources/download-thanks.html')
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
