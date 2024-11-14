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
    factory(root.expect, root.SatstreamApi);
  }
}(this, function(expect, SatstreamApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SatstreamApi.RunesApi();
  });

  describe('(package)', function() {
    describe('RunesApi', function() {
      describe('getRunesHolders', function() {
        it('should call getRunesHolders successfully', function(done) {
          // TODO: uncomment, update parameter values for getRunesHolders call and complete the assertions
          /*

          instance.getRunesHolders(runeId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.ResponsesGetRuneHolders);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRunesInfo', function() {
        it('should call getRunesInfo successfully', function(done) {
          // TODO: uncomment, update parameter values for getRunesInfo call and complete the assertions
          /*

          instance.getRunesInfo(runeId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.ResponsesGetRuneInfo);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRunesInfoList', function() {
        it('should call getRunesInfoList successfully', function(done) {
          // TODO: uncomment, update parameter values for getRunesInfoList call and complete the assertions
          /*
          var opts = {};

          instance.getRunesInfoList(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.ResponsesGetRunesInfoList);

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
