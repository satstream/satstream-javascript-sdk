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
    describe('TransactionConvertToPSBTRequest', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.TransactionConvertToPSBTRequest();
      });

      it('should create an instance of TransactionConvertToPSBTRequest', function() {
        // TODO: update the code to test TransactionConvertToPSBTRequest
        expect(instance).to.be.a(SatstreamJavascriptSdk.TransactionConvertToPSBTRequest);
      });

      it('should have the property hexstring (base name: "hexstring")', function() {
        // TODO: update the code to test the property hexstring
        expect(instance).to.have.property('hexstring');
        // expect(instance.hexstring).to.be(expectedValueLiteral);
      });

      it('should have the property isWitness (base name: "is_witness")', function() {
        // TODO: update the code to test the property isWitness
        expect(instance).to.have.property('isWitness');
        // expect(instance.isWitness).to.be(expectedValueLiteral);
      });

      it('should have the property permitSigdata (base name: "permit_sigdata")', function() {
        // TODO: update the code to test the property permitSigdata
        expect(instance).to.have.property('permitSigdata');
        // expect(instance.permitSigdata).to.be(expectedValueLiteral);
      });

    });
  });

}));
