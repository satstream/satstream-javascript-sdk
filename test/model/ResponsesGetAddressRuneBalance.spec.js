/*
 * Satstream API
 * Satstream API
 *
 * OpenAPI spec version: 1.0
 * Contact: team@satstream.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SatstreamApi);
  }
}(this, function(expect, SatstreamApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ResponsesGetAddressRuneBalance', function() {
      beforeEach(function() {
        instance = new SatstreamApi.ResponsesGetAddressRuneBalance();
      });

      it('should create an instance of ResponsesGetAddressRuneBalance', function() {
        // TODO: update the code to test ResponsesGetAddressRuneBalance
        expect(instance).to.be.a(SatstreamApi.ResponsesGetAddressRuneBalance);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property divisibility (base name: "divisibility")', function() {
        // TODO: update the code to test the property divisibility
        expect(instance).to.have.property('divisibility');
        // expect(instance.divisibility).to.be(expectedValueLiteral);
      });

      it('should have the property rune (base name: "rune")', function() {
        // TODO: update the code to test the property rune
        expect(instance).to.have.property('rune');
        // expect(instance.rune).to.be(expectedValueLiteral);
      });

      it('should have the property runeid (base name: "runeid")', function() {
        // TODO: update the code to test the property runeid
        expect(instance).to.have.property('runeid');
        // expect(instance.runeid).to.be(expectedValueLiteral);
      });

      it('should have the property spacedAmount (base name: "spacedAmount")', function() {
        // TODO: update the code to test the property spacedAmount
        expect(instance).to.have.property('spacedAmount');
        // expect(instance.spacedAmount).to.be(expectedValueLiteral);
      });

      it('should have the property spacedRune (base name: "spacedRune")', function() {
        // TODO: update the code to test the property spacedRune
        expect(instance).to.have.property('spacedRune');
        // expect(instance.spacedRune).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

    });
  });

}));
