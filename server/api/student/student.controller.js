/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/students              ->  index
 * POST    /api/students              ->  create
 * GET     /api/students/:id          ->  show
 * PUT     /api/students/:id          ->  update
 * DELETE  /api/students/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';

// var Student = require('./student.model');

// // GET
// function getAll(request, response) {
//   Student.find(function(error, students) {
//     if(error) response.json({message: 'Could not find any student'});

//     response.json({students: students});
//   }).select('-__v');
// }

// // POST
// function createStudent(request, response) {
//   var student = new Student(request.body);
//   console.log('--------' + request.body);
//   student.save();
//   // student.save(function(error) {
//   //   if(error) response.json({messsage: 'Could not ceate student b/c:' + error});

//   //   response.json({student: student});
//   // });
// }

// // GET
// function getStudent(request, response) {
//   var id = request.params.id;

//   Student.findById({_id: id}, function(error, student) {
//     if(error) response.json({message: 'Could not find student b/c:' + error});

//     response.json({student: student});
//   }).select('-__v');
// }

// function updateStudent(request, response) {
//   var id = request.params.id;

//   Student.findById({_id: id}, function(error, student) {
//     if(error) response.json({message: 'Could not find student b/c:' + error});

//     if(request.body.name) student.name = request.body.name;
//     if(request.body.location) student.start = request.body.location;
//     if(request.body.status) student.end = request.body.status;

//     student.save(function(error) {
//       if(error) response.json({messsage: 'Could not update student b/c:' + error});

//       response.json({message: 'student successfully updated', student: student});
//     });
//   }).select('-__v');
// }

// function removeStudent(request, response) {
//   var id = request.params.id;

//   Student.remove({_id: id}, function(error) {
//     if(error) response.json({message: 'Could not delete student b/c:' + error});

//     response.json({message: 'Student successfully deleted'});
//   }).select('-__v');
// }

// module.exports = {
//   getAll: getAll,
//   createStudent: createStudent,
//   getStudent: getStudent,
//   updateStudent: updateStudent,
//   removeStudent: removeStudent
// }


import Student from './student.model';
//import Channel from '../channel/channel.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Students
export function index(req, res) {
  Student.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Student from the DB
export function show(req, res) {
  Student.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Student in the DB
export function create(req, res) {
  Student.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Student in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Student.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Student from the DB
export function destroy(req, res) {
  Student.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
