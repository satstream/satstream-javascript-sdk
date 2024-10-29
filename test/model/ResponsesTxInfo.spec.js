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
    describe('ResponsesTxInfo', function() {
      beforeEach(function() {
        instance = new SatstreamApi.ResponsesTxInfo();
      });

      it('should create an instance of ResponsesTxInfo', function() {
        // TODO: update the code to test ResponsesTxInfo
        expect(instance).to.be.a(SatstreamApi.ResponsesTxInfo);
      });

      it('should have the property blkid (base name: "blkid")', function() {
        // TODO: update the code to test the property blkid
        expect(instance).to.have.property('blkid');
        // expect(instance.blkid).to.be(expectedValueLiteral);
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

      it('should have the property inSatoshi (base name: "inSatoshi")', function() {
        // TODO: update the code to test the property inSatoshi
        expect(instance).to.have.property('inSatoshi');
        // expect(instance.inSatoshi).to.be(expectedValueLiteral);
      });

      it('should have the property locktime (base name: "locktime")', function() {
        // TODO: update the code to test the property locktime
        expect(instance).to.have.property('locktime');
        // expect(instance.locktime).to.be(expectedValueLiteral);
      });

      it('should have the property nIn (base name: "nIn")', function() {
        // TODO: update the code to test the property nIn
        expect(instance).to.have.property('nIn');
        // expect(instance.nIn).to.be(expectedValueLiteral);
      });

      it('should have the property nInInscription (base name: "nInInscription")', function() {
        // TODO: update the code to test the property nInInscription
        expect(instance).to.have.property('nInInscription');
        // expect(instance.nInInscription).to.be(expectedValueLiteral);
      });

      it('should have the property nLostInscription (base name: "nLostInscription")', function() {
        // TODO: update the code to test the property nLostInscription
        expect(instance).to.have.property('nLostInscription');
        // expect(instance.nLostInscription).to.be(expectedValueLiteral);
      });

      it('should have the property nNewInscription (base name: "nNewInscription")', function() {
        // TODO: update the code to test the property nNewInscription
        expect(instance).to.have.property('nNewInscription');
        // expect(instance.nNewInscription).to.be(expectedValueLiteral);
      });

      it('should have the property nOut (base name: "nOut")', function() {
        // TODO: update the code to test the property nOut
        expect(instance).to.have.property('nOut');
        // expect(instance.nOut).to.be(expectedValueLiteral);
      });

      it('should have the property nOutInscription (base name: "nOutInscription")', function() {
        // TODO: update the code to test the property nOutInscription
        expect(instance).to.have.property('nOutInscription');
        // expect(instance.nOutInscription).to.be(expectedValueLiteral);
      });

      it('should have the property outSatoshi (base name: "outSatoshi")', function() {
        // TODO: update the code to test the property outSatoshi
        expect(instance).to.have.property('outSatoshi');
        // expect(instance.outSatoshi).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property txid (base name: "txid")', function() {
        // TODO: update the code to test the property txid
        expect(instance).to.have.property('txid');
        // expect(instance.txid).to.be(expectedValueLiteral);
      });

    });
  });

}));
