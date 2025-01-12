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
    describe('GetBlockStatsRequest', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.GetBlockStatsRequest();
      });

      it('should create an instance of GetBlockStatsRequest', function() {
        // TODO: update the code to test GetBlockStatsRequest
        expect(instance).to.be.a(SatstreamJavascriptSdk.GetBlockStatsRequest);
      });

      it('should have the property hashOrHeight (base name: "hash_or_height")', function() {
        // TODO: update the code to test the property hashOrHeight
        expect(instance).to.have.property('hashOrHeight');
        // expect(instance.hashOrHeight).to.be(expectedValueLiteral);
      });

      it('should have the property stats (base name: "stats")', function() {
        // TODO: update the code to test the property stats
        expect(instance).to.have.property('stats');
        // expect(instance.stats).to.be(expectedValueLiteral);
      });

    });
  });

}));
