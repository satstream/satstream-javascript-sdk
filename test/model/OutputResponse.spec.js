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
    describe('OutputResponse', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.OutputResponse();
      });

      it('should create an instance of OutputResponse', function() {
        // TODO: update the code to test OutputResponse
        expect(instance).to.be.a(SatstreamJavascriptSdk.OutputResponse);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property indexed (base name: "indexed")', function() {
        // TODO: update the code to test the property indexed
        expect(instance).to.have.property('indexed');
        // expect(instance.indexed).to.be(expectedValueLiteral);
      });

      it('should have the property inscriptions (base name: "inscriptions")', function() {
        // TODO: update the code to test the property inscriptions
        expect(instance).to.have.property('inscriptions');
        // expect(instance.inscriptions).to.be(expectedValueLiteral);
      });

      it('should have the property outpoint (base name: "outpoint")', function() {
        // TODO: update the code to test the property outpoint
        expect(instance).to.have.property('outpoint');
        // expect(instance.outpoint).to.be(expectedValueLiteral);
      });

      it('should have the property runes (base name: "runes")', function() {
        // TODO: update the code to test the property runes
        expect(instance).to.have.property('runes');
        // expect(instance.runes).to.be(expectedValueLiteral);
      });

      it('should have the property satRanges (base name: "sat_ranges")', function() {
        // TODO: update the code to test the property satRanges
        expect(instance).to.have.property('satRanges');
        // expect(instance.satRanges).to.be(expectedValueLiteral);
      });

      it('should have the property scriptPubkey (base name: "script_pubkey")', function() {
        // TODO: update the code to test the property scriptPubkey
        expect(instance).to.have.property('scriptPubkey');
        // expect(instance.scriptPubkey).to.be(expectedValueLiteral);
      });

      it('should have the property spent (base name: "spent")', function() {
        // TODO: update the code to test the property spent
        expect(instance).to.have.property('spent');
        // expect(instance.spent).to.be(expectedValueLiteral);
      });

      it('should have the property transaction (base name: "transaction")', function() {
        // TODO: update the code to test the property transaction
        expect(instance).to.have.property('transaction');
        // expect(instance.transaction).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
