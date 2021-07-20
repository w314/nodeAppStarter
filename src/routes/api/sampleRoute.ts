import express from 'express';

//create router object
const sampleRoute = express.Router();

//set up route
sampleRoute.get('/', (req, res) => {
  res.send('Application starting page');
});

//export route
export default sampleRoute;
