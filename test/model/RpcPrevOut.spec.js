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
    describe('RpcPrevOut', function() {
      beforeEach(function() {
        instance = new SatstreamApi.RpcPrevOut();
      });

      it('should create an instance of RpcPrevOut', function() {
        // TODO: update the code to test RpcPrevOut
        expect(instance).to.be.a(SatstreamApi.RpcPrevOut);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property n (base name: "n")', function() {
        // TODO: update the code to test the property n
        expect(instance).to.have.property('n');
        // expect(instance.n).to.be(expectedValueLiteral);
      });

      it('should have the property populated (base name: "populated")', function() {
        // TODO: update the code to test the property populated
        expect(instance).to.have.property('populated');
        // expect(instance.populated).to.be(expectedValueLiteral);
      });

      it('should have the property runeHoldings (base name: "rune_holdings")', function() {
        // TODO: update the code to test the property runeHoldings
        expect(instance).to.have.property('runeHoldings');
        // expect(instance.runeHoldings).to.be(expectedValueLiteral);
      });

      it('should have the property scriptPubKey (base name: "scriptPubKey")', function() {
        // TODO: update the code to test the property scriptPubKey
        expect(instance).to.have.property('scriptPubKey');
        // expect(instance.scriptPubKey).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
