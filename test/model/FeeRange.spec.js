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
    describe('FeeRange', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.FeeRange();
      });

      it('should create an instance of FeeRange', function() {
        // TODO: update the code to test FeeRange
        expect(instance).to.be.a(SatstreamJavascriptSdk.FeeRange);
      });

      it('should have the property endrange (base name: "endrange")', function() {
        // TODO: update the code to test the property endrange
        expect(instance).to.have.property('endrange');
        // expect(instance.endrange).to.be(expectedValueLiteral);
      });

      it('should have the property inmempool (base name: "inmempool")', function() {
        // TODO: update the code to test the property inmempool
        expect(instance).to.have.property('inmempool');
        // expect(instance.inmempool).to.be(expectedValueLiteral);
      });

      it('should have the property leftmempool (base name: "leftmempool")', function() {
        // TODO: update the code to test the property leftmempool
        expect(instance).to.have.property('leftmempool');
        // expect(instance.leftmempool).to.be(expectedValueLiteral);
      });

      it('should have the property startrange (base name: "startrange")', function() {
        // TODO: update the code to test the property startrange
        expect(instance).to.have.property('startrange');
        // expect(instance.startrange).to.be(expectedValueLiteral);
      });

      it('should have the property totalconfirmed (base name: "totalconfirmed")', function() {
        // TODO: update the code to test the property totalconfirmed
        expect(instance).to.have.property('totalconfirmed');
        // expect(instance.totalconfirmed).to.be(expectedValueLiteral);
      });

      it('should have the property withintarget (base name: "withintarget")', function() {
        // TODO: update the code to test the property withintarget
        expect(instance).to.have.property('withintarget');
        // expect(instance.withintarget).to.be(expectedValueLiteral);
      });

    });
  });

}));