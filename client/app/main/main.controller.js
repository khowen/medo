'use strict';

(function() {

class MainController {

  // constructor($http) {
  //   this.$http = $http;
  //   this.awesomeThings = [];

  //   $http.get('/api/things').then(response => {
  //     this.awesomeThings = response.data;
  //   });
  // }

  // addThing() {
  //   if (this.newThing) {
  //     this.$http.post('/api/things', { name: this.newThing });
  //     this.newThing = '';
  //   }
  // }

  // deleteThing(thing) {
  //   this.$http.delete('/api/things/' + thing._id);
  // }
}

angular.module('medoApp')
  .controller('MainController', MainController);

StudentsController.$inject = ['$http'];

function StudentsController($http){
  var self = this;
  self.all = [];
  self.addStudent= addStudent;
  self.newStudent= {};
  self.getStudentss = getStudents;
  self.deleteStudent= deleteStudent;

  getStudents();
  function getStudents(){
    $http
      .get('http://localhost:3000/students')
      .then(function(response){
        self.all = response.data.students;
    });
  }

  function addStudent(){
    $http
      .post('http://localhost:3000/students', self.newStudent)
      .then(function(response){
        getStudents();
    });
    self.newStudent= {};
  }

  function deleteStudent(student){
    $http
      .delete("http://localhost:3000/students/" + student._id)
      .then(function(response){
        var index = self.all.indexOf(student);
        self.all.splice(index, 1);
      });
  }

}

})();
