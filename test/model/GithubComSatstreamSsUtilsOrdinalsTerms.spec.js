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
    describe('GithubComSatstreamSsUtilsOrdinalsTerms', function() {
      beforeEach(function() {
        instance = new SatstreamApi.GithubComSatstreamSsUtilsOrdinalsTerms();
      });

      it('should create an instance of GithubComSatstreamSsUtilsOrdinalsTerms', function() {
        // TODO: update the code to test GithubComSatstreamSsUtilsOrdinalsTerms
        expect(instance).to.be.a(SatstreamApi.GithubComSatstreamSsUtilsOrdinalsTerms);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property cap (base name: "cap")', function() {
        // TODO: update the code to test the property cap
        expect(instance).to.have.property('cap');
        // expect(instance.cap).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property offset (base name: "offset")', function() {
        // TODO: update the code to test the property offset
        expect(instance).to.have.property('offset');
        // expect(instance.offset).to.be(expectedValueLiteral);
      });

    });
  });

}));
