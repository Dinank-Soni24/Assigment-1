const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/',services.homeRoutes );

/**
 *  @description add course
 *  @method GET /add-course
 */
route.get('/add-course', services.add_course);

/**
 *  @description for update course
 *  @method GET /update-course
 */
route.get('/update-course', services.update_course);

//API
route.post('/api/course', controller.create);
route.get('/api/course', controller.find);
route.put('/api/course/:id', controller.update);
route.delete('/api/course/:id', controller.delete);

module.exports = route