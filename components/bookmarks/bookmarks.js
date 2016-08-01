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
    }

    $scope.test = function test() {
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
