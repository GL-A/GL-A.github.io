angular.module('app', ['ui.router']).config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    templateUrl: './views/home/home.html',
    controller: 'homeCtrl',
    url: '/:id'
  })
  .state('details', {
    templateUrl: '/views/details/details.html',
    controller: 'detailsCtrl',
    url: '/details/:id'
  })
  .state('weather', {
    templateUrl: '/views/weather/weather.html',
    url: '/weather',
    controller: 'weatherCtrl'
  })
})
