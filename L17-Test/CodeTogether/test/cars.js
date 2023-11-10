import chai from 'chai'
import supertest from 'supertest'
const assert = chai.assert

import express from '../app.js'

describe('Skal kunne teste alle get endpoints', () => {
    it('Should return html', () => {
        supertest(express.app).get('/cars').expect(200);
    })
})