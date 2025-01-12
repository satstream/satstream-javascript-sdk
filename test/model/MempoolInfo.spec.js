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
    describe('MempoolInfo', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.MempoolInfo();
      });

      it('should create an instance of MempoolInfo', function() {
        // TODO: update the code to test MempoolInfo
        expect(instance).to.be.a(SatstreamJavascriptSdk.MempoolInfo);
      });

      it('should have the property bytes (base name: "bytes")', function() {
        // TODO: update the code to test the property bytes
        expect(instance).to.have.property('bytes');
        // expect(instance.bytes).to.be(expectedValueLiteral);
      });

      it('should have the property fullrbf (base name: "fullrbf")', function() {
        // TODO: update the code to test the property fullrbf
        expect(instance).to.have.property('fullrbf');
        // expect(instance.fullrbf).to.be(expectedValueLiteral);
      });

      it('should have the property incrementalrelayfee (base name: "incrementalrelayfee")', function() {
        // TODO: update the code to test the property incrementalrelayfee
        expect(instance).to.have.property('incrementalrelayfee');
        // expect(instance.incrementalrelayfee).to.be(expectedValueLiteral);
      });

      it('should have the property loaded (base name: "loaded")', function() {
        // TODO: update the code to test the property loaded
        expect(instance).to.have.property('loaded');
        // expect(instance.loaded).to.be(expectedValueLiteral);
      });

      it('should have the property maxmempool (base name: "maxmempool")', function() {
        // TODO: update the code to test the property maxmempool
        expect(instance).to.have.property('maxmempool');
        // expect(instance.maxmempool).to.be(expectedValueLiteral);
      });

      it('should have the property mempoolminfee (base name: "mempoolminfee")', function() {
        // TODO: update the code to test the property mempoolminfee
        expect(instance).to.have.property('mempoolminfee');
        // expect(instance.mempoolminfee).to.be(expectedValueLiteral);
      });

      it('should have the property minrelaytxfee (base name: "minrelaytxfee")', function() {
        // TODO: update the code to test the property minrelaytxfee
        expect(instance).to.have.property('minrelaytxfee');
        // expect(instance.minrelaytxfee).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property totalFee (base name: "total_fee")', function() {
        // TODO: update the code to test the property totalFee
        expect(instance).to.have.property('totalFee');
        // expect(instance.totalFee).to.be(expectedValueLiteral);
      });

      it('should have the property unbroadcastcount (base name: "unbroadcastcount")', function() {
        // TODO: update the code to test the property unbroadcastcount
        expect(instance).to.have.property('unbroadcastcount');
        // expect(instance.unbroadcastcount).to.be(expectedValueLiteral);
      });

      it('should have the property usage (base name: "usage")', function() {
        // TODO: update the code to test the property usage
        expect(instance).to.have.property('usage');
        // expect(instance.usage).to.be(expectedValueLiteral);
      });

    });
  });

}));
