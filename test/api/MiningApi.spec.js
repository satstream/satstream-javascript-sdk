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

  beforeEach(function() {
    instance = new SatstreamJavascriptSdk.MiningApi();
  });

  describe('(package)', function() {
    describe('MiningApi', function() {
      describe('getMiningInfo', function() {
        it('should call getMiningInfo successfully', function(done) {
          // TODO: uncomment getMiningInfo call and complete the assertions
          /*

          instance.getMiningInfo(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetMiningInfoResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkHashps', function() {
        it('should call getNetworkHashps successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkHashps call and complete the assertions
          /*

          instance.getNetworkHashps(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetNetworkHashPSResponse);

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
