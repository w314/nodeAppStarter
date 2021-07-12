import express from 'express'

const app = express();
const port = 3000; //can be any number > 1024

// define route handler for the default home page
app.get('/api', (req, res) => {
    res.send('server is working');
});

// start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});