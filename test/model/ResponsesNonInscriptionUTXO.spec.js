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
    describe('ResponsesNonInscriptionUTXO', function() {
      beforeEach(function() {
        instance = new SatstreamApi.ResponsesNonInscriptionUTXO();
      });

      it('should create an instance of ResponsesNonInscriptionUTXO', function() {
        // TODO: update the code to test ResponsesNonInscriptionUTXO
        expect(instance).to.be.a(SatstreamApi.ResponsesNonInscriptionUTXO);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property codeType (base name: "codeType")', function() {
        // TODO: update the code to test the property codeType
        expect(instance).to.have.property('codeType');
        // expect(instance.codeType).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property idx (base name: "idx")', function() {
        // TODO: update the code to test the property idx
        expect(instance).to.have.property('idx');
        // expect(instance.idx).to.be(expectedValueLiteral);
      });

      it('should have the property isOpInRBF (base name: "isOpInRBF")', function() {
        // TODO: update the code to test the property isOpInRBF
        expect(instance).to.have.property('isOpInRBF');
        // expect(instance.isOpInRBF).to.be(expectedValueLiteral);
      });

      it('should have the property isSpent (base name: "isSpent")', function() {
        // TODO: update the code to test the property isSpent
        expect(instance).to.have.property('isSpent');
        // expect(instance.isSpent).to.be(expectedValueLiteral);
      });

      it('should have the property satoshi (base name: "satoshi")', function() {
        // TODO: update the code to test the property satoshi
        expect(instance).to.have.property('satoshi');
        // expect(instance.satoshi).to.be(expectedValueLiteral);
      });

      it('should have the property scriptPk (base name: "scriptPk")', function() {
        // TODO: update the code to test the property scriptPk
        expect(instance).to.have.property('scriptPk');
        // expect(instance.scriptPk).to.be(expectedValueLiteral);
      });

      it('should have the property scriptType (base name: "scriptType")', function() {
        // TODO: update the code to test the property scriptType
        expect(instance).to.have.property('scriptType');
        // expect(instance.scriptType).to.be(expectedValueLiteral);
      });

      it('should have the property txid (base name: "txid")', function() {
        // TODO: update the code to test the property txid
        expect(instance).to.have.property('txid');
        // expect(instance.txid).to.be(expectedValueLiteral);
      });

      it('should have the property vout (base name: "vout")', function() {
        // TODO: update the code to test the property vout
        expect(instance).to.have.property('vout');
        // expect(instance.vout).to.be(expectedValueLiteral);
      });

    });
  });

}));
