/**=========================================================
 * Module: main.js
 * Main Application Controller
 =========================================================*/

App.controller('AppController',
    ['$rootScope', '$scope', '$state', '$window', '$timeout', 'cfpLoadingBar', 'slidePush',
    function($rootScope, $scope, $state, $window, $timeout, cfpLoadingBar, slidePush) {
        "use strict";

        // Loading bar transition
        // ----------------------------------- 
        var thBar;
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                if($('.wrapper > section').length) { // check if bar container exists
                    thBar = $timeout(function() {
                        cfpLoadingBar.start();
                    }, 0); // sets a latency Threshold
                }
        });
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            var sidebar = $(document).find("#sidebar"),
                btn = sidebar.find(".spmenu-button");

                event.targetScope.$watch("$viewContentLoaded", function () {
                    $timeout.cancel(thBar);
                    cfpLoadingBar.complete();
                });
                slidePush.pushForceClose(sidebar, btn);
        });

        // Hook not found
        $rootScope.$on('$stateNotFound',
            function(event, unfoundState, fromState, fromParams) {
                    console.log(unfoundState.to); // "lazy.state"
                    console.log(unfoundState.toParams); // {a:1, b:2}
                    console.log(unfoundState.options); // {inherit:false} + default options
            });

        // Hook error
        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error){
                console.log(error);
            });
        
        // Hook success
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                // display new view from top
                $window.scrollTo(0, 0);
                // Save the route title
                $rootScope.currTitle = $state.current.title;
            }
        );

        $rootScope.currTitle = $state.current.title;
        $rootScope.pageTitle = function() {
            var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
            document.title = title;
            return title; 
        };

        // cancel click event easily
        $rootScope.cancel = function($event) {
            $event.stopPropagation();
        };
}]);
