angular.module('medoApp')
.controller('MainController', MainController);

MainController.$inject = ['$http'];

function MainController($http){
  var vm = this;
  vm.all = [];
  vm.date = new Date();
  vm.addStudent = addStudent;
  vm.newStudent = {};
  vm.getStudents = getStudents;
  vm.deleteStudent = deleteStudent;

  console.log(vm.date);


  function getStudents(){
    $http
      .get('api/students')
      .then(function(response){
        vm.all = response.data;
        console.log('All Students', response.data);
    });
  }

  function addStudent(){
    console.log('Adding Student!', vm.newStudent);
    $http
      .post('api/students', vm.newStudent)
      .then(function(response){
        console.log('ADD STUDENT',response)
        getStudents();
    });
    vm.newStudent = {};
  }

  function deleteStudent(student){
    $http
      .delete('api/students/' + student._id)
      .then(function(response){
        var index = vm.all.indexOf(student);
        vm.all.splice(index, 1);
      });
  }

  getStudents();

}
