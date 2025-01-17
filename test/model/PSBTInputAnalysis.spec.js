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
    describe('PSBTInputAnalysis', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.PSBTInputAnalysis();
      });

      it('should create an instance of PSBTInputAnalysis', function() {
        // TODO: update the code to test PSBTInputAnalysis
        expect(instance).to.be.a(SatstreamJavascriptSdk.PSBTInputAnalysis);
      });

      it('should have the property hasUtxo (base name: "has_utxo")', function() {
        // TODO: update the code to test the property hasUtxo
        expect(instance).to.have.property('hasUtxo');
        // expect(instance.hasUtxo).to.be(expectedValueLiteral);
      });

      it('should have the property isFinal (base name: "is_final")', function() {
        // TODO: update the code to test the property isFinal
        expect(instance).to.have.property('isFinal');
        // expect(instance.isFinal).to.be(expectedValueLiteral);
      });

      it('should have the property missing (base name: "missing")', function() {
        // TODO: update the code to test the property missing
        expect(instance).to.have.property('missing');
        // expect(instance.missing).to.be(expectedValueLiteral);
      });

      it('should have the property next (base name: "next")', function() {
        // TODO: update the code to test the property next
        expect(instance).to.have.property('next');
        // expect(instance.next).to.be(expectedValueLiteral);
      });

    });
  });

}));
