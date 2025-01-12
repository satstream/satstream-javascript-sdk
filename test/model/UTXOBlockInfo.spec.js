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
    describe('UTXOBlockInfo', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.UTXOBlockInfo();
      });

      it('should create an instance of UTXOBlockInfo', function() {
        // TODO: update the code to test UTXOBlockInfo
        expect(instance).to.be.a(SatstreamJavascriptSdk.UTXOBlockInfo);
      });

      it('should have the property coinbase (base name: "coinbase")', function() {
        // TODO: update the code to test the property coinbase
        expect(instance).to.have.property('coinbase');
        // expect(instance.coinbase).to.be(expectedValueLiteral);
      });

      it('should have the property newOutputsExCoinbase (base name: "new_outputs_ex_coinbase")', function() {
        // TODO: update the code to test the property newOutputsExCoinbase
        expect(instance).to.have.property('newOutputsExCoinbase');
        // expect(instance.newOutputsExCoinbase).to.be(expectedValueLiteral);
      });

      it('should have the property prevoutSpent (base name: "prevout_spent")', function() {
        // TODO: update the code to test the property prevoutSpent
        expect(instance).to.have.property('prevoutSpent');
        // expect(instance.prevoutSpent).to.be(expectedValueLiteral);
      });

      it('should have the property unspendable (base name: "unspendable")', function() {
        // TODO: update the code to test the property unspendable
        expect(instance).to.have.property('unspendable');
        // expect(instance.unspendable).to.be(expectedValueLiteral);
      });

      it('should have the property unspendables (base name: "unspendables")', function() {
        // TODO: update the code to test the property unspendables
        expect(instance).to.have.property('unspendables');
        // expect(instance.unspendables).to.be(expectedValueLiteral);
      });

    });
  });

}));
