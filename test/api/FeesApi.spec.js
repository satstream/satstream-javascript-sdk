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

  beforeEach(function() {
    instance = new SatstreamJavascriptSdk.FeesApi();
  });

  describe('(package)', function() {
    describe('FeesApi', function() {
      describe('estimateRawFee', function() {
        it('should call estimateRawFee successfully', function(done) {
          // TODO: uncomment, update parameter values for estimateRawFee call and complete the assertions
          /*

          instance.estimateRawFee(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('estimateSmartFee', function() {
        it('should call estimateSmartFee successfully', function(done) {
          // TODO: uncomment, update parameter values for estimateSmartFee call and complete the assertions
          /*

          instance.estimateSmartFee(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.InlineResponse20012);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
