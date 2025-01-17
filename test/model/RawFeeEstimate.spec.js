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
 * Swagger Codegen version: 3.0.66
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
    factory(root.expect, root.SatstreamJavascriptSdk);
  }
}(this, function(expect, SatstreamJavascriptSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('RawFeeEstimate', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.RawFeeEstimate();
      });

      it('should create an instance of RawFeeEstimate', function() {
        // TODO: update the code to test RawFeeEstimate
        expect(instance).to.be.a(SatstreamJavascriptSdk.RawFeeEstimate);
      });

      it('should have the property _long (base name: "long")', function() {
        // TODO: update the code to test the property _long
        expect(instance).to.have.property('_long');
        // expect(instance._long).to.be(expectedValueLiteral);
      });

      it('should have the property medium (base name: "medium")', function() {
        // TODO: update the code to test the property medium
        expect(instance).to.have.property('medium');
        // expect(instance.medium).to.be(expectedValueLiteral);
      });

      it('should have the property _short (base name: "short")', function() {
        // TODO: update the code to test the property _short
        expect(instance).to.have.property('_short');
        // expect(instance._short).to.be(expectedValueLiteral);
      });

    });
  });

}));
