jsonchen.controller('BookmarksController', ['$scope', '$timeout',
    function ($scope, $timeout) {
        $scope.bookmarks = {
            "http://dev.conjuguemos.com/activities/spanish/verb/1" : "Conjuguemos",
            "http://stanford.edu/class/archive/cs/cs106b/cs106b.1142/indent.shtml" : "Stanford auto indent",
            "http://allrecipes.com/recipe/banana-banana-bread/detail.aspx" : "Banana bread",  

            "http://dev.onjuguemos.com/activities/spanish/verb/1" : "Conjuguemos",
            "http://stanfor.edu/class/archive/cs/cs106b/cs106b.1142/indent.shtml" : "Stanford auto indent",
            "http://allrecipes.com/recie/banana-banana-bread/detail.aspx" : "Banana bread",  
            "http://dev.conjuguemos.co/activities/spanish/verb/1" : "Conjuguemos",
            "http://stanford.edu/lass/archive/cs/cs106b/cs106b.1142/indent.shtml" : "Stanford auto indent",
            "http://allrecipes.com/recip/banana-banana-bread/detail.aspx" : "Banana bread",  
            "http://dev.conjuguemos.com/actiities/spanish/verb/1" : "Conjuguemos",
            "http://stanford.edu/class/archive/s/cs106b/cs106b.1142/indent.shtml" : "Stanford auto indent",
            "http://allrecipes.com/recipe/banana-anana-bread/detail.aspx" : "Banana bread",  
        };
        $scope.bmLinks = Object.keys($scope.bookmarks);
        $scope.bookmarksOne = [];
        $scope.bookmarksTwo = [];
        $scope.showBookmark = [];

        for (let i = 0; i < $scope.bmLinks.length; i++) { 
            let bm = $scope.bmLinks[i];
            let des = $scope.bookmarks[bm];
            (i % 2 === 0) ? $scope.bookmarksOne.push(bm) : $scope.bookmarksTwo.push(bm); 
            $scope.showBookmark[bm] = true;
        };

        function getDomain(url) {
            let match = url.match(/:\/\/(.[^/]+)/)[1];
            console.log(match);
            return match;
        };

        $scope.loading = false;
        //warn before use that another tab will be opened
        $scope.selectRandomLink = function() {
            $scope.loading = true;
            console.log($scope.bmLinks.length);
            let index = Math.floor(Math.random() * $scope.bmLinks.length);
            console.log("index: ", index);
            console.log("link: ", $scope.bmLinks[index]);
            $timeout(function () { //in order for button click to look smooth
                $scope.loading = false;
                window.open($scope.bmLinks[index]);
            }, 1000);
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
