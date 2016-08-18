jsonchen.controller('BookmarksController', ['$scope',
    function ($scope) {
        $scope.bookmarks = [
            "http://dev.conjuguemos.com/activities/spanish/verb/1",
            "http://stanford.edu/class/archive/cs/cs106b/cs106b.1142/indent.shtml",
            "http://allrecipes.com/recipe/banana-banana-bread/detail.aspx"
        ];
        function getDomain(url) {
            let match = url.match(/:\/\/(.[^/]+)/)[1];
            console.log(match);
            return match;
        };

        //warn before use that another tab will be opened
        $scope.selectRandomLink = function() {
            console.log($scope.bookmarks.length);
            let index = Math.floor(Math.random() * $scope.bookmarks.length);
            console.log("index: ", index);
            console.log("link: ", $scope.bookmarks[index]);
            window.open($scope.bookmarks[index]);
        };

        $scope.test = function() {
            $("a[href^='http']").each(function() {
                console.log("here!");
                $(this).css({
                    background: "url(http://favicon.yandex.net/favicon/" + getDomain(this.href) +
                    ") left center no-repeat",
                    "padding-left": "20px"
                });
            });
        }

    }]);

jsonchen.directive("testDirective", function() {
        return {
            restrict : "EA",
            template : "<h1>Made by a directive!</h1>"
        };
    });
