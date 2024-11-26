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
    instance = new SatstreamJavascriptSdk.MempoolApi();
  });

  describe('(package)', function() {
    describe('MempoolApi', function() {
      describe('getMempoolAncestors', function() {
        it('should call getMempoolAncestors successfully', function(done) {
          // TODO: uncomment, update parameter values for getMempoolAncestors call and complete the assertions
          /*

          instance.getMempoolAncestors(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetMempoolAncestorsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMempoolDescendants', function() {
        it('should call getMempoolDescendants successfully', function(done) {
          // TODO: uncomment, update parameter values for getMempoolDescendants call and complete the assertions
          /*

          instance.getMempoolDescendants(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetMempoolDescendantsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMempoolInfo', function() {
        it('should call getMempoolInfo successfully', function(done) {
          // TODO: uncomment getMempoolInfo call and complete the assertions
          /*

          instance.getMempoolInfo(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetMempoolInfoResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRawMempool', function() {
        it('should call getRawMempool successfully', function(done) {
          // TODO: uncomment, update parameter values for getRawMempool call and complete the assertions
          /*

          instance.getRawMempool(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetRawMempoolResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('testMempoolAccept', function() {
        it('should call testMempoolAccept successfully', function(done) {
          // TODO: uncomment, update parameter values for testMempoolAccept call and complete the assertions
          /*

          instance.testMempoolAccept(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.TestMempoolAcceptResponse);

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
