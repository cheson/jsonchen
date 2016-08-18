'use strict';

jsonchen.controller('SinglePageController', ['$scope', '$rootScope', '$location', '$document',
    function ($scope, $rootScope, $location, $document) {
        $rootScope.aboutMe = "about me";
        $scope.goToHobbies = function() {
            $location.path('/hobbies');
        }

        $scope.smoothScrollTo = function(location) {
            console.log(location);
            var el = angular.element(document.getElementById(location));
            //parameters are target element, offset, time
            $document.scrollToElement(el, 50, 600);
        }

    }]);
