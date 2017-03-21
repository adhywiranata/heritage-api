process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');
const Place = require('../server/models/place.model');

const should = chai.should();

chai.use(chaiHttp);

describe('Places', () => {
  beforeEach((done) => {
    Place.removeAll({}, err => {
      console.log('done callback');
      done();
    });
  });

  describe('/GET Places', () => {
    it('it should GET all places', (done) => {
      chai.request(server)
        .get('/api/places')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('it should POST new place', (done) => {
      const newPlace = {
        id: 10,
        title: 'test',
        description: 'testdesc',
        photoUrl: 'asdasd',
        location: 'asdasd',
        user: 'iasd',
      };

      chai.request(server)
        .post('/api/places')
        .send(newPlace)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          chai.request(server)
            .get('/api/places')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
              res.body[0].title.should.be.eql(newPlace.title);
              done();
            });
        });
    });
  });
});
