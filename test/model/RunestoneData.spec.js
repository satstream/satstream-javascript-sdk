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
    describe('RunestoneData', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.RunestoneData();
      });

      it('should create an instance of RunestoneData', function() {
        // TODO: update the code to test RunestoneData
        expect(instance).to.be.a(SatstreamJavascriptSdk.RunestoneData);
      });

      it('should have the property edicts (base name: "edicts")', function() {
        // TODO: update the code to test the property edicts
        expect(instance).to.have.property('edicts');
        // expect(instance.edicts).to.be(expectedValueLiteral);
      });

      it('should have the property etching (base name: "etching")', function() {
        // TODO: update the code to test the property etching
        expect(instance).to.have.property('etching');
        // expect(instance.etching).to.be(expectedValueLiteral);
      });

      it('should have the property mint (base name: "mint")', function() {
        // TODO: update the code to test the property mint
        expect(instance).to.have.property('mint');
        // expect(instance.mint).to.be(expectedValueLiteral);
      });

      it('should have the property pointer (base name: "pointer")', function() {
        // TODO: update the code to test the property pointer
        expect(instance).to.have.property('pointer');
        // expect(instance.pointer).to.be(expectedValueLiteral);
      });

    });
  });

}));
