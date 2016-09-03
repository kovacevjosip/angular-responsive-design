'use strict';
var app = angular.module('profileApp', [
    'ngRoute',
    'ngResource',
    'profileApp.profileController',
    'profileApp.profileServices',
    'profileApp.deviceTypeProvider'
]);

app.config(function (
    $routeProvider,
    deviceTypeProvider
) {
    var deviceTypeProvider = deviceTypeProvider.$get(),
        deviceType = deviceTypeProvider.getDeviceType();

    $routeProvider.when('/', {
        templateUrl: 'view/' + deviceType + '/profileTemplate.html',
        controller: 'ProfileController',
        styleType: deviceType
    });
});