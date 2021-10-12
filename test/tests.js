const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { app } = require("../src/index");


const should = chai.should();
chai.use(chaiHttp);


const expect = chai.expect;

describe('GET /api/v1/users', () => {
    it('should return all users', function(done){
        chai.request(app)
        .get('/api/v1/users')
        .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json; 
            res.body.should.be.a('array');
            res.body[0].should.have.property('name');
            res.body[0].name.should.equal('user1');
            done();
        });
    })
})

describe('GET /api/v1/user/:id', () => {
    it('should return user by id', function(done){
        chai.request(app)
        .get('/api/v1/user/15')
        .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json; 
            res.body[0].should.have.property('name');
            res.body[0].name.should.equal('Amit');
            done();
        });
    })
})

describe('POST /api/v1/user/:id', () => {
    it('should add an users', function(done){
        chai.request(app)
        .post('/api/v1/user')
        .send({
            name: 'test',
            email: 'test@gmail.com',
            birthdate: '2010-02-11'
        })
        .end(function(err, res) {
            res.should.have.status(201);
            done();
        });
    })
})

describe('PATCH /api/v1/user/:id', () => {
    it('should update an users', function(done){
        chai.request(app)
        .patch('/api/v1/user/16')
        .send({
            name: 'test134'
        })
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        });
    })
})


describe('DELETE /api/v1/user/:id', () => {
    it('should update an users', function(done){
        chai.request(app)
        .delete('/api/v1/user/12')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        });
    })
})
