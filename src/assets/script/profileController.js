'use strict';
var app = angular.module('profileApp.profileController', []);

app.controller('ProfileController', function (
    $scope,
    $rootScope,
    $route,
    $log,
    ProfileServices
) {
    var professionalDetail = ProfileServices.getProfessionalDetail(),
        personalDetail = ProfileServices.getPersonalDetail();

    $rootScope.styleType = $route.current.styleType;
    $scope.professional = {};
    $scope.personal = {};

    //Default menu button selected to true
    $scope.selected = true;

    // Load professional JSON data
    professionalDetail.get(function (jsonData) {
        $scope.professional = jsonData;
    });

    // Load personal JSON data
    personalDetail.get(function (jsonData) {
        $scope.personal = jsonData;
    });

    // Change user button selection
    $scope.getDetail = function (event) {
        $scope.selected = !$scope.selected;
    };
});