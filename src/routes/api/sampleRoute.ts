import express from 'express';
import logger from '../utilities/logger';

//create router object
const sampleRoute = express.Router();

//set up route
sampleRoute.get('/', logger, (req, res) => {
  res.send('Application starting page');
});

//export route
export default sampleRoute;
