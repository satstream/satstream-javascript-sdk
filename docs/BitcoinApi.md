# SatstreamJavascriptSdk.BitcoinApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzePsbt**](BitcoinApi.md#analyzePsbt) | **POST** /psbt/analyze | Analyze PSBT
[**combinePsbt**](BitcoinApi.md#combinePsbt) | **POST** /psbt/combine | Combine PSBTs
[**combineRawTransaction**](BitcoinApi.md#combineRawTransaction) | **POST** /tx/combine | Combine Raw Transactions
[**convertToPsbt**](BitcoinApi.md#convertToPsbt) | **POST** /tx/convert-to-psbt | Convert Raw Transaction to PSBT
[**createPsbt**](BitcoinApi.md#createPsbt) | **POST** /psbt/create | Create PSBT
[**createRawTransaction**](BitcoinApi.md#createRawTransaction) | **POST** /tx/create | Create Raw Transaction
[**decodePsbt**](BitcoinApi.md#decodePsbt) | **POST** /psbt/decode | Decode PSBT
[**decodeScript**](BitcoinApi.md#decodeScript) | **POST** /script/decode | Decode Script
[**estimateRawFee**](BitcoinApi.md#estimateRawFee) | **POST** /fee/estimate-raw | Estimate Raw Fee
[**estimateSmartFee**](BitcoinApi.md#estimateSmartFee) | **POST** /fee/estimate-smart | Estimate smart fee
[**getBlockByHashDecoded**](BitcoinApi.md#getBlockByHashDecoded) | **GET** /block/hash/{hash}/decoded | Get block by hash (verbosity 2)
[**getBlockByHashHex**](BitcoinApi.md#getBlockByHashHex) | **GET** /block/hash/{hash}/hex | Get block by hash (verbosity 0)
[**getBlockByHashPrevout**](BitcoinApi.md#getBlockByHashPrevout) | **GET** /block/hash/{hash}/prevout | Get block by hash (verbosity 3)
[**getBlockByHashSummary**](BitcoinApi.md#getBlockByHashSummary) | **GET** /block/hash/{hash}/summary | Get block by hash (verbosity 1)
[**getBlockByHeightDecoded**](BitcoinApi.md#getBlockByHeightDecoded) | **GET** /block/height/{height}/decoded | Get block by height (verbosity 2)
[**getBlockByHeightHex**](BitcoinApi.md#getBlockByHeightHex) | **GET** /block/height/{height}/hex | Get block by height (verbosity 0)
[**getBlockByHeightPrevout**](BitcoinApi.md#getBlockByHeightPrevout) | **GET** /block/height/{height}/prevout | Get block by height (verbosity 3)
[**getBlockByHeightSummary**](BitcoinApi.md#getBlockByHeightSummary) | **GET** /block/height/{height}/summary | Get block by height (verbosity 1)
[**getBlockStats**](BitcoinApi.md#getBlockStats) | **POST** /block/stats | Get block stats
[**getBlockchainInfo**](BitcoinApi.md#getBlockchainInfo) | **GET** /blockchain/info | Get blockchain information
[**getChainTxStats**](BitcoinApi.md#getChainTxStats) | **POST** /chain/txstats | Get chain tx stats
[**getDifficulty**](BitcoinApi.md#getDifficulty) | **GET** /difficulty | Get difficulty
[**getMempoolAncestors**](BitcoinApi.md#getMempoolAncestors) | **POST** /mempool/ancestors | Get mempool ancestors
[**getMempoolDescendants**](BitcoinApi.md#getMempoolDescendants) | **POST** /mempool/descendants | Get mempool descendants
[**getMempoolInfo**](BitcoinApi.md#getMempoolInfo) | **GET** /mempool/info | Get mempool information
[**getMiningInfo**](BitcoinApi.md#getMiningInfo) | **GET** /mining/info | Get mining information
[**getNetworkHashps**](BitcoinApi.md#getNetworkHashps) | **POST** /network/hashps | Get network hash per second
[**getRawMempool**](BitcoinApi.md#getRawMempool) | **POST** /mempool/raw | Get raw mempool
[**getRawTransactionDecoded**](BitcoinApi.md#getRawTransactionDecoded) | **GET** /tx/{txid}/decoded | Get raw transaction (verbosity 1)
[**getRawTransactionHex**](BitcoinApi.md#getRawTransactionHex) | **GET** /tx/{txid}/hex | Get raw transaction (verbosity 0)
[**getRawTransactionPrevout**](BitcoinApi.md#getRawTransactionPrevout) | **GET** /tx/{txid}/prevout | Get raw transaction (verbosity 2)
[**getTxOut**](BitcoinApi.md#getTxOut) | **POST** /tx/out | Get transaction output
[**getTxOutProof**](BitcoinApi.md#getTxOutProof) | **POST** /tx/out/proof | Get transaction output proof
[**getTxOutSetInfo**](BitcoinApi.md#getTxOutSetInfo) | **POST** /tx/out/set/info | Get transaction output set information
[**getTxSpendingPrevout**](BitcoinApi.md#getTxSpendingPrevout) | **POST** /tx/spending/prevout | Get transaction spending prevout
[**joinPsbts**](BitcoinApi.md#joinPsbts) | **POST** /psbt/join | Join PSBTs
[**sendRawTransaction**](BitcoinApi.md#sendRawTransaction) | **POST** /tx/send | Send raw transaction
[**testMempoolAccept**](BitcoinApi.md#testMempoolAccept) | **POST** /mempool/test-accept | Test mempool accept
[**validateAddress**](BitcoinApi.md#validateAddress) | **GET** /address/{address}/validate | Validate address
[**verifyMessage**](BitcoinApi.md#verifyMessage) | **POST** /address/verify-message | Verify message
[**verifyTxOutProof**](BitcoinApi.md#verifyTxOutProof) | **POST** /tx/out/proof/verify | Verify transaction output proof

<a name="analyzePsbt"></a>
# **analyzePsbt**
> ResponsesAnalyzePSBTResponse analyzePsbt(body)

Analyze PSBT

Analyzes and provides information about the current status of a PSBT and its inputs

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsAnalyzePSBTRequest(); // RequestsAnalyzePSBTRequest | PSBT to analyze

apiInstance.analyzePsbt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsAnalyzePSBTRequest**](RequestsAnalyzePSBTRequest.md)| PSBT to analyze | 

### Return type

[**ResponsesAnalyzePSBTResponse**](ResponsesAnalyzePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combinePsbt"></a>
# **combinePsbt**
> ResponsesCombinePSBTResponse combinePsbt(body)

Combine PSBTs

Combines multiple partially signed Bitcoin transactions into one transaction

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsCombinePSBTRequest(); // RequestsCombinePSBTRequest | Array of PSBTs to combine

apiInstance.combinePsbt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsCombinePSBTRequest**](RequestsCombinePSBTRequest.md)| Array of PSBTs to combine | 

### Return type

[**ResponsesCombinePSBTResponse**](ResponsesCombinePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combineRawTransaction"></a>
# **combineRawTransaction**
> ResponsesCombineRawTransactionResponse combineRawTransaction(body)

Combine Raw Transactions

Combines multiple partially signed transactions into one transaction

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsCombineRawTransactionRequest(); // RequestsCombineRawTransactionRequest | Array of hex-encoded raw transactions

apiInstance.combineRawTransaction(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsCombineRawTransactionRequest**](RequestsCombineRawTransactionRequest.md)| Array of hex-encoded raw transactions | 

### Return type

[**ResponsesCombineRawTransactionResponse**](ResponsesCombineRawTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="convertToPsbt"></a>
# **convertToPsbt**
> ResponsesConvertToPSBTResponse convertToPsbt(body)

Convert Raw Transaction to PSBT

Converts a network serialized transaction to a PSBT. This should be used only with createrawtransaction and fundrawtransaction. createpsbt and walletcreatefundedpsbt should be used for new applications.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsConvertToPSBTRequest(); // RequestsConvertToPSBTRequest | Raw transaction conversion parameters

apiInstance.convertToPsbt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsConvertToPSBTRequest**](RequestsConvertToPSBTRequest.md)| Raw transaction conversion parameters | 

### Return type

[**ResponsesConvertToPSBTResponse**](ResponsesConvertToPSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPsbt"></a>
# **createPsbt**
> ResponsesCreatePSBTResponse createPsbt(body)

Create PSBT

Creates a transaction in the Partially Signed Transaction format. Implements the Creator role.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest(); // GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest | Transaction parameters

apiInstance.createPsbt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest**](GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest.md)| Transaction parameters | 

### Return type

[**ResponsesCreatePSBTResponse**](ResponsesCreatePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRawTransaction"></a>
# **createRawTransaction**
> ResponsesCreateRawTransactionResponse createRawTransaction(body)

Create Raw Transaction

Creates a raw transaction spending the given inputs and creating new outputs. Note that the transaction&#x27;s inputs are not signed, and it is not stored in the wallet or transmitted to the network.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.GithubComSatstreamSsApiServerApiTransactionRequestsCreatePSBTRequest(); // GithubComSatstreamSsApiServerApiTransactionRequestsCreatePSBTRequest | Transaction parameters

apiInstance.createRawTransaction(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GithubComSatstreamSsApiServerApiTransactionRequestsCreatePSBTRequest**](GithubComSatstreamSsApiServerApiTransactionRequestsCreatePSBTRequest.md)| Transaction parameters | 

### Return type

[**ResponsesCreateRawTransactionResponse**](ResponsesCreateRawTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decodePsbt"></a>
# **decodePsbt**
> ResponsesDecodePSBTResponse decodePsbt(body)

Decode PSBT

Return a JSON object representing the serialized, base64-encoded partially signed Bitcoin transaction.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsAnalyzePSBTRequest(); // RequestsAnalyzePSBTRequest | PSBT to decode

apiInstance.decodePsbt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsAnalyzePSBTRequest**](RequestsAnalyzePSBTRequest.md)| PSBT to decode | 

### Return type

[**ResponsesDecodePSBTResponse**](ResponsesDecodePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decodeScript"></a>
# **decodeScript**
> ResponsesDecodeScriptResponse decodeScript(body)

Decode Script

Decode a hex-encoded script and return detailed information about it.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsDecodeScriptRequest(); // RequestsDecodeScriptRequest | Script to decode

apiInstance.decodeScript(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsDecodeScriptRequest**](RequestsDecodeScriptRequest.md)| Script to decode | 

### Return type

[**ResponsesDecodeScriptResponse**](ResponsesDecodeScriptResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="estimateRawFee"></a>
# **estimateRawFee**
> ResponsesEstimateRawFeeResponse estimateRawFee(body)

Estimate Raw Fee

Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks if possible.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsEstimateRawFeeRequest(); // RequestsEstimateRawFeeRequest | Fee estimation parameters

apiInstance.estimateRawFee(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsEstimateRawFeeRequest**](RequestsEstimateRawFeeRequest.md)| Fee estimation parameters | 

### Return type

[**ResponsesEstimateRawFeeResponse**](ResponsesEstimateRawFeeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="estimateSmartFee"></a>
# **estimateSmartFee**
> ResponsesEstimateSmartFeeResponse estimateSmartFee(body)

Estimate smart fee

Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsEstimateSmartFeeRequest(); // RequestsEstimateSmartFeeRequest | Fee estimation parameters

apiInstance.estimateSmartFee(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsEstimateSmartFeeRequest**](RequestsEstimateSmartFeeRequest.md)| Fee estimation parameters | 

### Return type

[**ResponsesEstimateSmartFeeResponse**](ResponsesEstimateSmartFeeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockByHashDecoded"></a>
# **getBlockByHashDecoded**
> ResponsesGetBlockDecodedResponse getBlockByHashDecoded(hash)

Get block by hash (verbosity 2)

Get block by hash as a decoded object

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let hash = "hash_example"; // String | Block hash

apiInstance.getBlockByHashDecoded(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Block hash | 

### Return type

[**ResponsesGetBlockDecodedResponse**](ResponsesGetBlockDecodedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHashHex"></a>
# **getBlockByHashHex**
> ResponsesGetBlockHexResponse getBlockByHashHex(hash)

Get block by hash (verbosity 0)

Get block by hash as a raw hex string

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let hash = "hash_example"; // String | Block hash

apiInstance.getBlockByHashHex(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Block hash | 

### Return type

[**ResponsesGetBlockHexResponse**](ResponsesGetBlockHexResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHashPrevout"></a>
# **getBlockByHashPrevout**
> ResponsesGetBlockPrevoutResponse getBlockByHashPrevout(hash)

Get block by hash (verbosity 3)

Get block by hash with prevout information

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let hash = "hash_example"; // String | Block hash

apiInstance.getBlockByHashPrevout(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Block hash | 

### Return type

[**ResponsesGetBlockPrevoutResponse**](ResponsesGetBlockPrevoutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHashSummary"></a>
# **getBlockByHashSummary**
> ResponsesGetBlockSummaryResponse getBlockByHashSummary(hash)

Get block by hash (verbosity 1)

Get block by hash as a summary object

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let hash = "hash_example"; // String | Block hash

apiInstance.getBlockByHashSummary(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Block hash | 

### Return type

[**ResponsesGetBlockSummaryResponse**](ResponsesGetBlockSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHeightDecoded"></a>
# **getBlockByHeightDecoded**
> ResponsesGetBlockDecodedResponse getBlockByHeightDecoded(height)

Get block by height (verbosity 2)

Get block by height as a decoded object

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let height = 56; // Number | Block height

apiInstance.getBlockByHeightDecoded(height, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**ResponsesGetBlockDecodedResponse**](ResponsesGetBlockDecodedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHeightHex"></a>
# **getBlockByHeightHex**
> ResponsesGetBlockHexResponse getBlockByHeightHex(height)

Get block by height (verbosity 0)

Get block by height as a raw hex string

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let height = 56; // Number | Block height

apiInstance.getBlockByHeightHex(height, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**ResponsesGetBlockHexResponse**](ResponsesGetBlockHexResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHeightPrevout"></a>
# **getBlockByHeightPrevout**
> ResponsesGetBlockPrevoutResponse getBlockByHeightPrevout(height)

Get block by height (verbosity 3)

Get block by height with prevout information

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let height = 56; // Number | Block height

apiInstance.getBlockByHeightPrevout(height, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**ResponsesGetBlockPrevoutResponse**](ResponsesGetBlockPrevoutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHeightSummary"></a>
# **getBlockByHeightSummary**
> ResponsesGetBlockSummaryResponse getBlockByHeightSummary(height)

Get block by height (verbosity 1)

Get block by height as a summary object

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let height = 56; // Number | Block height

apiInstance.getBlockByHeightSummary(height, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**ResponsesGetBlockSummaryResponse**](ResponsesGetBlockSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockStats"></a>
# **getBlockStats**
> ResponsesGetBlockStatsResponse getBlockStats(body)

Get block stats

Computes per block statistics for a given window

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetBlockStatsRequest(); // RequestsGetBlockStatsRequest | Block stats request parameters

apiInstance.getBlockStats(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetBlockStatsRequest**](RequestsGetBlockStatsRequest.md)| Block stats request parameters | 

### Return type

[**ResponsesGetBlockStatsResponse**](ResponsesGetBlockStatsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockchainInfo"></a>
# **getBlockchainInfo**
> ResponsesGetBlockchainInfoResponse getBlockchainInfo()

Get blockchain information

Returns an object containing various state info regarding blockchain processing

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
apiInstance.getBlockchainInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponsesGetBlockchainInfoResponse**](ResponsesGetBlockchainInfoResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getChainTxStats"></a>
# **getChainTxStats**
> ResponsesGetChainTxStatsResponse getChainTxStats(body)

Get chain tx stats

Computes statistics about the total number and rate of transactions in the chain

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetChainTxStatsRequest(); // RequestsGetChainTxStatsRequest | Chain tx stats request parameters

apiInstance.getChainTxStats(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetChainTxStatsRequest**](RequestsGetChainTxStatsRequest.md)| Chain tx stats request parameters | 

### Return type

[**ResponsesGetChainTxStatsResponse**](ResponsesGetChainTxStatsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDifficulty"></a>
# **getDifficulty**
> ResponsesGetDifficultyResponse getDifficulty()

Get difficulty

Returns the proof-of-work difficulty as a multiple of the minimum difficulty

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
apiInstance.getDifficulty((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponsesGetDifficultyResponse**](ResponsesGetDifficultyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMempoolAncestors"></a>
# **getMempoolAncestors**
> ResponsesGetMempoolAncestorsResponse getMempoolAncestors(body)

Get mempool ancestors

Returns all in-mempool ancestors for a transaction in the mempool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetMempoolAncestorsRequest(); // RequestsGetMempoolAncestorsRequest | Mempool ancestors request parameters

apiInstance.getMempoolAncestors(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetMempoolAncestorsRequest**](RequestsGetMempoolAncestorsRequest.md)| Mempool ancestors request parameters | 

### Return type

[**ResponsesGetMempoolAncestorsResponse**](ResponsesGetMempoolAncestorsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMempoolDescendants"></a>
# **getMempoolDescendants**
> ResponsesGetMempoolDescendantsResponse getMempoolDescendants(body)

Get mempool descendants

Returns all in-mempool descendants for a transaction in the mempool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetMempoolDescendantsRequest(); // RequestsGetMempoolDescendantsRequest | Mempool descendants request parameters

apiInstance.getMempoolDescendants(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetMempoolDescendantsRequest**](RequestsGetMempoolDescendantsRequest.md)| Mempool descendants request parameters | 

### Return type

[**ResponsesGetMempoolDescendantsResponse**](ResponsesGetMempoolDescendantsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMempoolInfo"></a>
# **getMempoolInfo**
> ResponsesGetMempoolInfoResponse getMempoolInfo()

Get mempool information

Returns details on the active state of the TX memory pool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
apiInstance.getMempoolInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponsesGetMempoolInfoResponse**](ResponsesGetMempoolInfoResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMiningInfo"></a>
# **getMiningInfo**
> ResponsesGetMiningInfoResponse getMiningInfo()

Get mining information

Returns a json object containing mining-related information

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
apiInstance.getMiningInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponsesGetMiningInfoResponse**](ResponsesGetMiningInfoResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkHashps"></a>
# **getNetworkHashps**
> ResponsesGetNetworkHashPSResponse getNetworkHashps(body)

Get network hash per second

Returns the estimated network hashes per second based on the last n blocks

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetNetworkHashPSRequest(); // RequestsGetNetworkHashPSRequest | Network hash rate parameters

apiInstance.getNetworkHashps(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetNetworkHashPSRequest**](RequestsGetNetworkHashPSRequest.md)| Network hash rate parameters | 

### Return type

[**ResponsesGetNetworkHashPSResponse**](ResponsesGetNetworkHashPSResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRawMempool"></a>
# **getRawMempool**
> ResponsesGetRawMempoolResponse getRawMempool(body)

Get raw mempool

Returns all transaction ids in memory pool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetRawMempoolRequest(); // RequestsGetRawMempoolRequest | Raw mempool request parameters

apiInstance.getRawMempool(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetRawMempoolRequest**](RequestsGetRawMempoolRequest.md)| Raw mempool request parameters | 

### Return type

[**ResponsesGetRawMempoolResponse**](ResponsesGetRawMempoolResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRawTransactionDecoded"></a>
# **getRawTransactionDecoded**
> ResponsesGetRawTransactionDecodedResponse getRawTransactionDecoded(txid)

Get raw transaction (verbosity 1)

Get raw transaction as a decoded object

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let txid = "txid_example"; // String | Transaction ID

apiInstance.getRawTransactionDecoded(txid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**ResponsesGetRawTransactionDecodedResponse**](ResponsesGetRawTransactionDecodedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransactionHex"></a>
# **getRawTransactionHex**
> ResponsesGetRawTransactionHexResponse getRawTransactionHex(txid)

Get raw transaction (verbosity 0)

Get raw transaction as a raw hex string

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let txid = "txid_example"; // String | Transaction ID

apiInstance.getRawTransactionHex(txid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**ResponsesGetRawTransactionHexResponse**](ResponsesGetRawTransactionHexResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransactionPrevout"></a>
# **getRawTransactionPrevout**
> ResponsesGetRawTransactionPrevoutResponse getRawTransactionPrevout(txid)

Get raw transaction (verbosity 2)

Get raw transaction with prevout information

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let txid = "txid_example"; // String | Transaction ID

apiInstance.getRawTransactionPrevout(txid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**ResponsesGetRawTransactionPrevoutResponse**](ResponsesGetRawTransactionPrevoutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTxOut"></a>
# **getTxOut**
> ResponsesGetTxOutResponse getTxOut(body)

Get transaction output

Returns details about an unspent transaction output

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetTxOutRequest(); // RequestsGetTxOutRequest | Transaction output request parameters

apiInstance.getTxOut(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetTxOutRequest**](RequestsGetTxOutRequest.md)| Transaction output request parameters | 

### Return type

[**ResponsesGetTxOutResponse**](ResponsesGetTxOutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxOutProof"></a>
# **getTxOutProof**
> ResponsesGetTxOutProofResponse getTxOutProof(body)

Get transaction output proof

Returns a hex-encoded proof that one or more specified transactions were included in a block

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetTxOutProofRequest(); // RequestsGetTxOutProofRequest | Transaction proof request parameters

apiInstance.getTxOutProof(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetTxOutProofRequest**](RequestsGetTxOutProofRequest.md)| Transaction proof request parameters | 

### Return type

[**ResponsesGetTxOutProofResponse**](ResponsesGetTxOutProofResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxOutSetInfo"></a>
# **getTxOutSetInfo**
> ResponsesGetTxOutSetInfoResponse getTxOutSetInfo(body)

Get transaction output set information

Returns statistics about the unspent transaction output set

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetTxOutSetInfoRequest(); // RequestsGetTxOutSetInfoRequest | UTXO set info request parameters

apiInstance.getTxOutSetInfo(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetTxOutSetInfoRequest**](RequestsGetTxOutSetInfoRequest.md)| UTXO set info request parameters | 

### Return type

[**ResponsesGetTxOutSetInfoResponse**](ResponsesGetTxOutSetInfoResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxSpendingPrevout"></a>
# **getTxSpendingPrevout**
> ResponsesGetTxSpendingPrevoutResponse getTxSpendingPrevout(body)

Get transaction spending prevout

Scans the mempool to find transactions spending any of the given outputs

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsGetTxSpendingPrevoutRequest(); // RequestsGetTxSpendingPrevoutRequest | Transaction spending prevout request

apiInstance.getTxSpendingPrevout(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsGetTxSpendingPrevoutRequest**](RequestsGetTxSpendingPrevoutRequest.md)| Transaction spending prevout request | 

### Return type

[**ResponsesGetTxSpendingPrevoutResponse**](ResponsesGetTxSpendingPrevoutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="joinPsbts"></a>
# **joinPsbts**
> ResponsesJoinPSBTsResponse joinPsbts(body)

Join PSBTs

Joins multiple distinct PSBTs with different inputs and outputs into one PSBT

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsJoinPSBTsRequest(); // RequestsJoinPSBTsRequest | PSBTs to join

apiInstance.joinPsbts(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsJoinPSBTsRequest**](RequestsJoinPSBTsRequest.md)| PSBTs to join | 

### Return type

[**ResponsesJoinPSBTsResponse**](ResponsesJoinPSBTsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendRawTransaction"></a>
# **sendRawTransaction**
> ResponsesSendRawTransactionResponse sendRawTransaction(body)

Send raw transaction

Submits a raw transaction to local node and network

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsSendRawTransactionRequest(); // RequestsSendRawTransactionRequest | Raw transaction to send

apiInstance.sendRawTransaction(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsSendRawTransactionRequest**](RequestsSendRawTransactionRequest.md)| Raw transaction to send | 

### Return type

[**ResponsesSendRawTransactionResponse**](ResponsesSendRawTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testMempoolAccept"></a>
# **testMempoolAccept**
> ResponsesTestMempoolAcceptResponse testMempoolAccept(body)

Test mempool accept

Tests whether raw transactions would be accepted by mempool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsTestMempoolAcceptRequest(); // RequestsTestMempoolAcceptRequest | Raw transactions to test

apiInstance.testMempoolAccept(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsTestMempoolAcceptRequest**](RequestsTestMempoolAcceptRequest.md)| Raw transactions to test | 

### Return type

[**ResponsesTestMempoolAcceptResponse**](ResponsesTestMempoolAcceptResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateAddress"></a>
# **validateAddress**
> ResponsesValidateAddressResponse validateAddress(address)

Validate address

Returns information about the given Bitcoin address

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let address = "address_example"; // String | Bitcoin address to validate

apiInstance.validateAddress(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address to validate | 

### Return type

[**ResponsesValidateAddressResponse**](ResponsesValidateAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyMessage"></a>
# **verifyMessage**
> ResponsesVerifyMessageResponse verifyMessage(body)

Verify message

Verifies a signed message

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsVerifyMessageRequest(); // RequestsVerifyMessageRequest | Message verification parameters

apiInstance.verifyMessage(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsVerifyMessageRequest**](RequestsVerifyMessageRequest.md)| Message verification parameters | 

### Return type

[**ResponsesVerifyMessageResponse**](ResponsesVerifyMessageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verifyTxOutProof"></a>
# **verifyTxOutProof**
> ResponsesVerifyTxOutProofResponse verifyTxOutProof(body)

Verify transaction output proof

Verifies that a proof points to a transaction in a block

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BitcoinApi();
let body = new SatstreamJavascriptSdk.RequestsVerifyTxOutProofRequest(); // RequestsVerifyTxOutProofRequest | Proof to verify

apiInstance.verifyTxOutProof(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestsVerifyTxOutProofRequest**](RequestsVerifyTxOutProofRequest.md)| Proof to verify | 

### Return type

[**ResponsesVerifyTxOutProofResponse**](ResponsesVerifyTxOutProofResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

