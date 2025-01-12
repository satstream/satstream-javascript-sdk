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
    describe('RawTx2', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.RawTx2();
      });

      it('should create an instance of RawTx2', function() {
        // TODO: update the code to test RawTx2
        expect(instance).to.be.a(SatstreamJavascriptSdk.RawTx2);
      });

      it('should have the property blockhash (base name: "blockhash")', function() {
        // TODO: update the code to test the property blockhash
        expect(instance).to.have.property('blockhash');
        // expect(instance.blockhash).to.be(expectedValueLiteral);
      });

      it('should have the property blocktime (base name: "blocktime")', function() {
        // TODO: update the code to test the property blocktime
        expect(instance).to.have.property('blocktime');
        // expect(instance.blocktime).to.be(expectedValueLiteral);
      });

      it('should have the property confirmations (base name: "confirmations")', function() {
        // TODO: update the code to test the property confirmations
        expect(instance).to.have.property('confirmations');
        // expect(instance.confirmations).to.be(expectedValueLiteral);
      });

      it('should have the property hash (base name: "hash")', function() {
        // TODO: update the code to test the property hash
        expect(instance).to.have.property('hash');
        // expect(instance.hash).to.be(expectedValueLiteral);
      });

      it('should have the property hex (base name: "hex")', function() {
        // TODO: update the code to test the property hex
        expect(instance).to.have.property('hex');
        // expect(instance.hex).to.be(expectedValueLiteral);
      });

      it('should have the property locktime (base name: "locktime")', function() {
        // TODO: update the code to test the property locktime
        expect(instance).to.have.property('locktime');
        // expect(instance.locktime).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property txid (base name: "txid")', function() {
        // TODO: update the code to test the property txid
        expect(instance).to.have.property('txid');
        // expect(instance.txid).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property vin (base name: "vin")', function() {
        // TODO: update the code to test the property vin
        expect(instance).to.have.property('vin');
        // expect(instance.vin).to.be(expectedValueLiteral);
      });

      it('should have the property vout (base name: "vout")', function() {
        // TODO: update the code to test the property vout
        expect(instance).to.have.property('vout');
        // expect(instance.vout).to.be(expectedValueLiteral);
      });

      it('should have the property vsize (base name: "vsize")', function() {
        // TODO: update the code to test the property vsize
        expect(instance).to.have.property('vsize');
        // expect(instance.vsize).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

    });
  });

}));
