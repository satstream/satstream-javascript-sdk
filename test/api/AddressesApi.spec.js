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
 * Swagger Codegen version: 2.4.43
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
    instance = new SatstreamApi.AddressesApi();
  });

  describe('(package)', function() {
    describe('AddressesApi', function() {
      describe('addressesAddressBalanceGet', function() {
        it('should call addressesAddressBalanceGet successfully', function(done) {
          // TODO: uncomment, update parameter values for addressesAddressBalanceGet call and complete the assertions
          /*
          var address = "address_example";

          instance.addressesAddressBalanceGet(address, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.ResponsesGetAddressBalance);
            expect(data.address).to.be.a('string');
            expect(data.address).to.be("");
            expect(data.balance).to.be.a('number');
            expect(data.balance).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressesAddressBalanceTimeframeGet', function() {
        it('should call addressesAddressBalanceTimeframeGet successfully', function(done) {
          // TODO: uncomment, update parameter values for addressesAddressBalanceTimeframeGet call and complete the assertions
          /*
          var address = "address_example";
          var start = 56;
          var end = 56;

          instance.addressesAddressBalanceTimeframeGet(address, start, end, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.ResponsesGetAddressTimeframeBalance);
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SatstreamApi.ResponsesGetAddressTimeframeBalanceItem);
                expect(data.balance).to.be.a('number');
                expect(data.balance).to.be();
                expect(data.blockRange).to.be.a(SatstreamApi.ResponsesGetAddressTimeframeBalanceItemBlockRange);
        

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressesAddressRunesGet', function() {
        it('should call addressesAddressRunesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for addressesAddressRunesGet call and complete the assertions
          /*
          var address = "address_example";

          instance.addressesAddressRunesGet(address, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.InlineResponse200);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SatstreamApi.ResponsesGetAddressRunesBalanceListItem);
                expect(data.amount).to.be.a('string');
                expect(data.amount).to.be("52286");
                expect(data.parsedAmount).to.be.a('string');
                expect(data.parsedAmount).to.be("52.286");
                expect(data.runeId).to.be.a('string');
                expect(data.runeId).to.be("840000:3");
                expect(data.spacedRune).to.be.a('string');
                expect(data.spacedRune).to.be("DECENTRALIZED");

                      }
            }
            expect(data.responsesBaseResponse).to.be.a(SatstreamApi.ResponsesBaseResponse);
                  expect(data.responsesBaseResponse.code).to.be.a('number');
              expect(data.responsesBaseResponse.code).to.be(0);
              expect(data.responsesBaseResponse.data).to.be.a(Object);
              expect(data.responsesBaseResponse.data).to.be();
              expect(data.responsesBaseResponse.msg).to.be.a('string');
              expect(data.responsesBaseResponse.msg).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressesAddressRunesRuneidGet', function() {
        it('should call addressesAddressRunesRuneidGet successfully', function(done) {
          // TODO: uncomment, update parameter values for addressesAddressRunesRuneidGet call and complete the assertions
          /*
          var address = "address_example";
          var runeid = "runeid_example";

          instance.addressesAddressRunesRuneidGet(address, runeid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.ResponsesGetAddressRuneBalance);
            expect(data.amount).to.be.a('string');
            expect(data.amount).to.be("52286");
            expect(data.divisibility).to.be.a('number');
            expect(data.divisibility).to.be(5);
            expect(data.rune).to.be.a('string');
            expect(data.rune).to.be("DOGGOTOTHEMOON");
            expect(data.runeid).to.be.a('string');
            expect(data.runeid).to.be("840000:3");
            expect(data.spacedAmount).to.be.a('string');
            expect(data.spacedAmount).to.be("52.286");
            expect(data.spacedRune).to.be.a('string');
            expect(data.spacedRune).to.be("DOG•GO•TO•THE•MOON");
            expect(data.symbol).to.be.a('string');
            expect(data.symbol).to.be("🐕");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addressesAddressUtxosGet', function() {
        it('should call addressesAddressUtxosGet successfully', function(done) {
          // TODO: uncomment, update parameter values for addressesAddressUtxosGet call and complete the assertions
          /*
          var address = "address_example";

          instance.addressesAddressUtxosGet(address, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SatstreamApi.ResponsesGetAddressNonInscriptionUTXOData);
              expect(data.cursor).to.be.a('number');
              expect(data.cursor).to.be(0);
              expect(data.total).to.be.a('number');
              expect(data.total).to.be(0);
              expect(data.totalConfirmed).to.be.a('number');
              expect(data.totalConfirmed).to.be(0);
              expect(data.totalRunes).to.be.a('number');
              expect(data.totalRunes).to.be(0);
              expect(data.totalUnconfirmed).to.be.a('number');
              expect(data.totalUnconfirmed).to.be(0);
              expect(data.totalUnconfirmedSpend).to.be.a('number');
              expect(data.totalUnconfirmedSpend).to.be(0);
              {
                let dataCtr = data.utxo;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SatstreamApi.ResponsesNonInscriptionUTXO);
                  expect(data.address).to.be.a('string');
                  expect(data.address).to.be("");
                  expect(data.codeType).to.be.a('number');
                  expect(data.codeType).to.be(0);
                  expect(data.height).to.be.a('number');
                  expect(data.height).to.be(0);
                  expect(data.idx).to.be.a('number');
                  expect(data.idx).to.be(0);
                  expect(data.isOpInRBF).to.be.a('boolean');
                  expect(data.isOpInRBF).to.be(false);
                  expect(data.isSpent).to.be.a('boolean');
                  expect(data.isSpent).to.be(false);
                  expect(data.satoshi).to.be.a(SatstreamApi.BigInt);
                      expect(data.scriptPk).to.be.a('string');
                  expect(data.scriptPk).to.be("");
                  expect(data.scriptType).to.be.a('string');
                  expect(data.scriptType).to.be("");
                  expect(data.txid).to.be.a('string');
                  expect(data.txid).to.be("");
                  expect(data.vout).to.be.a('number');
                  expect(data.vout).to.be(0);
  
                        }
              }
            }

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