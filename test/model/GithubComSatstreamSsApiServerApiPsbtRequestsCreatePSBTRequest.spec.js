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
    describe('GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest();
      });

      it('should create an instance of GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest', function() {
        // TODO: update the code to test GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest
        expect(instance).to.be.a(SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest);
      });

      it('should have the property inputs (base name: "inputs")', function() {
        // TODO: update the code to test the property inputs
        expect(instance).to.have.property('inputs');
        // expect(instance.inputs).to.be(expectedValueLiteral);
      });

      it('should have the property locktime (base name: "locktime")', function() {
        // TODO: update the code to test the property locktime
        expect(instance).to.have.property('locktime');
        // expect(instance.locktime).to.be(expectedValueLiteral);
      });

      it('should have the property outputs (base name: "outputs")', function() {
        // TODO: update the code to test the property outputs
        expect(instance).to.have.property('outputs');
        // expect(instance.outputs).to.be(expectedValueLiteral);
      });

      it('should have the property replaceable (base name: "replaceable")', function() {
        // TODO: update the code to test the property replaceable
        expect(instance).to.have.property('replaceable');
        // expect(instance.replaceable).to.be(expectedValueLiteral);
      });

    });
  });

}));
