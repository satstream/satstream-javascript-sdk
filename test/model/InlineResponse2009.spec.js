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
    describe('InlineResponse2009', function() {
      beforeEach(function() {
        instance = new SatstreamApi.InlineResponse2009();
      });

      it('should create an instance of InlineResponse2009', function() {
        // TODO: update the code to test InlineResponse2009
        expect(instance).to.be.a(SatstreamApi.InlineResponse2009);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property responsesBaseResponse (base name: "responses.BaseResponse")', function() {
        // TODO: update the code to test the property responsesBaseResponse
        expect(instance).to.have.property('responsesBaseResponse');
        // expect(instance.responsesBaseResponse).to.be(expectedValueLiteral);
      });

    });
  });

}));
