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
    describe('GithubComSatstreamSsUtilsBitcoinCliBlockStats', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.GithubComSatstreamSsUtilsBitcoinCliBlockStats();
      });

      it('should create an instance of GithubComSatstreamSsUtilsBitcoinCliBlockStats', function() {
        // TODO: update the code to test GithubComSatstreamSsUtilsBitcoinCliBlockStats
        expect(instance).to.be.a(SatstreamJavascriptSdk.GithubComSatstreamSsUtilsBitcoinCliBlockStats);
      });

      it('should have the property avgfee (base name: "avgfee")', function() {
        // TODO: update the code to test the property avgfee
        expect(instance).to.have.property('avgfee');
        // expect(instance.avgfee).to.be(expectedValueLiteral);
      });

      it('should have the property avgfeerate (base name: "avgfeerate")', function() {
        // TODO: update the code to test the property avgfeerate
        expect(instance).to.have.property('avgfeerate');
        // expect(instance.avgfeerate).to.be(expectedValueLiteral);
      });

      it('should have the property avgtxsize (base name: "avgtxsize")', function() {
        // TODO: update the code to test the property avgtxsize
        expect(instance).to.have.property('avgtxsize');
        // expect(instance.avgtxsize).to.be(expectedValueLiteral);
      });

      it('should have the property blockhash (base name: "blockhash")', function() {
        // TODO: update the code to test the property blockhash
        expect(instance).to.have.property('blockhash');
        // expect(instance.blockhash).to.be(expectedValueLiteral);
      });

      it('should have the property feeratePercentiles (base name: "feerate_percentiles")', function() {
        // TODO: update the code to test the property feeratePercentiles
        expect(instance).to.have.property('feeratePercentiles');
        // expect(instance.feeratePercentiles).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property ins (base name: "ins")', function() {
        // TODO: update the code to test the property ins
        expect(instance).to.have.property('ins');
        // expect(instance.ins).to.be(expectedValueLiteral);
      });

      it('should have the property maxfee (base name: "maxfee")', function() {
        // TODO: update the code to test the property maxfee
        expect(instance).to.have.property('maxfee');
        // expect(instance.maxfee).to.be(expectedValueLiteral);
      });

      it('should have the property maxfeerate (base name: "maxfeerate")', function() {
        // TODO: update the code to test the property maxfeerate
        expect(instance).to.have.property('maxfeerate');
        // expect(instance.maxfeerate).to.be(expectedValueLiteral);
      });

      it('should have the property maxtxsize (base name: "maxtxsize")', function() {
        // TODO: update the code to test the property maxtxsize
        expect(instance).to.have.property('maxtxsize');
        // expect(instance.maxtxsize).to.be(expectedValueLiteral);
      });

      it('should have the property medianfee (base name: "medianfee")', function() {
        // TODO: update the code to test the property medianfee
        expect(instance).to.have.property('medianfee');
        // expect(instance.medianfee).to.be(expectedValueLiteral);
      });

      it('should have the property mediantime (base name: "mediantime")', function() {
        // TODO: update the code to test the property mediantime
        expect(instance).to.have.property('mediantime');
        // expect(instance.mediantime).to.be(expectedValueLiteral);
      });

      it('should have the property mediantxsize (base name: "mediantxsize")', function() {
        // TODO: update the code to test the property mediantxsize
        expect(instance).to.have.property('mediantxsize');
        // expect(instance.mediantxsize).to.be(expectedValueLiteral);
      });

      it('should have the property minfee (base name: "minfee")', function() {
        // TODO: update the code to test the property minfee
        expect(instance).to.have.property('minfee');
        // expect(instance.minfee).to.be(expectedValueLiteral);
      });

      it('should have the property minfeerate (base name: "minfeerate")', function() {
        // TODO: update the code to test the property minfeerate
        expect(instance).to.have.property('minfeerate');
        // expect(instance.minfeerate).to.be(expectedValueLiteral);
      });

      it('should have the property mintxsize (base name: "mintxsize")', function() {
        // TODO: update the code to test the property mintxsize
        expect(instance).to.have.property('mintxsize');
        // expect(instance.mintxsize).to.be(expectedValueLiteral);
      });

      it('should have the property outs (base name: "outs")', function() {
        // TODO: update the code to test the property outs
        expect(instance).to.have.property('outs');
        // expect(instance.outs).to.be(expectedValueLiteral);
      });

      it('should have the property subsidy (base name: "subsidy")', function() {
        // TODO: update the code to test the property subsidy
        expect(instance).to.have.property('subsidy');
        // expect(instance.subsidy).to.be(expectedValueLiteral);
      });

      it('should have the property swtotalSize (base name: "swtotal_size")', function() {
        // TODO: update the code to test the property swtotalSize
        expect(instance).to.have.property('swtotalSize');
        // expect(instance.swtotalSize).to.be(expectedValueLiteral);
      });

      it('should have the property swtotalWeight (base name: "swtotal_weight")', function() {
        // TODO: update the code to test the property swtotalWeight
        expect(instance).to.have.property('swtotalWeight');
        // expect(instance.swtotalWeight).to.be(expectedValueLiteral);
      });

      it('should have the property swtxs (base name: "swtxs")', function() {
        // TODO: update the code to test the property swtxs
        expect(instance).to.have.property('swtxs');
        // expect(instance.swtxs).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property totalOut (base name: "total_out")', function() {
        // TODO: update the code to test the property totalOut
        expect(instance).to.have.property('totalOut');
        // expect(instance.totalOut).to.be(expectedValueLiteral);
      });

      it('should have the property totalSize (base name: "total_size")', function() {
        // TODO: update the code to test the property totalSize
        expect(instance).to.have.property('totalSize');
        // expect(instance.totalSize).to.be(expectedValueLiteral);
      });

      it('should have the property totalWeight (base name: "total_weight")', function() {
        // TODO: update the code to test the property totalWeight
        expect(instance).to.have.property('totalWeight');
        // expect(instance.totalWeight).to.be(expectedValueLiteral);
      });

      it('should have the property totalfee (base name: "totalfee")', function() {
        // TODO: update the code to test the property totalfee
        expect(instance).to.have.property('totalfee');
        // expect(instance.totalfee).to.be(expectedValueLiteral);
      });

      it('should have the property txs (base name: "txs")', function() {
        // TODO: update the code to test the property txs
        expect(instance).to.have.property('txs');
        // expect(instance.txs).to.be(expectedValueLiteral);
      });

      it('should have the property utxoIncrease (base name: "utxo_increase")', function() {
        // TODO: update the code to test the property utxoIncrease
        expect(instance).to.have.property('utxoIncrease');
        // expect(instance.utxoIncrease).to.be(expectedValueLiteral);
      });

      it('should have the property utxoSizeInc (base name: "utxo_size_inc")', function() {
        // TODO: update the code to test the property utxoSizeInc
        expect(instance).to.have.property('utxoSizeInc');
        // expect(instance.utxoSizeInc).to.be(expectedValueLiteral);
      });

    });
  });

}));