"use strict";




angular.module("lab4", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
        .when("/user-profile", {
            template:`<user-profile></user-profile>`
        })
        .when("/edit-profile", {
            template: `<edit-profile></edit-profile>`
        })
        .otherwise({ redirectTo: "/user-profile"});
}]);