(function () {
    /********************
     *   ROUTING        *
     ********************/
    var app = angular.module("DealerSocket", ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "index.html",
                controller: "MainController"
            })
            .when('/:category', {
                templateUrl: "category.html",
                controller: "CategoryController"
            });
    }]);


    /********************
     *   SERVICES       *
     ********************/


    /********************
     *   CONTROLLERS    *
     ********************/
    var MainController = function ($scope, $http) {
        // $http.get('./resources/json/layout.json').then(function (data) {
        //     $scope.menus = data.navbar;
        //
        // });
        $scope.title = "DealerSocket";

    };
    app.controller("MainController", MainController);

}());
/**
 * Created by Maciej on 7/16/2017.
 */
