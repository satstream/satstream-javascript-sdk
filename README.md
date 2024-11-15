# satstream-javascript-sdk

SatstreamJavascriptSdk - JavaScript client for satstream-javascript-sdk
Satstream API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0.15
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
*SatstreamJavascriptSdk.AddressesApi* | [**getAddressBalance**](docs/AddressesApi.md#getAddressBalance) | **GET** /addresses/{address}/balance | Get address balance
*SatstreamJavascriptSdk.AddressesApi* | [**getAddressNonInscriptionUtxos**](docs/AddressesApi.md#getAddressNonInscriptionUtxos) | **GET** /addresses/{address}/utxos | Get address non-inscription UTXOs
*SatstreamJavascriptSdk.AddressesApi* | [**getAddressRuneBalance**](docs/AddressesApi.md#getAddressRuneBalance) | **GET** /addresses/{address}/runes/{runeid} | Get address rune balance
*SatstreamJavascriptSdk.AddressesApi* | [**getAddressRunesBalanceList**](docs/AddressesApi.md#getAddressRunesBalanceList) | **GET** /addresses/{address}/runes | Get address runes balance list
*SatstreamJavascriptSdk.AddressesApi* | [**getAddressTimeframeBalance**](docs/AddressesApi.md#getAddressTimeframeBalance) | **GET** /addresses/{address}/balance/timeframe | Get address timeframe balance
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockByHash**](docs/BlocksApi.md#getBlockByHash) | **GET** /blocks/hash/{hash} | Get block by hash
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockInfo**](docs/BlocksApi.md#getBlockInfo) | **GET** /blocks/{height} | Get block info
*SatstreamJavascriptSdk.BlocksApi* | [**getBlockTransactions**](docs/BlocksApi.md#getBlockTransactions) | **GET** /blocks/{height}/transactions | Get block transactions
*SatstreamJavascriptSdk.BlocksApi* | [**getCurrentBlockHeight**](docs/BlocksApi.md#getCurrentBlockHeight) | **GET** /blocks/current-height | Get current block height
*SatstreamJavascriptSdk.FeesApi* | [**getRecommendedFees**](docs/FeesApi.md#getRecommendedFees) | **GET** /fees | Get recommended fees
*SatstreamJavascriptSdk.MempoolApi* | [**getAddressMempoolTransactions**](docs/MempoolApi.md#getAddressMempoolTransactions) | **GET** /mempool/addresses/{address}/transactions | Get address mempool transactions
*SatstreamJavascriptSdk.MempoolApi* | [**getMempoolTransactionInfo**](docs/MempoolApi.md#getMempoolTransactionInfo) | **GET** /mempool/transactions/{txid} | Get mempool transaction info
*SatstreamJavascriptSdk.MempoolApi* | [**getMempoolTransactions**](docs/MempoolApi.md#getMempoolTransactions) | **GET** /mempool/transactions | Get mempool transactions
*SatstreamJavascriptSdk.RunesApi* | [**getRunesHolders**](docs/RunesApi.md#getRunesHolders) | **GET** /runes/{runeId}/holders | Get rune holders
*SatstreamJavascriptSdk.RunesApi* | [**getRunesInfo**](docs/RunesApi.md#getRunesInfo) | **GET** /runes/{runeId} | Get rune info
*SatstreamJavascriptSdk.RunesApi* | [**getRunesInfoList**](docs/RunesApi.md#getRunesInfoList) | **GET** /runes | Get runes info list
*SatstreamJavascriptSdk.TransactionsApi* | [**broadcastTransaction**](docs/TransactionsApi.md#broadcastTransaction) | **POST** /transactions/broadcast | Broadcast transaction
*SatstreamJavascriptSdk.TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#getTransaction) | **GET** /indexer/tx/{hash} | Get transaction
*SatstreamJavascriptSdk.TransactionsApi* | [**getTransactionInfo**](docs/TransactionsApi.md#getTransactionInfo) | **GET** /transactions/{txid} | Get transaction info

## Documentation for Models

 - [SatstreamJavascriptSdk.AllOfresponsesGetAddressTimeframeBalanceItemBlockRange](docs/AllOfresponsesGetAddressTimeframeBalanceItemBlockRange.md)
 - [SatstreamJavascriptSdk.BigInt](docs/BigInt.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiAddressesResponsesError](docs/GithubComSatstreamSsApiServerApiAddressesResponsesError.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiBlocksResponsesError](docs/GithubComSatstreamSsApiServerApiBlocksResponsesError.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiRunesResponsesError](docs/GithubComSatstreamSsApiServerApiRunesResponsesError.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiTransactionsResponsesError](docs/GithubComSatstreamSsApiServerApiTransactionsResponsesError.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsOrdinalsTerms](docs/GithubComSatstreamSsUtilsOrdinalsTerms.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsOrdinalsTermsRange](docs/GithubComSatstreamSsUtilsOrdinalsTermsRange.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcBlock](docs/GithubComSatstreamSsUtilsRpcBlock.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcBtcTx](docs/GithubComSatstreamSsUtilsRpcBtcTx.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcPrevOut](docs/GithubComSatstreamSsUtilsRpcPrevOut.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcScriptPubKey](docs/GithubComSatstreamSsUtilsRpcScriptPubKey.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcScriptSig](docs/GithubComSatstreamSsUtilsRpcScriptSig.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcUtxoRune](docs/GithubComSatstreamSsUtilsRpcUtxoRune.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcVin](docs/GithubComSatstreamSsUtilsRpcVin.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcVout](docs/GithubComSatstreamSsUtilsRpcVout.md)
 - [SatstreamJavascriptSdk.GithubComSatstreamSsUtilsStoreTransactionDocument](docs/GithubComSatstreamSsUtilsStoreTransactionDocument.md)
 - [SatstreamJavascriptSdk.ResponsesBlockRange](docs/ResponsesBlockRange.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressBalance](docs/ResponsesGetAddressBalance.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressBalanceData](docs/ResponsesGetAddressBalanceData.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressMempoolTxs](docs/ResponsesGetAddressMempoolTxs.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressNonInscriptionUTXO](docs/ResponsesGetAddressNonInscriptionUTXO.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressNonInscriptionUTXOData](docs/ResponsesGetAddressNonInscriptionUTXOData.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressRuneBalance](docs/ResponsesGetAddressRuneBalance.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressRuneBalanceData](docs/ResponsesGetAddressRuneBalanceData.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressRunesBalanceList](docs/ResponsesGetAddressRunesBalanceList.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressRunesBalanceListData](docs/ResponsesGetAddressRunesBalanceListData.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressRunesBalanceListItem](docs/ResponsesGetAddressRunesBalanceListItem.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressTimeframeBalance](docs/ResponsesGetAddressTimeframeBalance.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressTimeframeBalanceData](docs/ResponsesGetAddressTimeframeBalanceData.md)
 - [SatstreamJavascriptSdk.ResponsesGetAddressTimeframeBalanceItem](docs/ResponsesGetAddressTimeframeBalanceItem.md)
 - [SatstreamJavascriptSdk.ResponsesGetBlockByHash](docs/ResponsesGetBlockByHash.md)
 - [SatstreamJavascriptSdk.ResponsesGetBlockHeight](docs/ResponsesGetBlockHeight.md)
 - [SatstreamJavascriptSdk.ResponsesGetBlockHeightData](docs/ResponsesGetBlockHeightData.md)
 - [SatstreamJavascriptSdk.ResponsesGetBlockInfo](docs/ResponsesGetBlockInfo.md)
 - [SatstreamJavascriptSdk.ResponsesGetBlockTransactions](docs/ResponsesGetBlockTransactions.md)
 - [SatstreamJavascriptSdk.ResponsesGetFees](docs/ResponsesGetFees.md)
 - [SatstreamJavascriptSdk.ResponsesGetFeesData](docs/ResponsesGetFeesData.md)
 - [SatstreamJavascriptSdk.ResponsesGetMempoolTransactions](docs/ResponsesGetMempoolTransactions.md)
 - [SatstreamJavascriptSdk.ResponsesGetMempoolTxInfo](docs/ResponsesGetMempoolTxInfo.md)
 - [SatstreamJavascriptSdk.ResponsesGetRuneHolders](docs/ResponsesGetRuneHolders.md)
 - [SatstreamJavascriptSdk.ResponsesGetRuneHoldersData](docs/ResponsesGetRuneHoldersData.md)
 - [SatstreamJavascriptSdk.ResponsesGetRuneInfo](docs/ResponsesGetRuneInfo.md)
 - [SatstreamJavascriptSdk.ResponsesGetRunesInfoList](docs/ResponsesGetRunesInfoList.md)
 - [SatstreamJavascriptSdk.ResponsesGetRunesInfoListData](docs/ResponsesGetRunesInfoListData.md)
 - [SatstreamJavascriptSdk.ResponsesGetTransaction](docs/ResponsesGetTransaction.md)
 - [SatstreamJavascriptSdk.ResponsesGetTxInfo](docs/ResponsesGetTxInfo.md)
 - [SatstreamJavascriptSdk.ResponsesGetTxInfoData](docs/ResponsesGetTxInfoData.md)
 - [SatstreamJavascriptSdk.ResponsesNonInscriptionUTXO](docs/ResponsesNonInscriptionUTXO.md)
 - [SatstreamJavascriptSdk.ResponsesPaginationInfo](docs/ResponsesPaginationInfo.md)
 - [SatstreamJavascriptSdk.ResponsesRuneHolder](docs/ResponsesRuneHolder.md)
 - [SatstreamJavascriptSdk.ResponsesRuneInfo](docs/ResponsesRuneInfo.md)
 - [SatstreamJavascriptSdk.ResponsesSendRawTransaction](docs/ResponsesSendRawTransaction.md)
 - [SatstreamJavascriptSdk.ResponsesSendRawTransactionData](docs/ResponsesSendRawTransactionData.md)

## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

