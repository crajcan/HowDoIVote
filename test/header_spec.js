const header = require('../app/components/body/header/header.js');
const mocha = require('mocha') 
const expect = require('chai').expect

describe('header#render', () => {

  it('should return the header', () => {
    expect(header.render()).to.equal(`<header>How Do I Vote?</header>`); });
});
