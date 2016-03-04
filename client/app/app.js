'use strict';

angular.module('medoApp', [
  'medoApp.auth',
  'medoApp.admin',
  'medoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngAnimate'
])
  // .config(function($urlRouterProvider, $locationProvider) {
  //   $urlRouterProvider
  //     .otherwise('/');

  //   $locationProvider.html5Mode(true);
  // });

// angular
//   .module('medoApp', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider){
    // $urlRouterProvider
    //   .otherwise('/');

    // $locationProvider.html5Mode(true);
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .state('index', {
        url: '/students',
        templateUrl: 'app/main/list.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .state('new', {
        url: '/students/new',
        templateUrl: 'app/main/new.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .state('edit', {
        url: '/students/edit',
        templateUrl: 'app/main/edit.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .state('show', {
        url: '/students/:id',
        templateUrl: 'app/main/show.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      });
}
