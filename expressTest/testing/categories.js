'use strict'
//const chai = require('chai');
const request = require('supertest');
//const express = require('express');
const app = require('../app');


describe('GET /categories', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

describe('GET /categories/:id/products', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/categories/2/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});