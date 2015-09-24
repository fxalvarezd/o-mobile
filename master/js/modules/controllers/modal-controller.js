/**=========================================================
 * Module: services-controller.js
 * Generic Modal Controller
 =========================================================*/

App.controller('modalController', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
        "use strict";

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
]);