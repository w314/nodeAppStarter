import express from 'express';

// middleware that logs the endpoint to the console when visited
const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const url = req.baseUrl;
  console.log(`${url} was visited`);
  next();
};

export default logger;
