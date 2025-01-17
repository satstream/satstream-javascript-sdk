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
    describe('BlocksResponse', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.BlocksResponse();
      });

      it('should create an instance of BlocksResponse', function() {
        // TODO: update the code to test BlocksResponse
        expect(instance).to.be.a(SatstreamJavascriptSdk.BlocksResponse);
      });

      it('should have the property blocks (base name: "blocks")', function() {
        // TODO: update the code to test the property blocks
        expect(instance).to.have.property('blocks');
        // expect(instance.blocks).to.be(expectedValueLiteral);
      });

      it('should have the property featuredBlocks (base name: "featured_blocks")', function() {
        // TODO: update the code to test the property featuredBlocks
        expect(instance).to.have.property('featuredBlocks');
        // expect(instance.featuredBlocks).to.be(expectedValueLiteral);
      });

      it('should have the property last (base name: "last")', function() {
        // TODO: update the code to test the property last
        expect(instance).to.have.property('last');
        // expect(instance.last).to.be(expectedValueLiteral);
      });

    });
  });

}));
