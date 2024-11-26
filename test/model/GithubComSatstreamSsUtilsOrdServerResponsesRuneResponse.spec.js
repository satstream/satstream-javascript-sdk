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
    describe('GithubComSatstreamSsUtilsOrdServerResponsesRuneResponse', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.GithubComSatstreamSsUtilsOrdServerResponsesRuneResponse();
      });

      it('should create an instance of GithubComSatstreamSsUtilsOrdServerResponsesRuneResponse', function() {
        // TODO: update the code to test GithubComSatstreamSsUtilsOrdServerResponsesRuneResponse
        expect(instance).to.be.a(SatstreamJavascriptSdk.GithubComSatstreamSsUtilsOrdServerResponsesRuneResponse);
      });

      it('should have the property entry (base name: "entry")', function() {
        // TODO: update the code to test the property entry
        expect(instance).to.have.property('entry');
        // expect(instance.entry).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property mintable (base name: "mintable")', function() {
        // TODO: update the code to test the property mintable
        expect(instance).to.have.property('mintable');
        // expect(instance.mintable).to.be(expectedValueLiteral);
      });

      it('should have the property parent (base name: "parent")', function() {
        // TODO: update the code to test the property parent
        expect(instance).to.have.property('parent');
        // expect(instance.parent).to.be(expectedValueLiteral);
      });

    });
  });

}));
