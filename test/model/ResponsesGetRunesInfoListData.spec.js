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
    describe('ResponsesGetRunesInfoListData', function() {
      beforeEach(function() {
        instance = new SatstreamApi.ResponsesGetRunesInfoListData();
      });

      it('should create an instance of ResponsesGetRunesInfoListData', function() {
        // TODO: update the code to test ResponsesGetRunesInfoListData
        expect(instance).to.be.a(SatstreamApi.ResponsesGetRunesInfoListData);
      });

      it('should have the property pagination (base name: "pagination")', function() {
        // TODO: update the code to test the property pagination
        expect(instance).to.have.property('pagination');
        // expect(instance.pagination).to.be(expectedValueLiteral);
      });

      it('should have the property runes (base name: "runes")', function() {
        // TODO: update the code to test the property runes
        expect(instance).to.have.property('runes');
        // expect(instance.runes).to.be(expectedValueLiteral);
      });

    });
  });

}));
