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
    describe('SatoshiResponse', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.SatoshiResponse();
      });

      it('should create an instance of SatoshiResponse', function() {
        // TODO: update the code to test SatoshiResponse
        expect(instance).to.be.a(SatstreamJavascriptSdk.SatoshiResponse);
      });

      it('should have the property block (base name: "block")', function() {
        // TODO: update the code to test the property block
        expect(instance).to.have.property('block');
        // expect(instance.block).to.be(expectedValueLiteral);
      });

      it('should have the property charms (base name: "charms")', function() {
        // TODO: update the code to test the property charms
        expect(instance).to.have.property('charms');
        // expect(instance.charms).to.be(expectedValueLiteral);
      });

      it('should have the property cycle (base name: "cycle")', function() {
        // TODO: update the code to test the property cycle
        expect(instance).to.have.property('cycle');
        // expect(instance.cycle).to.be(expectedValueLiteral);
      });

      it('should have the property decimal (base name: "decimal")', function() {
        // TODO: update the code to test the property decimal
        expect(instance).to.have.property('decimal');
        // expect(instance.decimal).to.be(expectedValueLiteral);
      });

      it('should have the property degree (base name: "degree")', function() {
        // TODO: update the code to test the property degree
        expect(instance).to.have.property('degree');
        // expect(instance.degree).to.be(expectedValueLiteral);
      });

      it('should have the property epoch (base name: "epoch")', function() {
        // TODO: update the code to test the property epoch
        expect(instance).to.have.property('epoch');
        // expect(instance.epoch).to.be(expectedValueLiteral);
      });

      it('should have the property inscriptions (base name: "inscriptions")', function() {
        // TODO: update the code to test the property inscriptions
        expect(instance).to.have.property('inscriptions');
        // expect(instance.inscriptions).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property _number (base name: "number")', function() {
        // TODO: update the code to test the property _number
        expect(instance).to.have.property('_number');
        // expect(instance._number).to.be(expectedValueLiteral);
      });

      it('should have the property offset (base name: "offset")', function() {
        // TODO: update the code to test the property offset
        expect(instance).to.have.property('offset');
        // expect(instance.offset).to.be(expectedValueLiteral);
      });

      it('should have the property percentile (base name: "percentile")', function() {
        // TODO: update the code to test the property percentile
        expect(instance).to.have.property('percentile');
        // expect(instance.percentile).to.be(expectedValueLiteral);
      });

      it('should have the property period (base name: "period")', function() {
        // TODO: update the code to test the property period
        expect(instance).to.have.property('period');
        // expect(instance.period).to.be(expectedValueLiteral);
      });

      it('should have the property rarity (base name: "rarity")', function() {
        // TODO: update the code to test the property rarity
        expect(instance).to.have.property('rarity');
        // expect(instance.rarity).to.be(expectedValueLiteral);
      });

      it('should have the property satpoint (base name: "satpoint")', function() {
        // TODO: update the code to test the property satpoint
        expect(instance).to.have.property('satpoint');
        // expect(instance.satpoint).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

    });
  });

}));
