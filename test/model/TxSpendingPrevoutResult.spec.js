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
    describe('TxSpendingPrevoutResult', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.TxSpendingPrevoutResult();
      });

      it('should create an instance of TxSpendingPrevoutResult', function() {
        // TODO: update the code to test TxSpendingPrevoutResult
        expect(instance).to.be.a(SatstreamJavascriptSdk.TxSpendingPrevoutResult);
      });

      it('should have the property spendingtxid (base name: "spendingtxid")', function() {
        // TODO: update the code to test the property spendingtxid
        expect(instance).to.have.property('spendingtxid');
        // expect(instance.spendingtxid).to.be(expectedValueLiteral);
      });

      it('should have the property spent (base name: "spent")', function() {
        // TODO: update the code to test the property spent
        expect(instance).to.have.property('spent');
        // expect(instance.spent).to.be(expectedValueLiteral);
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
