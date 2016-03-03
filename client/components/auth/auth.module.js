'use strict';

angular.module('medoApp.auth', [
  'medoApp.constants',
  'medoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
