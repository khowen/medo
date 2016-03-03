'use strict';

angular.module('medoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('index', {
        url: '/students',
        templateUrl: 'app/main/list.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('new', {
        url: '/new',
        templateUrl: 'app/main/new.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('show', {
        url: '/students/:id',
        templateUrl: 'app/main/show.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
