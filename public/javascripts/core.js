// initilze the entry of the application

var app = angular
                .module('webApp', ['ngRoute', 'slick'])
                .config(['$routeProvider', '$qProvider', '$locationProvider', function($routeProvider, $qProvider, $locationProvider) {
                  $routeProvider.
                  when('/', {
                    templateUrl: '../products_slideShow.html',
                  }).
                  when('/oneProduct/:index/', {
                    templateUrl: '../oneProduct.html',
                    controller: oneProductCtrl
                  }).
                  otherwise({
                    redirectTo: '/'
                  });
                  $locationProvider.
                  html5Mode(true);
                  $qProvider.
                  errorOnUnhandledRejections(false);
                }]);
