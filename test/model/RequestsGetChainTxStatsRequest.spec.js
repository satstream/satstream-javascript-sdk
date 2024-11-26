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
    describe('RequestsGetChainTxStatsRequest', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.RequestsGetChainTxStatsRequest();
      });

      it('should create an instance of RequestsGetChainTxStatsRequest', function() {
        // TODO: update the code to test RequestsGetChainTxStatsRequest
        expect(instance).to.be.a(SatstreamJavascriptSdk.RequestsGetChainTxStatsRequest);
      });

      it('should have the property blockhash (base name: "blockhash")', function() {
        // TODO: update the code to test the property blockhash
        expect(instance).to.have.property('blockhash');
        // expect(instance.blockhash).to.be(expectedValueLiteral);
      });

      it('should have the property nblocks (base name: "nblocks")', function() {
        // TODO: update the code to test the property nblocks
        expect(instance).to.have.property('nblocks');
        // expect(instance.nblocks).to.be(expectedValueLiteral);
      });

    });
  });

}));