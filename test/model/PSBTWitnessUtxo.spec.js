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
    describe('PSBTWitnessUtxo', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.PSBTWitnessUtxo();
      });

      it('should create an instance of PSBTWitnessUtxo', function() {
        // TODO: update the code to test PSBTWitnessUtxo
        expect(instance).to.be.a(SatstreamJavascriptSdk.PSBTWitnessUtxo);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property scriptPubKey (base name: "scriptPubKey")', function() {
        // TODO: update the code to test the property scriptPubKey
        expect(instance).to.have.property('scriptPubKey');
        // expect(instance.scriptPubKey).to.be(expectedValueLiteral);
      });

    });
  });

}));
