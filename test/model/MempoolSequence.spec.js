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
    describe('MempoolSequence', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.MempoolSequence();
      });

      it('should create an instance of MempoolSequence', function() {
        // TODO: update the code to test MempoolSequence
        expect(instance).to.be.a(SatstreamJavascriptSdk.MempoolSequence);
      });

      it('should have the property mempoolSequence (base name: "mempool_sequence")', function() {
        // TODO: update the code to test the property mempoolSequence
        expect(instance).to.have.property('mempoolSequence');
        // expect(instance.mempoolSequence).to.be(expectedValueLiteral);
      });

      it('should have the property txids (base name: "txids")', function() {
        // TODO: update the code to test the property txids
        expect(instance).to.have.property('txids');
        // expect(instance.txids).to.be(expectedValueLiteral);
      });

    });
  });

}));
