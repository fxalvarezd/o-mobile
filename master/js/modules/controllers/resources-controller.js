/**=========================================================
 * Module: resources-controller.js
 =========================================================*/

App.controller('resourcesController', ['$scope',
    function($scope) {
        "use strict";

        $scope.page = {
            search: false
        };

        $scope.toggleSearch = function () {
            $scope.page.search = !$scope.page.search;
        };
    }
]);