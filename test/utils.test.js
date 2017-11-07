const { describe, it } = require('mocha')
const { expect } = require('chai')
const omit = require('../utils/utils')

describe('Utility functions', () => {
  describe('omit()', () => {
    it('should return an object omitting the password property', () => {
      const fake = {
        username: 'QuickRacer123',
        password: 'ilovetorace',
        birthdate: '1/24/1992',
        email: 'bigracer123@gmail.com',
        confirmEmail: 'bigracer123@gmail.com'
      }
      const result = omit(fake, ['password'])
      expect(result).to.not.have.property('password')
    })
  })
})
