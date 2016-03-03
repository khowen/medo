'use strict';



// angular
//   .module('medoApp', ['ui.router'])
//   .config(MainRouter);

// function MainRouter($stateProvider, $urlRouterProvider){
//     $stateProvider
//       .state('main', {
//         url: '/',
//         templateUrl: 'app/main/main.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('index', {
//         url: '/students',
//         templateUrl: 'app/main/list.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('new', {
//         url: '/students/new',
//         templateUrl: 'app/main/new.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('about', {
//         url: '/about',
//         templateUrl: 'app/main/about.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('show', {
//         url: '/students/:id',
//         templateUrl: 'app/main/show.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       });
// }


// angular.module('medoApp')
//   .controller('MainController', MainController);

//   MainController.$inject = ['$http'];

//   function MainController($http){
//   var self = this;
//   self.all = [{name:'Sally'}, {name:'Timmy'}];
//   self.addStudent = addStudent;
//   self.newStudent = {};
//   self.getStudents = getStudents;
//   self.deleteStudent = deleteStudent;

//   function getStudents(){
//     $http
//       .get('http://localhost:9000/students')
//       .then(function(response){
//         self.all = response.data.students;
//     });
//   }

//   function addStudent(){
//     $http
//       .post('http://localhost:9000/students', self.newStudent)
//       .then(function(response){
//         getStudents();
//     });
//     self.newStudent = {};
//   }

//   function deleteStudent(student){
//     $http
//       .delete("http://localhost:9000/students/" + student._id)
//       .then(function(response){
//         var index = self.all.indexOf(student);
//         self.all.splice(index, 1);
//       });
//   }

//   getstudents();
// }

// angular.module('medoApp')
//   .config(function($stateProvider) {
//     $stateProvider
//       .state('main', {
//         url: '/',
//         templateUrl: 'app/main/main.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('index', {
//         url: '/students',
//         templateUrl: 'app/main/list.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('new', {
//         url: '/new',
//         templateUrl: 'app/main/new.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('about', {
//         url: '/about',
//         templateUrl: 'app/main/about.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       })
//       .state('show', {
//         url: '/students/:id',
//         templateUrl: 'app/main/show.html'
//         // controller: 'MainController',
//         // controllerAs: 'main'
//       });
//   });
