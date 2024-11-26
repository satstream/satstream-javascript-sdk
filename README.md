# satstream-javascript-sdk

SatstreamJavascriptSdk - JavaScript client for satstream-javascript-sdk
Satstream API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0.20
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen
For more information, please visit [https://satstream.io](https://satstream.io)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install satstream-javascript-sdk --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SatstreamJavascriptSdk = require('satstream-javascript-sdk');
var defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['X-API-KEY'] = "Token"

var api = new SatstreamJavascriptSdk.AddressesApi()
var address = "address_example"; // {String} Address

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAddress(address, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.satstream.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SatstreamJavascriptSdk.AddressesApi* | [**getAddress**](docs/AddressesApi.md#getAddress) | **GET** /address/{address} | Get address info
*SatstreamJavascriptSdk.AddressesApi* | [**getAddressUtxos**](docs/AddressesApi.md#getAddressUtxos) | **GET** /address/{address}/outputs | Get UTXOs for an address
*SatstreamJavascriptSdk.AddressesApi* | [**validateAddress**](docs/AddressesApi.md#validateAddress) | **GET** /address/{address}/validate | Validate address
*SatstreamJavascriptSdk.AddressesApi* | [**verifyMessage**](docs/AddressesApi.md#verifyMessage) | **POST** /address/verify-message | Verify message
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockCount**](docs/BlocksApi.md#getBlockCount) | **GET** /blockcount | Get the height of the latest block
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockDecoded**](docs/BlocksApi.md#getBlockDecoded) | **GET** /block/raw/{identifier}/decoded | Get block by hash or height (verbosity 2)
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockHashByHeight**](docs/BlocksApi.md#getBlockHashByHeight) | **GET** /blockhash/{block_height} | Returns blockhash of specified block.
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockHex**](docs/BlocksApi.md#getBlockHex) | **GET** /block/raw/{identifier}/hex | Get block by hash or height (verbosity 0)
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockInfo**](docs/BlocksApi.md#getBlockInfo) | **GET** /block/{identifier} | Get block info by hash or height
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockPrevout**](docs/BlocksApi.md#getBlockPrevout) | **GET** /block/raw/{identifier}/prevout | Get block by hash or height (verbosity 3)
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockStats**](docs/BlocksApi.md#getBlockStats) | **POST** /block/stats | Get block stats
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockSummary**](docs/BlocksApi.md#getBlockSummary) | **GET** /block/raw/{identifier}/summary | Get block by hash or height (verbosity 1)
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockchainInfo**](docs/BlocksApi.md#getBlockchainInfo) | **GET** /blockchain/info | Get blockchain information
*SatstreamJavascriptSdk.BlocksApi* | [**getBlocks**](docs/BlocksApi.md#getBlocks) | **GET** /blocks | Returns the latest block height, last 100 block hashes, and featured inscriptions
*SatstreamJavascriptSdk.BlocksApi* | [**getLatestBlockHeight**](docs/BlocksApi.md#getLatestBlockHeight) | **GET** /blockheight | Returns the height of the latest block.
*SatstreamJavascriptSdk.BlocksApi* | [**getLatestBlockhash**](docs/BlocksApi.md#getLatestBlockhash) | **GET** /blockhash | Returns blockhash for the latest block.
*SatstreamJavascriptSdk.BlocksApi* | [**getLatestBlocktime**](docs/BlocksApi.md#getLatestBlocktime) | **GET** /blocktime | Get the timestamp of the latest block
*SatstreamJavascriptSdk.FeesApi* | [**estimateRawFee**](docs/FeesApi.md#estimateRawFee) | **POST** /fee/estimate-raw | Estimate Raw Fee
*SatstreamJavascriptSdk.FeesApi* | [**estimateSmartFee**](docs/FeesApi.md#estimateSmartFee) | **POST** /fee/estimate-smart | Estimate smart fee
*SatstreamJavascriptSdk.InscriptionsApi* | [**fetchInscriptionChild**](docs/InscriptionsApi.md#fetchInscriptionChild) | **GET** /inscription/{inscription_id}/{child_index} | Get inscription child info
*SatstreamJavascriptSdk.InscriptionsApi* | [**fetchInscriptions**](docs/InscriptionsApi.md#fetchInscriptions) | **POST** /inscriptions | Fetch multiple inscriptions
*SatstreamJavascriptSdk.InscriptionsApi* | [**getBlockInscriptions**](docs/InscriptionsApi.md#getBlockInscriptions) | **GET** /inscriptions/block/{block_height} | Get inscriptions in a specific block
*SatstreamJavascriptSdk.InscriptionsApi* | [**getInscription**](docs/InscriptionsApi.md#getInscription) | **GET** /inscription/{inscription_id} | Get inscription info
*SatstreamJavascriptSdk.InscriptionsApi* | [**getLatestInscriptions**](docs/InscriptionsApi.md#getLatestInscriptions) | **GET** /inscriptions | Get latest inscriptions
*SatstreamJavascriptSdk.InscriptionsApi* | [**getLatestInscriptionsPage**](docs/InscriptionsApi.md#getLatestInscriptionsPage) | **GET** /inscriptions/{page} | Get latest inscriptions page
*SatstreamJavascriptSdk.MempoolApi* | [**getMempoolAncestors**](docs/MempoolApi.md#getMempoolAncestors) | **POST** /mempool/ancestors | Get mempool ancestors
*SatstreamJavascriptSdk.MempoolApi* | [**getMempoolDescendants**](docs/MempoolApi.md#getMempoolDescendants) | **POST** /mempool/descendants | Get mempool descendants
*SatstreamJavascriptSdk.MempoolApi* | [**getMempoolInfo**](docs/MempoolApi.md#getMempoolInfo) | **GET** /mempool/info | Get mempool information
*SatstreamJavascriptSdk.MempoolApi* | [**getRawMempool**](docs/MempoolApi.md#getRawMempool) | **POST** /mempool/raw | Get raw mempool
*SatstreamJavascriptSdk.MempoolApi* | [**testMempoolAccept**](docs/MempoolApi.md#testMempoolAccept) | **POST** /mempool/test-accept | Test mempool accept
*SatstreamJavascriptSdk.MiningApi* | [**getMiningInfo**](docs/MiningApi.md#getMiningInfo) | **GET** /mining/info | Get mining information
*SatstreamJavascriptSdk.MiningApi* | [**getNetworkHashps**](docs/MiningApi.md#getNetworkHashps) | **POST** /mining/networkhashps | Get network hash per second
*SatstreamJavascriptSdk.NetworkApi* | [**getChainTxStats**](docs/NetworkApi.md#getChainTxStats) | **POST** /chain/txstats | Get chain tx stats
*SatstreamJavascriptSdk.NetworkApi* | [**getDifficulty**](docs/NetworkApi.md#getDifficulty) | **GET** /chain/difficulty | Get difficulty
*SatstreamJavascriptSdk.OutputsApi* | [**getOutputByOutpoint**](docs/OutputsApi.md#getOutputByOutpoint) | **GET** /output/{outpoint} | Get output info by outpoint
*SatstreamJavascriptSdk.OutputsApi* | [**getOutputs**](docs/OutputsApi.md#getOutputs) | **POST** /outputs | Get multiple outputs
*SatstreamJavascriptSdk.PSBTsApi* | [**analyzePsbt**](docs/PSBTsApi.md#analyzePsbt) | **POST** /psbt/analyze | Analyze PSBT
*SatstreamJavascriptSdk.PSBTsApi* | [**combinePsbt**](docs/PSBTsApi.md#combinePsbt) | **POST** /psbt/combine | Combine PSBTs
*SatstreamJavascriptSdk.PSBTsApi* | [**createPsbt**](docs/PSBTsApi.md#createPsbt) | **POST** /psbt/create | Create PSBT
*SatstreamJavascriptSdk.PSBTsApi* | [**decodePsbt**](docs/PSBTsApi.md#decodePsbt) | **POST** /psbt/decode | Decode PSBT
*SatstreamJavascriptSdk.PSBTsApi* | [**joinPsbts**](docs/PSBTsApi.md#joinPsbts) | **POST** /psbt/join | Join PSBTs
*SatstreamJavascriptSdk.RunesApi* | [**getLatestRunes**](docs/RunesApi.md#getLatestRunes) | **GET** /runes | Get latest runes
*SatstreamJavascriptSdk.RunesApi* | [**getLatestRunesPage**](docs/RunesApi.md#getLatestRunesPage) | **GET** /runes/{page} | Get latest runes page
*SatstreamJavascriptSdk.RunesApi* | [**getRune**](docs/RunesApi.md#getRune) | **GET** /rune/{rune_name} | Get rune info
*SatstreamJavascriptSdk.SatoshisApi* | [**getSatoshi**](docs/SatoshisApi.md#getSatoshi) | **GET** /sat/{number} | Get satoshi info
*SatstreamJavascriptSdk.ScriptsApi* | [**decodeScript**](docs/ScriptsApi.md#decodeScript) | **POST** /script/decode | Decode Script
*SatstreamJavascriptSdk.StatusApi* | [**getStatus**](docs/StatusApi.md#getStatus) | **GET** /status | Get server status
*SatstreamJavascriptSdk.TransactionsApi* | [**combineRawTransaction**](docs/TransactionsApi.md#combineRawTransaction) | **POST** /tx/combine | Combine Raw Transactions
*SatstreamJavascriptSdk.TransactionsApi* | [**convertToPsbt**](docs/TransactionsApi.md#convertToPsbt) | **POST** /tx/convert-to-psbt | Convert Raw Transaction to PSBT
*SatstreamJavascriptSdk.TransactionsApi* | [**createRawTransaction**](docs/TransactionsApi.md#createRawTransaction) | **POST** /tx/create | Create Raw Transaction
*SatstreamJavascriptSdk.TransactionsApi* | [**decodeTx**](docs/TransactionsApi.md#decodeTx) | **GET** /tx/{txid}/decode | Decode a transaction
*SatstreamJavascriptSdk.TransactionsApi* | [**getRawTransactionDecoded**](docs/TransactionsApi.md#getRawTransactionDecoded) | **GET** /tx/{txid}/decoded | Get raw transaction (verbosity 1)
*SatstreamJavascriptSdk.TransactionsApi* | [**getRawTransactionHex**](docs/TransactionsApi.md#getRawTransactionHex) | **GET** /tx/{txid}/hex | Get raw transaction (verbosity 0)
*SatstreamJavascriptSdk.TransactionsApi* | [**getRawTransactionPrevout**](docs/TransactionsApi.md#getRawTransactionPrevout) | **GET** /tx/{txid}/prevout | Get raw transaction (verbosity 2)
*SatstreamJavascriptSdk.TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#getTransaction) | **GET** /tx/{txid} | Get transaction info
*SatstreamJavascriptSdk.TransactionsApi* | [**getTxOut**](docs/TransactionsApi.md#getTxOut) | **POST** /tx/out | Get transaction output
*SatstreamJavascriptSdk.TransactionsApi* | [**getTxOutProof**](docs/TransactionsApi.md#getTxOutProof) | **POST** /tx/outproof | Get transaction output proof
*SatstreamJavascriptSdk.TransactionsApi* | [**getTxOutSetInfo**](docs/TransactionsApi.md#getTxOutSetInfo) | **POST** /tx/out/set/info | Get transaction output set information
*SatstreamJavascriptSdk.TransactionsApi* | [**getTxSpendingPrevout**](docs/TransactionsApi.md#getTxSpendingPrevout) | **POST** /tx/spending-prevout | Get transaction spending prevout
*SatstreamJavascriptSdk.TransactionsApi* | [**sendRawTransaction**](docs/TransactionsApi.md#sendRawTransaction) | **POST** /tx/send | Send raw transaction
*SatstreamJavascriptSdk.TransactionsApi* | [**verifyTxOutProof**](docs/TransactionsApi.md#verifyTxOutProof) | **POST** /tx/outproof/verify | Verify transaction output proof

## Documentation for Models

 - [SatstreamJavascriptSdk.AddressResponse](docs/AddressResponse.md)
 - [SatstreamJavascriptSdk.AllOfBlockVin2ScriptSig](docs/AllOfBlockVin2ScriptSig.md)
 - [SatstreamJavascriptSdk.AllOfBlockVin3Prevout](docs/AllOfBlockVin3Prevout.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTInputFinalScriptsig](docs/AllOfDecodedPSBTInputFinalScriptsig.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTInputNonWitnessUtxo](docs/AllOfDecodedPSBTInputNonWitnessUtxo.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTInputRedeemScript](docs/AllOfDecodedPSBTInputRedeemScript.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTInputWitnessScript](docs/AllOfDecodedPSBTInputWitnessScript.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTInputWitnessUtxo](docs/AllOfDecodedPSBTInputWitnessUtxo.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTOutputRedeemScript](docs/AllOfDecodedPSBTOutputRedeemScript.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTOutputWitnessScript](docs/AllOfDecodedPSBTOutputWitnessScript.md)
 - [SatstreamJavascriptSdk.AllOfDecodedPSBTTx](docs/AllOfDecodedPSBTTx.md)
 - [SatstreamJavascriptSdk.AllOfDecodedScriptSegwit](docs/AllOfDecodedScriptSegwit.md)
 - [SatstreamJavascriptSdk.AllOfFeeHorizonEstimateFail](docs/AllOfFeeHorizonEstimateFail.md)
 - [SatstreamJavascriptSdk.AllOfFeeHorizonEstimatePass](docs/AllOfFeeHorizonEstimatePass.md)
 - [SatstreamJavascriptSdk.AllOfMempoolEntryFees](docs/AllOfMempoolEntryFees.md)
 - [SatstreamJavascriptSdk.AllOfPSBTWitnessUtxoScriptPubKey](docs/AllOfPSBTWitnessUtxoScriptPubKey.md)
 - [SatstreamJavascriptSdk.AllOfRawFeeEstimateMedium](docs/AllOfRawFeeEstimateMedium.md)
 - [SatstreamJavascriptSdk.AllOfRawFeeEstimateModelLong](docs/AllOfRawFeeEstimateModelLong.md)
 - [SatstreamJavascriptSdk.AllOfRawFeeEstimateModelShort](docs/AllOfRawFeeEstimateModelShort.md)
 - [SatstreamJavascriptSdk.AllOfRawMempoolDataSequence](docs/AllOfRawMempoolDataSequence.md)
 - [SatstreamJavascriptSdk.AllOfRuneListEntryModel1](docs/AllOfRuneListEntryModel1.md)
 - [SatstreamJavascriptSdk.AllOfTestMempoolAcceptResultFees](docs/AllOfTestMempoolAcceptResultFees.md)
 - [SatstreamJavascriptSdk.AllOfTxOutScriptPubKey](docs/AllOfTxOutScriptPubKey.md)
 - [SatstreamJavascriptSdk.AllOfUTXOBlockInfoUnspendables](docs/AllOfUTXOBlockInfoUnspendables.md)
 - [SatstreamJavascriptSdk.AllOfUTXOSetInfoBlockInfo](docs/AllOfUTXOSetInfoBlockInfo.md)
 - [SatstreamJavascriptSdk.Bip32Deriv](docs/Bip32Deriv.md)
 - [SatstreamJavascriptSdk.Block1](docs/Block1.md)
 - [SatstreamJavascriptSdk.Block2](docs/Block2.md)
 - [SatstreamJavascriptSdk.Block3](docs/Block3.md)
 - [SatstreamJavascriptSdk.BlockResponse](docs/BlockResponse.md)
 - [SatstreamJavascriptSdk.BlockStats](docs/BlockStats.md)
 - [SatstreamJavascriptSdk.BlockVin2](docs/BlockVin2.md)
 - [SatstreamJavascriptSdk.BlockVin3](docs/BlockVin3.md)
 - [SatstreamJavascriptSdk.BlockchainInfo](docs/BlockchainInfo.md)
 - [SatstreamJavascriptSdk.BlocksResponse](docs/BlocksResponse.md)
 - [SatstreamJavascriptSdk.BtcTx2](docs/BtcTx2.md)
 - [SatstreamJavascriptSdk.BtcTx3](docs/BtcTx3.md)
 - [SatstreamJavascriptSdk.ChainTxStats](docs/ChainTxStats.md)
 - [SatstreamJavascriptSdk.DecodeResponse](docs/DecodeResponse.md)
 - [SatstreamJavascriptSdk.DecodedInscription](docs/DecodedInscription.md)
 - [SatstreamJavascriptSdk.DecodedPSBT](docs/DecodedPSBT.md)
 - [SatstreamJavascriptSdk.DecodedPSBTInput](docs/DecodedPSBTInput.md)
 - [SatstreamJavascriptSdk.DecodedPSBTOutput](docs/DecodedPSBTOutput.md)
 - [SatstreamJavascriptSdk.DecodedScript](docs/DecodedScript.md)
 - [SatstreamJavascriptSdk.Duration](docs/Duration.md)
 - [SatstreamJavascriptSdk.FeeHorizonEstimate](docs/FeeHorizonEstimate.md)
 - [SatstreamJavascriptSdk.FeeRange](docs/FeeRange.md)
 - [SatstreamJavascriptSdk.InlineResponse200](docs/InlineResponse200.md)
 - [SatstreamJavascriptSdk.InlineResponse2001](docs/InlineResponse2001.md)
 - [SatstreamJavascriptSdk.InlineResponse20010](docs/InlineResponse20010.md)
 - [SatstreamJavascriptSdk.InlineResponse20011](docs/InlineResponse20011.md)
 - [SatstreamJavascriptSdk.InlineResponse20012](docs/InlineResponse20012.md)
 - [SatstreamJavascriptSdk.InlineResponse20013](docs/InlineResponse20013.md)
 - [SatstreamJavascriptSdk.InlineResponse20014](docs/InlineResponse20014.md)
 - [SatstreamJavascriptSdk.InlineResponse20015](docs/InlineResponse20015.md)
 - [SatstreamJavascriptSdk.InlineResponse20016](docs/InlineResponse20016.md)
 - [SatstreamJavascriptSdk.InlineResponse20017](docs/InlineResponse20017.md)
 - [SatstreamJavascriptSdk.InlineResponse20018](docs/InlineResponse20018.md)
 - [SatstreamJavascriptSdk.InlineResponse20019](docs/InlineResponse20019.md)
 - [SatstreamJavascriptSdk.InlineResponse2002](docs/InlineResponse2002.md)
 - [SatstreamJavascriptSdk.InlineResponse20020](docs/InlineResponse20020.md)
 - [SatstreamJavascriptSdk.InlineResponse20021](docs/InlineResponse20021.md)
 - [SatstreamJavascriptSdk.InlineResponse20022](docs/InlineResponse20022.md)
 - [SatstreamJavascriptSdk.InlineResponse20023](docs/InlineResponse20023.md)
 - [SatstreamJavascriptSdk.InlineResponse20024](docs/InlineResponse20024.md)
 - [SatstreamJavascriptSdk.InlineResponse20025](docs/InlineResponse20025.md)
 - [SatstreamJavascriptSdk.InlineResponse20026](docs/InlineResponse20026.md)
 - [SatstreamJavascriptSdk.InlineResponse20027](docs/InlineResponse20027.md)
 - [SatstreamJavascriptSdk.InlineResponse20028](docs/InlineResponse20028.md)
 - [SatstreamJavascriptSdk.InlineResponse20029](docs/InlineResponse20029.md)
 - [SatstreamJavascriptSdk.InlineResponse2003](docs/InlineResponse2003.md)
 - [SatstreamJavascriptSdk.InlineResponse20030](docs/InlineResponse20030.md)
 - [SatstreamJavascriptSdk.InlineResponse20031](docs/InlineResponse20031.md)
 - [SatstreamJavascriptSdk.InlineResponse20032](docs/InlineResponse20032.md)
 - [SatstreamJavascriptSdk.InlineResponse20033](docs/InlineResponse20033.md)
 - [SatstreamJavascriptSdk.InlineResponse20034](docs/InlineResponse20034.md)
 - [SatstreamJavascriptSdk.InlineResponse20035](docs/InlineResponse20035.md)
 - [SatstreamJavascriptSdk.InlineResponse20036](docs/InlineResponse20036.md)
 - [SatstreamJavascriptSdk.InlineResponse20037](docs/InlineResponse20037.md)
 - [SatstreamJavascriptSdk.InlineResponse20038](docs/InlineResponse20038.md)
 - [SatstreamJavascriptSdk.InlineResponse20039](docs/InlineResponse20039.md)
 - [SatstreamJavascriptSdk.InlineResponse2004](docs/InlineResponse2004.md)
 - [SatstreamJavascriptSdk.InlineResponse20040](docs/InlineResponse20040.md)
 - [SatstreamJavascriptSdk.InlineResponse2005](docs/InlineResponse2005.md)
 - [SatstreamJavascriptSdk.InlineResponse2006](docs/InlineResponse2006.md)
 - [SatstreamJavascriptSdk.InlineResponse2007](docs/InlineResponse2007.md)
 - [SatstreamJavascriptSdk.InlineResponse2008](docs/InlineResponse2008.md)
 - [SatstreamJavascriptSdk.InlineResponse2009](docs/InlineResponse2009.md)
 - [SatstreamJavascriptSdk.Input](docs/Input.md)
 - [SatstreamJavascriptSdk.InscriptionData](docs/InscriptionData.md)
 - [SatstreamJavascriptSdk.InscriptionResponse](docs/InscriptionResponse.md)
 - [SatstreamJavascriptSdk.LatestInscriptionsResponse](docs/LatestInscriptionsResponse.md)
 - [SatstreamJavascriptSdk.MempoolAncestorsData](docs/MempoolAncestorsData.md)
 - [SatstreamJavascriptSdk.MempoolDescendantsData](docs/MempoolDescendantsData.md)
 - [SatstreamJavascriptSdk.MempoolEntry](docs/MempoolEntry.md)
 - [SatstreamJavascriptSdk.MempoolFees](docs/MempoolFees.md)
 - [SatstreamJavascriptSdk.MempoolInfo](docs/MempoolInfo.md)
 - [SatstreamJavascriptSdk.MempoolSequence](docs/MempoolSequence.md)
 - [SatstreamJavascriptSdk.MiningInfo](docs/MiningInfo.md)
 - [SatstreamJavascriptSdk.Output](docs/Output.md)
 - [SatstreamJavascriptSdk.OutputResponse](docs/OutputResponse.md)
 - [SatstreamJavascriptSdk.PSBTAnalysis](docs/PSBTAnalysis.md)
 - [SatstreamJavascriptSdk.PSBTBip32Deriv](docs/PSBTBip32Deriv.md)
 - [SatstreamJavascriptSdk.PSBTInputAnalysis](docs/PSBTInputAnalysis.md)
 - [SatstreamJavascriptSdk.PSBTMissingData](docs/PSBTMissingData.md)
 - [SatstreamJavascriptSdk.PSBTWitnessUtxo](docs/PSBTWitnessUtxo.md)
 - [SatstreamJavascriptSdk.PrevOut](docs/PrevOut.md)
 - [SatstreamJavascriptSdk.RawFeeEstimate](docs/RawFeeEstimate.md)
 - [SatstreamJavascriptSdk.RawMempoolData](docs/RawMempoolData.md)
 - [SatstreamJavascriptSdk.RawTx1](docs/RawTx1.md)
 - [SatstreamJavascriptSdk.RawTx2](docs/RawTx2.md)
 - [SatstreamJavascriptSdk.RequestsAnalyzePSBTRequest](docs/RequestsAnalyzePSBTRequest.md)
 - [SatstreamJavascriptSdk.RequestsCombinePSBTRequest](docs/RequestsCombinePSBTRequest.md)
 - [SatstreamJavascriptSdk.RequestsCombineRawTransactionRequest](docs/RequestsCombineRawTransactionRequest.md)
 - [SatstreamJavascriptSdk.RequestsConvertToPSBTRequest](docs/RequestsConvertToPSBTRequest.md)
 - [SatstreamJavascriptSdk.RequestsCreatePSBTInput](docs/RequestsCreatePSBTInput.md)
 - [SatstreamJavascriptSdk.RequestsCreatePSBTOutput](docs/RequestsCreatePSBTOutput.md)
 - [SatstreamJavascriptSdk.RequestsCreatePSBTRequest](docs/RequestsCreatePSBTRequest.md)
 - [SatstreamJavascriptSdk.RequestsCreateRawTxInput](docs/RequestsCreateRawTxInput.md)
 - [SatstreamJavascriptSdk.RequestsCreateRawTxOutput](docs/RequestsCreateRawTxOutput.md)
 - [SatstreamJavascriptSdk.RequestsCreateRawTxRequest](docs/RequestsCreateRawTxRequest.md)
 - [SatstreamJavascriptSdk.RequestsDecodeScriptRequest](docs/RequestsDecodeScriptRequest.md)
 - [SatstreamJavascriptSdk.RequestsEstimateRawFeeRequest](docs/RequestsEstimateRawFeeRequest.md)
 - [SatstreamJavascriptSdk.RequestsEstimateSmartFeeRequest](docs/RequestsEstimateSmartFeeRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetBlockStatsRequest](docs/RequestsGetBlockStatsRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetChainTxStatsRequest](docs/RequestsGetChainTxStatsRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetMempoolAncestorsRequest](docs/RequestsGetMempoolAncestorsRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetMempoolDescendantsRequest](docs/RequestsGetMempoolDescendantsRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetNetworkHashPSRequest](docs/RequestsGetNetworkHashPSRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetRawMempoolRequest](docs/RequestsGetRawMempoolRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetTxOutProofRequest](docs/RequestsGetTxOutProofRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetTxOutRequest](docs/RequestsGetTxOutRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetTxOutSetInfoRequest](docs/RequestsGetTxOutSetInfoRequest.md)
 - [SatstreamJavascriptSdk.RequestsGetTxSpendingPrevoutRequest](docs/RequestsGetTxSpendingPrevoutRequest.md)
 - [SatstreamJavascriptSdk.RequestsJoinPSBTsRequest](docs/RequestsJoinPSBTsRequest.md)
 - [SatstreamJavascriptSdk.RequestsSendRawTransactionRequest](docs/RequestsSendRawTransactionRequest.md)
 - [SatstreamJavascriptSdk.RequestsTestMempoolAcceptRequest](docs/RequestsTestMempoolAcceptRequest.md)
 - [SatstreamJavascriptSdk.RequestsVerifyMessageRequest](docs/RequestsVerifyMessageRequest.md)
 - [SatstreamJavascriptSdk.RequestsVerifyTxOutProofRequest](docs/RequestsVerifyTxOutProofRequest.md)
 - [SatstreamJavascriptSdk.RuneEntry](docs/RuneEntry.md)
 - [SatstreamJavascriptSdk.RuneListEntry](docs/RuneListEntry.md)
 - [SatstreamJavascriptSdk.RuneResponse](docs/RuneResponse.md)
 - [SatstreamJavascriptSdk.RuneTerms](docs/RuneTerms.md)
 - [SatstreamJavascriptSdk.RunesBalance](docs/RunesBalance.md)
 - [SatstreamJavascriptSdk.RunesListResponse](docs/RunesListResponse.md)
 - [SatstreamJavascriptSdk.RunestoneData](docs/RunestoneData.md)
 - [SatstreamJavascriptSdk.SatoshiResponse](docs/SatoshiResponse.md)
 - [SatstreamJavascriptSdk.Script](docs/Script.md)
 - [SatstreamJavascriptSdk.ScriptPubKey](docs/ScriptPubKey.md)
 - [SatstreamJavascriptSdk.ScriptSig](docs/ScriptSig.md)
 - [SatstreamJavascriptSdk.SegwitDetails](docs/SegwitDetails.md)
 - [SatstreamJavascriptSdk.SmartFeeEstimate](docs/SmartFeeEstimate.md)
 - [SatstreamJavascriptSdk.StatusResponse](docs/StatusResponse.md)
 - [SatstreamJavascriptSdk.TestMempoolAcceptResult](docs/TestMempoolAcceptResult.md)
 - [SatstreamJavascriptSdk.TestMempoolFees](docs/TestMempoolFees.md)
 - [SatstreamJavascriptSdk.Transaction](docs/Transaction.md)
 - [SatstreamJavascriptSdk.TransactionDetails](docs/TransactionDetails.md)
 - [SatstreamJavascriptSdk.TransactionInput](docs/TransactionInput.md)
 - [SatstreamJavascriptSdk.TransactionOutput](docs/TransactionOutput.md)
 - [SatstreamJavascriptSdk.TransactionResponse](docs/TransactionResponse.md)
 - [SatstreamJavascriptSdk.TxOut](docs/TxOut.md)
 - [SatstreamJavascriptSdk.TxSpendingPrevoutInput](docs/TxSpendingPrevoutInput.md)
 - [SatstreamJavascriptSdk.TxSpendingPrevoutResult](docs/TxSpendingPrevoutResult.md)
 - [SatstreamJavascriptSdk.TxVin1](docs/TxVin1.md)
 - [SatstreamJavascriptSdk.TxVin2](docs/TxVin2.md)
 - [SatstreamJavascriptSdk.UTXOBlockInfo](docs/UTXOBlockInfo.md)
 - [SatstreamJavascriptSdk.UTXOSetInfo](docs/UTXOSetInfo.md)
 - [SatstreamJavascriptSdk.UTXOUnspendables](docs/UTXOUnspendables.md)
 - [SatstreamJavascriptSdk.UtilsResponseEnvelope](docs/UtilsResponseEnvelope.md)
 - [SatstreamJavascriptSdk.ValidateAddressResult](docs/ValidateAddressResult.md)
 - [SatstreamJavascriptSdk.Vout](docs/Vout.md)

## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

