/**=========================================================
 * Directive: dir-modal.js
 =========================================================*/

App.directive('dirmodal', function($modal) {
    'use strict';

    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            /*Trigger Open*/
            element.on('click', function(){
                scope.open()
            });

            /*Open Function*/
            scope.open = function () {
                var modalInstance = $modal.open({
                    templateUrl: attrs.modalTemplate,
                    controller: "modalController"
                });
            };
        }
    }
});