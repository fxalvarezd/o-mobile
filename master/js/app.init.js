if (typeof $ === 'undefined') { throw new Error('This application\'s JavaScript requires jQuery'); }

// APP START
// ----------------------------------- 

var App = angular.module('oshyn', [
        'ngRoute',
        'ngAnimate',
        'ngStorage',
        'ui.router',
        'oc.lazyLoad',
        'cfp.loadingBar',
        'ngSanitize',
        'ngResource',
        'ui.utils'
    ]);

App.run(["$rootScope", "$state", "$stateParams",  '$window', '$templateCache', function ($rootScope, $state, $stateParams, $window, $templateCache) {
    // Set reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // Scope Globals
    // ----------------------------------- 
    $rootScope.app = {
        name: 'Oshyn',
        description: '',
        year: ((new Date()).getFullYear()),
        viewAnimation: 'ng-fadeInUp'
    };
}]);
