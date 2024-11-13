# satstream_api

SatstreamApi - JavaScript client for satstream_api
Satstream API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://satstream.io](https://satstream.io)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install satstream_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your satstream_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('satstream_api')` in javascript files from the directory you ran the last 
command above from.

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
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

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
var SatstreamApi = require('satstream_api');

var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['X-API-KEY'] = "Token"

var api = new SatstreamApi.AddressesApi()

var address = "address_example"; // {String} Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAddressBalance(address, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.satstream.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SatstreamApi.AddressesApi* | [**getAddressBalance**](docs/AddressesApi.md#getAddressBalance) | **GET** /addresses/{address}/balance | Get address balance
*SatstreamApi.AddressesApi* | [**getAddressNonInscriptionUtxos**](docs/AddressesApi.md#getAddressNonInscriptionUtxos) | **GET** /addresses/{address}/utxos | Get address non-inscription UTXOs
*SatstreamApi.AddressesApi* | [**getAddressRuneBalance**](docs/AddressesApi.md#getAddressRuneBalance) | **GET** /addresses/{address}/runes/{runeid} | Get address rune balance
*SatstreamApi.AddressesApi* | [**getAddressRunesBalanceList**](docs/AddressesApi.md#getAddressRunesBalanceList) | **GET** /addresses/{address}/runes | Get address runes balance list
*SatstreamApi.AddressesApi* | [**getAddressTimeframeBalance**](docs/AddressesApi.md#getAddressTimeframeBalance) | **GET** /addresses/{address}/balance/timeframe | Get address timeframe balance
*SatstreamApi.BlocksApi* | [**getBlockByHash**](docs/BlocksApi.md#getBlockByHash) | **GET** /blocks/hash/{hash} | Get block by hash
*SatstreamApi.BlocksApi* | [**getBlockInfo**](docs/BlocksApi.md#getBlockInfo) | **GET** /blocks/{height} | Get block info
*SatstreamApi.BlocksApi* | [**getBlockTransactions**](docs/BlocksApi.md#getBlockTransactions) | **GET** /blocks/{height}/transactions | Get block transactions
*SatstreamApi.BlocksApi* | [**getCurrentBlockHeight**](docs/BlocksApi.md#getCurrentBlockHeight) | **GET** /blocks/current-height | Get current block height
*SatstreamApi.FeesApi* | [**getRecommendedFees**](docs/FeesApi.md#getRecommendedFees) | **GET** /fees | Get recommended fees
*SatstreamApi.MempoolApi* | [**getAddressMempoolTransactions**](docs/MempoolApi.md#getAddressMempoolTransactions) | **GET** /mempool/addresses/{address}/transactions | Get address mempool transactions
*SatstreamApi.MempoolApi* | [**getMempoolTransactionInfo**](docs/MempoolApi.md#getMempoolTransactionInfo) | **GET** /mempool/transactions/{txid} | Get mempool transaction info
*SatstreamApi.MempoolApi* | [**getMempoolTransactions**](docs/MempoolApi.md#getMempoolTransactions) | **GET** /mempool/transactions | Get mempool transactions
*SatstreamApi.RunesApi* | [**getRunesHolders**](docs/RunesApi.md#getRunesHolders) | **GET** /runes/{runeId}/holders | Get rune holders
*SatstreamApi.RunesApi* | [**getRunesInfo**](docs/RunesApi.md#getRunesInfo) | **GET** /runes/{runeId} | Get rune info
*SatstreamApi.RunesApi* | [**getRunesInfoList**](docs/RunesApi.md#getRunesInfoList) | **GET** /runes | Get runes info list
*SatstreamApi.TransactionsApi* | [**broadcastTransaction**](docs/TransactionsApi.md#broadcastTransaction) | **POST** /transactions/broadcast | Broadcast transaction
*SatstreamApi.TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#getTransaction) | **GET** /indexer/tx/{hash} | Get transaction
*SatstreamApi.TransactionsApi* | [**getTransactionInfo**](docs/TransactionsApi.md#getTransactionInfo) | **GET** /transactions/{txid} | Get transaction info
*SatstreamApi.TransactionsApi* | [**getTransactionInputs**](docs/TransactionsApi.md#getTransactionInputs) | **GET** /transactions/{txid}/inputs | Get transaction inputs


## Documentation for Models

 - [SatstreamApi.BigInt](docs/BigInt.md)
 - [SatstreamApi.BlocksAddressMempoolTxs](docs/BlocksAddressMempoolTxs.md)
 - [SatstreamApi.BlocksBlockByHash](docs/BlocksBlockByHash.md)
 - [SatstreamApi.BlocksBlockHeight](docs/BlocksBlockHeight.md)
 - [SatstreamApi.BlocksBlockHeightData](docs/BlocksBlockHeightData.md)
 - [SatstreamApi.BlocksBlockInfo](docs/BlocksBlockInfo.md)
 - [SatstreamApi.BlocksBlockTransactions](docs/BlocksBlockTransactions.md)
 - [SatstreamApi.BlocksError](docs/BlocksError.md)
 - [SatstreamApi.BlocksFees](docs/BlocksFees.md)
 - [SatstreamApi.BlocksFeesData](docs/BlocksFeesData.md)
 - [SatstreamApi.BlocksMempoolTransactions](docs/BlocksMempoolTransactions.md)
 - [SatstreamApi.BlocksMempoolTxInfo](docs/BlocksMempoolTxInfo.md)
 - [SatstreamApi.GithubComSatstreamSsApiServerApiAddressesResponsesBaseResponse](docs/GithubComSatstreamSsApiServerApiAddressesResponsesBaseResponse.md)
 - [SatstreamApi.GithubComSatstreamSsApiServerApiRunesResponsesBaseResponse](docs/GithubComSatstreamSsApiServerApiRunesResponsesBaseResponse.md)
 - [SatstreamApi.GithubComSatstreamSsApiServerApiTransactionsResponsesBaseResponse](docs/GithubComSatstreamSsApiServerApiTransactionsResponsesBaseResponse.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsOrdinalsTerms](docs/GithubComSatstreamSsUtilsOrdinalsTerms.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsOrdinalsTermsRange](docs/GithubComSatstreamSsUtilsOrdinalsTermsRange.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcBlock](docs/GithubComSatstreamSsUtilsRpcBlock.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcBtcTx](docs/GithubComSatstreamSsUtilsRpcBtcTx.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcPrevOut](docs/GithubComSatstreamSsUtilsRpcPrevOut.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcScriptPubKey](docs/GithubComSatstreamSsUtilsRpcScriptPubKey.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcScriptSig](docs/GithubComSatstreamSsUtilsRpcScriptSig.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcUtxoRune](docs/GithubComSatstreamSsUtilsRpcUtxoRune.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcVin](docs/GithubComSatstreamSsUtilsRpcVin.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsRpcVout](docs/GithubComSatstreamSsUtilsRpcVout.md)
 - [SatstreamApi.GithubComSatstreamSsUtilsStoreTransactionDocument](docs/GithubComSatstreamSsUtilsStoreTransactionDocument.md)
 - [SatstreamApi.InlineResponse200](docs/InlineResponse200.md)
 - [SatstreamApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [SatstreamApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [SatstreamApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [SatstreamApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [SatstreamApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [SatstreamApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [SatstreamApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [SatstreamApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [SatstreamApi.ResponsesBlockRange](docs/ResponsesBlockRange.md)
 - [SatstreamApi.ResponsesErrorResponse](docs/ResponsesErrorResponse.md)
 - [SatstreamApi.ResponsesGetAddressBalance](docs/ResponsesGetAddressBalance.md)
 - [SatstreamApi.ResponsesGetAddressNonInscriptionUTXOData](docs/ResponsesGetAddressNonInscriptionUTXOData.md)
 - [SatstreamApi.ResponsesGetAddressRuneBalance](docs/ResponsesGetAddressRuneBalance.md)
 - [SatstreamApi.ResponsesGetAddressRunesBalanceListItem](docs/ResponsesGetAddressRunesBalanceListItem.md)
 - [SatstreamApi.ResponsesGetAddressTimeframeBalance](docs/ResponsesGetAddressTimeframeBalance.md)
 - [SatstreamApi.ResponsesGetAddressTimeframeBalanceItem](docs/ResponsesGetAddressTimeframeBalanceItem.md)
 - [SatstreamApi.ResponsesGetAddressTimeframeBalanceItemBlockRange](docs/ResponsesGetAddressTimeframeBalanceItemBlockRange.md)
 - [SatstreamApi.ResponsesNonInscriptionUTXO](docs/ResponsesNonInscriptionUTXO.md)
 - [SatstreamApi.ResponsesRuneInfo](docs/ResponsesRuneInfo.md)
 - [SatstreamApi.ResponsesSendRawTransaction](docs/ResponsesSendRawTransaction.md)
 - [SatstreamApi.ResponsesTxInfo](docs/ResponsesTxInfo.md)


## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

