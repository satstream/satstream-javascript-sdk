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
 * Swagger Codegen version: 3.0.64
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
    describe('Transaction', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.Transaction();
      });

      it('should create an instance of Transaction', function() {
        // TODO: update the code to test Transaction
        expect(instance).to.be.a(SatstreamJavascriptSdk.Transaction);
      });

      it('should have the property input (base name: "input")', function() {
        // TODO: update the code to test the property input
        expect(instance).to.have.property('input');
        // expect(instance.input).to.be(expectedValueLiteral);
      });

      it('should have the property lockTime (base name: "lock_time")', function() {
        // TODO: update the code to test the property lockTime
        expect(instance).to.have.property('lockTime');
        // expect(instance.lockTime).to.be(expectedValueLiteral);
      });

      it('should have the property output (base name: "output")', function() {
        // TODO: update the code to test the property output
        expect(instance).to.have.property('output');
        // expect(instance.output).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

    });
  });

}));