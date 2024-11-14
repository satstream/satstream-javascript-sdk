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
    factory(root.expect, root.SatstreamApi);
  }
}(this, function(expect, SatstreamApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GithubComSatstreamSsUtilsRpcVout', function() {
      beforeEach(function() {
        instance = new SatstreamApi.GithubComSatstreamSsUtilsRpcVout();
      });

      it('should create an instance of GithubComSatstreamSsUtilsRpcVout', function() {
        // TODO: update the code to test GithubComSatstreamSsUtilsRpcVout
        expect(instance).to.be.a(SatstreamApi.GithubComSatstreamSsUtilsRpcVout);
      });

      it('should have the property n (base name: "n")', function() {
        // TODO: update the code to test the property n
        expect(instance).to.have.property('n');
        // expect(instance.n).to.be(expectedValueLiteral);
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
