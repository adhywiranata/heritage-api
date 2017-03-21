process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');
const Place = require('../server/models/place.model');

const should = chai.should();

chai.use(chaiHttp);

// describe('Places', () => {
//   beforeEach(done => {
//     Place.remove({}, err => {
//       done();
//     });
//   });
// });

describe('/GET Places', () => {
  it('it should GET all places', (done) => {
    chai.request(server)
      .get('/api/places')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(8);
        done();
      });
  });
});
