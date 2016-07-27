'use strict';

jsonchen.controller('AboutMeController', ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
        $rootScope.aboutMe = "about me";

        $scope.goToHobbies = function() {
            $location.path('/hobbies');

        }
    }]);
