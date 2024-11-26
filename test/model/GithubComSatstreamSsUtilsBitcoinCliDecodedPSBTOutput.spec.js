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
    describe('GithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutput', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.GithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutput();
      });

      it('should create an instance of GithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutput', function() {
        // TODO: update the code to test GithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutput
        expect(instance).to.be.a(SatstreamJavascriptSdk.GithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutput);
      });

      it('should have the property bip32Derivs (base name: "bip32_derivs")', function() {
        // TODO: update the code to test the property bip32Derivs
        expect(instance).to.have.property('bip32Derivs');
        // expect(instance.bip32Derivs).to.be(expectedValueLiteral);
      });

      it('should have the property redeemScript (base name: "redeem_script")', function() {
        // TODO: update the code to test the property redeemScript
        expect(instance).to.have.property('redeemScript');
        // expect(instance.redeemScript).to.be(expectedValueLiteral);
      });

      it('should have the property unknown (base name: "unknown")', function() {
        // TODO: update the code to test the property unknown
        expect(instance).to.have.property('unknown');
        // expect(instance.unknown).to.be(expectedValueLiteral);
      });

      it('should have the property witnessScript (base name: "witness_script")', function() {
        // TODO: update the code to test the property witnessScript
        expect(instance).to.have.property('witnessScript');
        // expect(instance.witnessScript).to.be(expectedValueLiteral);
      });

    });
  });

}));