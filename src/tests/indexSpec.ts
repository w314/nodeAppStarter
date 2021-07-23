// get supertest
// const request = require('supertest');
import { agent as request } from 'supertest';
import app from '../index';

//test api/sampleRoute endpoint
describe('GET api/sampleRoute', () => {
  it('responds with "Application starting page"', (done) => {
    request(app)
      .get('/api/sampleRoute')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((error: Error) => (error ? done.fail(error) : done()));
  });
});
