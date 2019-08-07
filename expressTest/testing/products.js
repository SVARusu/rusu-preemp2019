'use strict'
//const chai = require('chai');
const request = require('supertest');
//const express = require('express');
const app = require('../app');


describe('GET /products', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

describe('GET /products/:id', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/products/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /products/?category={id}manufacturer={id}', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/products/?category=2&manufacturer=2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

