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
    describe('UTXOSetInfo', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.UTXOSetInfo();
      });

      it('should create an instance of UTXOSetInfo', function() {
        // TODO: update the code to test UTXOSetInfo
        expect(instance).to.be.a(SatstreamJavascriptSdk.UTXOSetInfo);
      });

      it('should have the property bestblock (base name: "bestblock")', function() {
        // TODO: update the code to test the property bestblock
        expect(instance).to.have.property('bestblock');
        // expect(instance.bestblock).to.be(expectedValueLiteral);
      });

      it('should have the property blockInfo (base name: "block_info")', function() {
        // TODO: update the code to test the property blockInfo
        expect(instance).to.have.property('blockInfo');
        // expect(instance.blockInfo).to.be(expectedValueLiteral);
      });

      it('should have the property bogosize (base name: "bogosize")', function() {
        // TODO: update the code to test the property bogosize
        expect(instance).to.have.property('bogosize');
        // expect(instance.bogosize).to.be(expectedValueLiteral);
      });

      it('should have the property diskSize (base name: "disk_size")', function() {
        // TODO: update the code to test the property diskSize
        expect(instance).to.have.property('diskSize');
        // expect(instance.diskSize).to.be(expectedValueLiteral);
      });

      it('should have the property hashSerialized2 (base name: "hash_serialized_2")', function() {
        // TODO: update the code to test the property hashSerialized2
        expect(instance).to.have.property('hashSerialized2');
        // expect(instance.hashSerialized2).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property muhash (base name: "muhash")', function() {
        // TODO: update the code to test the property muhash
        expect(instance).to.have.property('muhash');
        // expect(instance.muhash).to.be(expectedValueLiteral);
      });

      it('should have the property totalAmount (base name: "total_amount")', function() {
        // TODO: update the code to test the property totalAmount
        expect(instance).to.have.property('totalAmount');
        // expect(instance.totalAmount).to.be(expectedValueLiteral);
      });

      it('should have the property totalUnspendableAmount (base name: "total_unspendable_amount")', function() {
        // TODO: update the code to test the property totalUnspendableAmount
        expect(instance).to.have.property('totalUnspendableAmount');
        // expect(instance.totalUnspendableAmount).to.be(expectedValueLiteral);
      });

      it('should have the property transactions (base name: "transactions")', function() {
        // TODO: update the code to test the property transactions
        expect(instance).to.have.property('transactions');
        // expect(instance.transactions).to.be(expectedValueLiteral);
      });

      it('should have the property txouts (base name: "txouts")', function() {
        // TODO: update the code to test the property txouts
        expect(instance).to.have.property('txouts');
        // expect(instance.txouts).to.be(expectedValueLiteral);
      });

    });
  });

}));
