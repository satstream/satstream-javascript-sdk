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
    instance = new SatstreamApi.MempoolApi();
  });

  describe('(package)', function() {
    describe('MempoolApi', function() {
      describe('mempoolAddressesAddressTransactionsGet', function() {
        it('should call mempoolAddressesAddressTransactionsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for mempoolAddressesAddressTransactionsGet call and complete the assertions
          /*
          var address = "address_example";

          instance.mempoolAddressesAddressTransactionsGet(address, function(error, data, response) {
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
              expect(data).to.be.a(SatstreamApi.RpcBtcTx);
              expect(data.blockheight).to.be.a('number');
              expect(data.blockheight).to.be(0);
              expect(data.fee).to.be.a('number');
              expect(data.fee).to.be();
              expect(data.hash).to.be.a('string');
              expect(data.hash).to.be("");
              expect(data.hex).to.be.a('string');
              expect(data.hex).to.be("");
              expect(data.index).to.be.a('number');
              expect(data.index).to.be(0);
              expect(data.locktime).to.be.a('number');
              expect(data.locktime).to.be(0);
              expect(data.size).to.be.a('number');
              expect(data.size).to.be(0);
              expect(data.txid).to.be.a('string');
              expect(data.txid).to.be("");
              expect(data.version).to.be.a('number');
              expect(data.version).to.be(0);
              {
                let dataCtr = data.vin;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SatstreamApi.RpcVin);
                  expect(data.coinbase).to.be.a('string');
                  expect(data.coinbase).to.be("");
                  expect(data.prevout).to.be.a(SatstreamApi.RpcPrevOut);
                        expect(data.prevout.height).to.be.a('number');
                    expect(data.prevout.height).to.be(0);
                    expect(data.prevout.n).to.be.a('number');
                    expect(data.prevout.n).to.be(0);
                    expect(data.prevout.populated).to.be.a('boolean');
                    expect(data.prevout.populated).to.be(false);
                    {
                      let dataCtr = data.prevout.runeHoldings;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(SatstreamApi.RpcUtxoRune);
                        expect(data.amount).to.be.a(SatstreamApi.BigInt);
                            expect(data.runeId).to.be.a('string');
                        expect(data.runeId).to.be("");
        
                              }
                    }
                    expect(data.prevout.scriptPubKey).to.be.a(SatstreamApi.RpcScriptPubKey);
                          expect(data.prevout.scriptPubKey.address).to.be.a('string');
                      expect(data.prevout.scriptPubKey.address).to.be("");
                      expect(data.prevout.scriptPubKey.asm).to.be.a('string');
                      expect(data.prevout.scriptPubKey.asm).to.be("");
                      expect(data.prevout.scriptPubKey.desc).to.be.a('string');
                      expect(data.prevout.scriptPubKey.desc).to.be("");
                      expect(data.prevout.scriptPubKey.hex).to.be.a('string');
                      expect(data.prevout.scriptPubKey.hex).to.be("");
                      expect(data.prevout.scriptPubKey.type).to.be.a('string');
                      expect(data.prevout.scriptPubKey.type).to.be("");
                    expect(data.prevout.value).to.be.a('number');
                    expect(data.prevout.value).to.be();
                  expect(data.scriptSig).to.be.a(SatstreamApi.RpcScriptSig);
                        expect(data.scriptSig.asm).to.be.a('string');
                    expect(data.scriptSig.asm).to.be("");
                    expect(data.scriptSig.hex).to.be.a('string');
                    expect(data.scriptSig.hex).to.be("");
                  expect(data.sequence).to.be.a('number');
                  expect(data.sequence).to.be(0);
                  expect(data.txid).to.be.a('string');
                  expect(data.txid).to.be("");
                  {
                    let dataCtr = data.txinwitness;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.vout).to.be.a('number');
                  expect(data.vout).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.vout;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SatstreamApi.RpcVout);
                  expect(data.n).to.be.a('number');
                  expect(data.n).to.be(0);
                  {
                    let dataCtr = data.runeHoldings;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(SatstreamApi.RpcUtxoRune);
                      expect(data.amount).to.be.a(SatstreamApi.BigInt);
                          expect(data.runeId).to.be.a('string');
                      expect(data.runeId).to.be("");
      
                            }
                  }
                  expect(data.scriptPubKey).to.be.a(SatstreamApi.RpcScriptPubKey);
                        expect(data.scriptPubKey.address).to.be.a('string');
                    expect(data.scriptPubKey.address).to.be("");
                    expect(data.scriptPubKey.asm).to.be.a('string');
                    expect(data.scriptPubKey.asm).to.be("");
                    expect(data.scriptPubKey.desc).to.be.a('string');
                    expect(data.scriptPubKey.desc).to.be("");
                    expect(data.scriptPubKey.hex).to.be.a('string');
                    expect(data.scriptPubKey.hex).to.be("");
                    expect(data.scriptPubKey.type).to.be.a('string');
                    expect(data.scriptPubKey.type).to.be("");
                  expect(data.value).to.be.a('number');
                  expect(data.value).to.be();
  
                        }
              }
              expect(data.vsize).to.be.a('number');
              expect(data.vsize).to.be(0);
              expect(data.weight).to.be.a('number');
              expect(data.weight).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('mempoolTransactionsGet', function() {
        it('should call mempoolTransactionsGet successfully', function(done) {
          // TODO: uncomment mempoolTransactionsGet call and complete the assertions
          /*

          instance.mempoolTransactionsGet(function(error, data, response) {
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
              expect(data).to.be.a(SatstreamApi.RpcBtcTx);
              expect(data.blockheight).to.be.a('number');
              expect(data.blockheight).to.be(0);
              expect(data.fee).to.be.a('number');
              expect(data.fee).to.be();
              expect(data.hash).to.be.a('string');
              expect(data.hash).to.be("");
              expect(data.hex).to.be.a('string');
              expect(data.hex).to.be("");
              expect(data.index).to.be.a('number');
              expect(data.index).to.be(0);
              expect(data.locktime).to.be.a('number');
              expect(data.locktime).to.be(0);
              expect(data.size).to.be.a('number');
              expect(data.size).to.be(0);
              expect(data.txid).to.be.a('string');
              expect(data.txid).to.be("");
              expect(data.version).to.be.a('number');
              expect(data.version).to.be(0);
              {
                let dataCtr = data.vin;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SatstreamApi.RpcVin);
                  expect(data.coinbase).to.be.a('string');
                  expect(data.coinbase).to.be("");
                  expect(data.prevout).to.be.a(SatstreamApi.RpcPrevOut);
                        expect(data.prevout.height).to.be.a('number');
                    expect(data.prevout.height).to.be(0);
                    expect(data.prevout.n).to.be.a('number');
                    expect(data.prevout.n).to.be(0);
                    expect(data.prevout.populated).to.be.a('boolean');
                    expect(data.prevout.populated).to.be(false);
                    {
                      let dataCtr = data.prevout.runeHoldings;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(SatstreamApi.RpcUtxoRune);
                        expect(data.amount).to.be.a(SatstreamApi.BigInt);
                            expect(data.runeId).to.be.a('string');
                        expect(data.runeId).to.be("");
        
                              }
                    }
                    expect(data.prevout.scriptPubKey).to.be.a(SatstreamApi.RpcScriptPubKey);
                          expect(data.prevout.scriptPubKey.address).to.be.a('string');
                      expect(data.prevout.scriptPubKey.address).to.be("");
                      expect(data.prevout.scriptPubKey.asm).to.be.a('string');
                      expect(data.prevout.scriptPubKey.asm).to.be("");
                      expect(data.prevout.scriptPubKey.desc).to.be.a('string');
                      expect(data.prevout.scriptPubKey.desc).to.be("");
                      expect(data.prevout.scriptPubKey.hex).to.be.a('string');
                      expect(data.prevout.scriptPubKey.hex).to.be("");
                      expect(data.prevout.scriptPubKey.type).to.be.a('string');
                      expect(data.prevout.scriptPubKey.type).to.be("");
                    expect(data.prevout.value).to.be.a('number');
                    expect(data.prevout.value).to.be();
                  expect(data.scriptSig).to.be.a(SatstreamApi.RpcScriptSig);
                        expect(data.scriptSig.asm).to.be.a('string');
                    expect(data.scriptSig.asm).to.be("");
                    expect(data.scriptSig.hex).to.be.a('string');
                    expect(data.scriptSig.hex).to.be("");
                  expect(data.sequence).to.be.a('number');
                  expect(data.sequence).to.be(0);
                  expect(data.txid).to.be.a('string');
                  expect(data.txid).to.be("");
                  {
                    let dataCtr = data.txinwitness;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.vout).to.be.a('number');
                  expect(data.vout).to.be(0);
  
                        }
              }
              {
                let dataCtr = data.vout;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SatstreamApi.RpcVout);
                  expect(data.n).to.be.a('number');
                  expect(data.n).to.be(0);
                  {
                    let dataCtr = data.runeHoldings;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(SatstreamApi.RpcUtxoRune);
                      expect(data.amount).to.be.a(SatstreamApi.BigInt);
                          expect(data.runeId).to.be.a('string');
                      expect(data.runeId).to.be("");
      
                            }
                  }
                  expect(data.scriptPubKey).to.be.a(SatstreamApi.RpcScriptPubKey);
                        expect(data.scriptPubKey.address).to.be.a('string');
                    expect(data.scriptPubKey.address).to.be("");
                    expect(data.scriptPubKey.asm).to.be.a('string');
                    expect(data.scriptPubKey.asm).to.be("");
                    expect(data.scriptPubKey.desc).to.be.a('string');
                    expect(data.scriptPubKey.desc).to.be("");
                    expect(data.scriptPubKey.hex).to.be.a('string');
                    expect(data.scriptPubKey.hex).to.be("");
                    expect(data.scriptPubKey.type).to.be.a('string');
                    expect(data.scriptPubKey.type).to.be("");
                  expect(data.value).to.be.a('number');
                  expect(data.value).to.be();
  
                        }
              }
              expect(data.vsize).to.be.a('number');
              expect(data.vsize).to.be(0);
              expect(data.weight).to.be.a('number');
              expect(data.weight).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('mempoolTransactionsTxidGet', function() {
        it('should call mempoolTransactionsTxidGet successfully', function(done) {
          // TODO: uncomment, update parameter values for mempoolTransactionsTxidGet call and complete the assertions
          /*
          var txid = "txid_example";

          instance.mempoolTransactionsTxidGet(txid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SatstreamApi.RpcBtcTx);
            expect(data.blockheight).to.be.a('number');
            expect(data.blockheight).to.be(0);
            expect(data.fee).to.be.a('number');
            expect(data.fee).to.be();
            expect(data.hash).to.be.a('string');
            expect(data.hash).to.be("");
            expect(data.hex).to.be.a('string');
            expect(data.hex).to.be("");
            expect(data.index).to.be.a('number');
            expect(data.index).to.be(0);
            expect(data.locktime).to.be.a('number');
            expect(data.locktime).to.be(0);
            expect(data.size).to.be.a('number');
            expect(data.size).to.be(0);
            expect(data.txid).to.be.a('string');
            expect(data.txid).to.be("");
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(0);
            {
              let dataCtr = data.vin;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SatstreamApi.RpcVin);
                expect(data.coinbase).to.be.a('string');
                expect(data.coinbase).to.be("");
                expect(data.prevout).to.be.a(SatstreamApi.RpcPrevOut);
                      expect(data.prevout.height).to.be.a('number');
                  expect(data.prevout.height).to.be(0);
                  expect(data.prevout.n).to.be.a('number');
                  expect(data.prevout.n).to.be(0);
                  expect(data.prevout.populated).to.be.a('boolean');
                  expect(data.prevout.populated).to.be(false);
                  {
                    let dataCtr = data.prevout.runeHoldings;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(SatstreamApi.RpcUtxoRune);
                      expect(data.amount).to.be.a(SatstreamApi.BigInt);
                          expect(data.runeId).to.be.a('string');
                      expect(data.runeId).to.be("");
      
                            }
                  }
                  expect(data.prevout.scriptPubKey).to.be.a(SatstreamApi.RpcScriptPubKey);
                        expect(data.prevout.scriptPubKey.address).to.be.a('string');
                    expect(data.prevout.scriptPubKey.address).to.be("");
                    expect(data.prevout.scriptPubKey.asm).to.be.a('string');
                    expect(data.prevout.scriptPubKey.asm).to.be("");
                    expect(data.prevout.scriptPubKey.desc).to.be.a('string');
                    expect(data.prevout.scriptPubKey.desc).to.be("");
                    expect(data.prevout.scriptPubKey.hex).to.be.a('string');
                    expect(data.prevout.scriptPubKey.hex).to.be("");
                    expect(data.prevout.scriptPubKey.type).to.be.a('string');
                    expect(data.prevout.scriptPubKey.type).to.be("");
                  expect(data.prevout.value).to.be.a('number');
                  expect(data.prevout.value).to.be();
                expect(data.scriptSig).to.be.a(SatstreamApi.RpcScriptSig);
                      expect(data.scriptSig.asm).to.be.a('string');
                  expect(data.scriptSig.asm).to.be("");
                  expect(data.scriptSig.hex).to.be.a('string');
                  expect(data.scriptSig.hex).to.be("");
                expect(data.sequence).to.be.a('number');
                expect(data.sequence).to.be(0);
                expect(data.txid).to.be.a('string');
                expect(data.txid).to.be("");
                {
                  let dataCtr = data.txinwitness;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.vout).to.be.a('number');
                expect(data.vout).to.be(0);

                      }
            }
            {
              let dataCtr = data.vout;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SatstreamApi.RpcVout);
                expect(data.n).to.be.a('number');
                expect(data.n).to.be(0);
                {
                  let dataCtr = data.runeHoldings;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SatstreamApi.RpcUtxoRune);
                    expect(data.amount).to.be.a(SatstreamApi.BigInt);
                        expect(data.runeId).to.be.a('string');
                    expect(data.runeId).to.be("");
    
                          }
                }
                expect(data.scriptPubKey).to.be.a(SatstreamApi.RpcScriptPubKey);
                      expect(data.scriptPubKey.address).to.be.a('string');
                  expect(data.scriptPubKey.address).to.be("");
                  expect(data.scriptPubKey.asm).to.be.a('string');
                  expect(data.scriptPubKey.asm).to.be("");
                  expect(data.scriptPubKey.desc).to.be.a('string');
                  expect(data.scriptPubKey.desc).to.be("");
                  expect(data.scriptPubKey.hex).to.be.a('string');
                  expect(data.scriptPubKey.hex).to.be("");
                  expect(data.scriptPubKey.type).to.be.a('string');
                  expect(data.scriptPubKey.type).to.be("");
                expect(data.value).to.be.a('number');
                expect(data.value).to.be();

                      }
            }
            expect(data.vsize).to.be.a('number');
            expect(data.vsize).to.be(0);
            expect(data.weight).to.be.a('number');
            expect(data.weight).to.be(0);

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
