var multipleStyles = require('../')
var chai = require('chai')
var expect = chai.expect

describe('#multipleStyles', function () {
  it('should return reference in array as number', function () {
    expect(multipleStyles(13)).to.eql([13])
  })

  it('should return style reference as array if two options', () => {
    expect(multipleStyles(13, 14)).to.eql([13, 14])
  })

  it('should return array with reference if condition are met', () => {
    expect(multipleStyles({ '13': true })).to.eql([13])
  })

  it('should not return array with reference if condition are not met', () => {
    expect(multipleStyles({ '13': false })).to.eql([])
  })

  it('should return both style references', () => {
    expect(multipleStyles(12, { '13': true })).to.eql([12, 13])
  })

  it('should return first style references', () => {
    expect(multipleStyles(12, { '13': false })).to.eql([12])
  })
})
