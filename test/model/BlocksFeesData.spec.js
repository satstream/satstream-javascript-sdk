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
    describe('BlocksFeesData', function() {
      beforeEach(function() {
        instance = new SatstreamApi.BlocksFeesData();
      });

      it('should create an instance of BlocksFeesData', function() {
        // TODO: update the code to test BlocksFeesData
        expect(instance).to.be.a(SatstreamApi.BlocksFeesData);
      });

      it('should have the property confirmationBlocks (base name: "confirmation_blocks")', function() {
        // TODO: update the code to test the property confirmationBlocks
        expect(instance).to.have.property('confirmationBlocks');
        // expect(instance.confirmationBlocks).to.be(expectedValueLiteral);
      });

      it('should have the property feeRateInBtc (base name: "fee_rate_in_btc")', function() {
        // TODO: update the code to test the property feeRateInBtc
        expect(instance).to.have.property('feeRateInBtc');
        // expect(instance.feeRateInBtc).to.be(expectedValueLiteral);
      });

    });
  });

}));
