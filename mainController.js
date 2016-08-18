var jsonchen = angular.module('jsonchen', ['ngRoute', 'ngMaterial', 'duScroll'])

jsonchen.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/aboutme', {
                templateUrl: 'components/aboutme/aboutme.html',
                controller: 'AboutMeController'
            }).
            when('/hobbies', {
                templateUrl: 'components/hobbies/hobbies.html',
                controller: 'HobbiesController'
            }).
            when('/singlePage', {
                templateUrl: 'components/singlePage/singlePage.html',
                controller: 'SinglePageController'
            }).
            when('/d3test', {
                templateUrl: 'components/d3_test/d3_test.html',
                controller: ''
            }).
            when('/bookmarks', {
                templateUrl: 'components/bookmarks/bookmarks.html',
                controller: 'BookmarksController'
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
