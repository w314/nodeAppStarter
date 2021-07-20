import express from 'express';
//import your routes
import sampleRoute from './api/sampleRoute';

//create router object
const routes = express.Router();

//set up router object to use your routes
routes.use('/sampleRoute', sampleRoute);

//export router object
export default routes;
