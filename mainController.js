var jsonchen = angular.module('jsonchen', ['ngRoute', 'ngMaterial', 'duScroll'])

jsonchen.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/aboutme', { //not home any more because
                templateUrl: 'components/aboutme/aboutme.html',
                controller: 'AboutMeController'
            }).
            when('/hobbies', { //not home any more because
                templateUrl: 'components/hobbies/hobbies.html',
                controller: 'HobbiesController'
            }).
            when('/singlePage', { //not home any more because
                templateUrl: 'components/singlePage/singlePage.html',
                controller: 'SinglePageController'
            }).
            when('/d3test', { //not home any more because
                templateUrl: 'components/d3_test/d3_test.html',
                controller: ''
            }).
            // when('/jsonform', {
            //     templateUrl: 'components/jsonform/jsonform.html',
            //     controller: 'FormController'
            // }).
            otherwise({
                redirectTo: '/singlePage'
            });
    }]);

jsonchen.controller('MainController', ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
        $scope.name = "Jason Chen";
        $scope.display = true;
        $scope.printFunction = function() {
            console.log("hello world!");
        };
        $scope.goTo = function(loc) {
            $location.path("/" + loc);
            console.log("going to " + loc);
        }
    }]);
