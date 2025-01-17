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
    instance = new SatstreamJavascriptSdk.BlocksApi();
  });

  describe('(package)', function() {
    describe('BlocksApi', function() {
      describe('getBlockCount', function() {
        it('should call getBlockCount successfully', function(done) {
          // TODO: uncomment getBlockCount call and complete the assertions
          /*

          instance.getBlockCount(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockCountResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockDecoded', function() {
        it('should call getBlockDecoded successfully', function(done) {
          // TODO: uncomment, update parameter values for getBlockDecoded call and complete the assertions
          /*

          instance.getBlockDecoded(identifier, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockDecodedResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockHashByHeight', function() {
        it('should call getBlockHashByHeight successfully', function(done) {
          // TODO: uncomment, update parameter values for getBlockHashByHeight call and complete the assertions
          /*

          instance.getBlockHashByHeight(blockHeight, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockHashByHeightResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockHex', function() {
        it('should call getBlockHex successfully', function(done) {
          // TODO: uncomment, update parameter values for getBlockHex call and complete the assertions
          /*

          instance.getBlockHex(identifier, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockHexResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockInfo', function() {
        it('should call getBlockInfo successfully', function(done) {
          // TODO: uncomment, update parameter values for getBlockInfo call and complete the assertions
          /*

          instance.getBlockInfo(identifier, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockPrevout', function() {
        it('should call getBlockPrevout successfully', function(done) {
          // TODO: uncomment, update parameter values for getBlockPrevout call and complete the assertions
          /*

          instance.getBlockPrevout(identifier, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockPrevoutResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockStats', function() {
        it('should call getBlockStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getBlockStats call and complete the assertions
          /*

          instance.getBlockStats(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockStatsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockSummary', function() {
        it('should call getBlockSummary successfully', function(done) {
          // TODO: uncomment, update parameter values for getBlockSummary call and complete the assertions
          /*

          instance.getBlockSummary(identifier, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockSummaryResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockchainInfo', function() {
        it('should call getBlockchainInfo successfully', function(done) {
          // TODO: uncomment getBlockchainInfo call and complete the assertions
          /*

          instance.getBlockchainInfo(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlockchainInfoResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlocks', function() {
        it('should call getBlocks successfully', function(done) {
          // TODO: uncomment getBlocks call and complete the assertions
          /*

          instance.getBlocks(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetBlocksResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLatestBlockHeight', function() {
        it('should call getLatestBlockHeight successfully', function(done) {
          // TODO: uncomment getLatestBlockHeight call and complete the assertions
          /*

          instance.getLatestBlockHeight(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetLatestBlockHeightResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLatestBlockhash', function() {
        it('should call getLatestBlockhash successfully', function(done) {
          // TODO: uncomment getLatestBlockhash call and complete the assertions
          /*

          instance.getLatestBlockhash(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetLatestBlockHashResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLatestBlocktime', function() {
        it('should call getLatestBlocktime successfully', function(done) {
          // TODO: uncomment getLatestBlocktime call and complete the assertions
          /*

          instance.getLatestBlocktime(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamJavascriptSdk.GetLatestBlockTimeResponse);

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
