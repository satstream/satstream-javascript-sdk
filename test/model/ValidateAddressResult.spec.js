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
    describe('ValidateAddressResult', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.ValidateAddressResult();
      });

      it('should create an instance of ValidateAddressResult', function() {
        // TODO: update the code to test ValidateAddressResult
        expect(instance).to.be.a(SatstreamJavascriptSdk.ValidateAddressResult);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

      it('should have the property errorLocations (base name: "error_locations")', function() {
        // TODO: update the code to test the property errorLocations
        expect(instance).to.have.property('errorLocations');
        // expect(instance.errorLocations).to.be(expectedValueLiteral);
      });

      it('should have the property isscript (base name: "isscript")', function() {
        // TODO: update the code to test the property isscript
        expect(instance).to.have.property('isscript');
        // expect(instance.isscript).to.be(expectedValueLiteral);
      });

      it('should have the property isvalid (base name: "isvalid")', function() {
        // TODO: update the code to test the property isvalid
        expect(instance).to.have.property('isvalid');
        // expect(instance.isvalid).to.be(expectedValueLiteral);
      });

      it('should have the property iswitness (base name: "iswitness")', function() {
        // TODO: update the code to test the property iswitness
        expect(instance).to.have.property('iswitness');
        // expect(instance.iswitness).to.be(expectedValueLiteral);
      });

      it('should have the property scriptPubKey (base name: "scriptPubKey")', function() {
        // TODO: update the code to test the property scriptPubKey
        expect(instance).to.have.property('scriptPubKey');
        // expect(instance.scriptPubKey).to.be(expectedValueLiteral);
      });

      it('should have the property witnessProgram (base name: "witness_program")', function() {
        // TODO: update the code to test the property witnessProgram
        expect(instance).to.have.property('witnessProgram');
        // expect(instance.witnessProgram).to.be(expectedValueLiteral);
      });

      it('should have the property witnessVersion (base name: "witness_version")', function() {
        // TODO: update the code to test the property witnessVersion
        expect(instance).to.have.property('witnessVersion');
        // expect(instance.witnessVersion).to.be(expectedValueLiteral);
      });

    });
  });

}));