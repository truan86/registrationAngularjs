'use strict';

var formApp = angular.module('formApp', []);

formApp.controller('FormCntr', function ($scope) {
    $scope.loginPattern = /^[a-z0-9_-]{3,15}$/;
    $scope.emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    $scope.passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
    $scope.tellPattern = /^\d{3}-\d{2}-\d{2}$/;

});
