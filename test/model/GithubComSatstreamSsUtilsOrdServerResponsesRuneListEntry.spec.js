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
    describe('GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry();
      });

      it('should create an instance of GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry', function() {
        // TODO: update the code to test GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry
        expect(instance).to.be.a(SatstreamJavascriptSdk.GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry);
      });

      it('should have the property block (base name: "block")', function() {
        // TODO: update the code to test the property block
        expect(instance).to.have.property('block');
        // expect(instance.block).to.be(expectedValueLiteral);
      });

      it('should have the property burned (base name: "burned")', function() {
        // TODO: update the code to test the property burned
        expect(instance).to.have.property('burned');
        // expect(instance.burned).to.be(expectedValueLiteral);
      });

      it('should have the property divisibility (base name: "divisibility")', function() {
        // TODO: update the code to test the property divisibility
        expect(instance).to.have.property('divisibility');
        // expect(instance.divisibility).to.be(expectedValueLiteral);
      });

      it('should have the property etching (base name: "etching")', function() {
        // TODO: update the code to test the property etching
        expect(instance).to.have.property('etching');
        // expect(instance.etching).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property mints (base name: "mints")', function() {
        // TODO: update the code to test the property mints
        expect(instance).to.have.property('mints');
        // expect(instance.mints).to.be(expectedValueLiteral);
      });

      it('should have the property _number (base name: "number")', function() {
        // TODO: update the code to test the property _number
        expect(instance).to.have.property('_number');
        // expect(instance._number).to.be(expectedValueLiteral);
      });

      it('should have the property premine (base name: "premine")', function() {
        // TODO: update the code to test the property premine
        expect(instance).to.have.property('premine');
        // expect(instance.premine).to.be(expectedValueLiteral);
      });

      it('should have the property spacedRune (base name: "spaced_rune")', function() {
        // TODO: update the code to test the property spacedRune
        expect(instance).to.have.property('spacedRune');
        // expect(instance.spacedRune).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property terms (base name: "terms")', function() {
        // TODO: update the code to test the property terms
        expect(instance).to.have.property('terms');
        // expect(instance.terms).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property turbo (base name: "turbo")', function() {
        // TODO: update the code to test the property turbo
        expect(instance).to.have.property('turbo');
        // expect(instance.turbo).to.be(expectedValueLiteral);
      });

    });
  });

}));
