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
    describe('TransactionGetTxOutSetInfoRequest', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.TransactionGetTxOutSetInfoRequest();
      });

      it('should create an instance of TransactionGetTxOutSetInfoRequest', function() {
        // TODO: update the code to test TransactionGetTxOutSetInfoRequest
        expect(instance).to.be.a(SatstreamJavascriptSdk.TransactionGetTxOutSetInfoRequest);
      });

      it('should have the property hashOrHeight (base name: "hash_or_height")', function() {
        // TODO: update the code to test the property hashOrHeight
        expect(instance).to.have.property('hashOrHeight');
        // expect(instance.hashOrHeight).to.be(expectedValueLiteral);
      });

      it('should have the property hashType (base name: "hash_type")', function() {
        // TODO: update the code to test the property hashType
        expect(instance).to.have.property('hashType');
        // expect(instance.hashType).to.be(expectedValueLiteral);
      });

      it('should have the property useIndex (base name: "use_index")', function() {
        // TODO: update the code to test the property useIndex
        expect(instance).to.have.property('useIndex');
        // expect(instance.useIndex).to.be(expectedValueLiteral);
      });

    });
  });

}));
