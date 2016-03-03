'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var controller = require('./student.controller');
import * as auth from '../../auth/auth.service';

// router.route('/students')

//   //GET all students
//   .get(controller.getAll)

//   //POST a new student
//   .post(controller.createStudent);


// router.route('/students/:id')

//   // GET return specific student
//   .get(controller.getStudent)

//   // PATCH update existing students
//   .patch(controller.updateStudent)

//   // DELETE remove specific criminals from DB
//   .delete(controller.removeStudent);

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
