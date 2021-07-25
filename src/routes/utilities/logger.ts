import express from 'express'

const logger = (req: express.Request, res: express.Response, next: Function): void => {
	const url = req.baseUrl;
	console.log(`${url} was visited`);
	next();
}

export default logger