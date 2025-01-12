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
    describe('StatusResponse', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.StatusResponse();
      });

      it('should create an instance of StatusResponse', function() {
        // TODO: update the code to test StatusResponse
        expect(instance).to.be.a(SatstreamJavascriptSdk.StatusResponse);
      });

      it('should have the property blessedInscriptions (base name: "blessed_inscriptions")', function() {
        // TODO: update the code to test the property blessedInscriptions
        expect(instance).to.have.property('blessedInscriptions');
        // expect(instance.blessedInscriptions).to.be(expectedValueLiteral);
      });

      it('should have the property chain (base name: "chain")', function() {
        // TODO: update the code to test the property chain
        expect(instance).to.have.property('chain');
        // expect(instance.chain).to.be(expectedValueLiteral);
      });

      it('should have the property cursedInscriptions (base name: "cursed_inscriptions")', function() {
        // TODO: update the code to test the property cursedInscriptions
        expect(instance).to.have.property('cursedInscriptions');
        // expect(instance.cursedInscriptions).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property inscriptions (base name: "inscriptions")', function() {
        // TODO: update the code to test the property inscriptions
        expect(instance).to.have.property('inscriptions');
        // expect(instance.inscriptions).to.be(expectedValueLiteral);
      });

      it('should have the property lostSats (base name: "lost_sats")', function() {
        // TODO: update the code to test the property lostSats
        expect(instance).to.have.property('lostSats');
        // expect(instance.lostSats).to.be(expectedValueLiteral);
      });

      it('should have the property minimumRuneForNextBlock (base name: "minimum_rune_for_next_block")', function() {
        // TODO: update the code to test the property minimumRuneForNextBlock
        expect(instance).to.have.property('minimumRuneForNextBlock');
        // expect(instance.minimumRuneForNextBlock).to.be(expectedValueLiteral);
      });

      it('should have the property runes (base name: "runes")', function() {
        // TODO: update the code to test the property runes
        expect(instance).to.have.property('runes');
        // expect(instance.runes).to.be(expectedValueLiteral);
      });

    });
  });

}));
