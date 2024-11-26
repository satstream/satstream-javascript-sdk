# SatstreamJavascriptSdk.TransactionsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**combineRawTransaction**](TransactionsApi.md#combineRawTransaction) | **POST** /tx/combine | Combine Raw Transactions
[**convertToPsbt**](TransactionsApi.md#convertToPsbt) | **POST** /tx/convert-to-psbt | Convert Raw Transaction to PSBT
[**createRawTransaction**](TransactionsApi.md#createRawTransaction) | **POST** /tx/create | Create Raw Transaction
[**decodeTx**](TransactionsApi.md#decodeTx) | **GET** /tx/{txid}/decode | Decode a transaction
[**getRawTransactionDecoded**](TransactionsApi.md#getRawTransactionDecoded) | **GET** /tx/{txid}/decoded | Get raw transaction (verbosity 1)
[**getRawTransactionHex**](TransactionsApi.md#getRawTransactionHex) | **GET** /tx/{txid}/hex | Get raw transaction (verbosity 0)
[**getRawTransactionPrevout**](TransactionsApi.md#getRawTransactionPrevout) | **GET** /tx/{txid}/prevout | Get raw transaction (verbosity 2)
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /tx/{txid} | Get transaction info
[**getTxOut**](TransactionsApi.md#getTxOut) | **POST** /tx/out | Get transaction output
[**getTxOutProof**](TransactionsApi.md#getTxOutProof) | **POST** /tx/outproof | Get transaction output proof
[**getTxOutSetInfo**](TransactionsApi.md#getTxOutSetInfo) | **POST** /tx/out/set/info | Get transaction output set information
[**getTxSpendingPrevout**](TransactionsApi.md#getTxSpendingPrevout) | **POST** /tx/spending-prevout | Get transaction spending prevout
[**sendRawTransaction**](TransactionsApi.md#sendRawTransaction) | **POST** /tx/send | Send raw transaction
[**verifyTxOutProof**](TransactionsApi.md#verifyTxOutProof) | **POST** /tx/outproof/verify | Verify transaction output proof

<a name="combineRawTransaction"></a>
# **combineRawTransaction**
> InlineResponse2001 combineRawTransaction(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="convertToPsbt"></a>
# **convertToPsbt**
> InlineResponse2001 convertToPsbt(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRawTransaction"></a>
# **createRawTransaction**
> InlineResponse2001 createRawTransaction(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
let body = new SatstreamJavascriptSdk.RequestsCreateRawTxRequest(); // RequestsCreateRawTxRequest | Transaction parameters

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
 **body** | [**RequestsCreateRawTxRequest**](RequestsCreateRawTxRequest.md)| Transaction parameters | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decodeTx"></a>
# **decodeTx**
> InlineResponse20036 decodeTx(txid)

Decode a transaction

Decodes a transaction and returns its inscriptions and runestone data

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
let txid = "txid_example"; // String | Transaction ID

apiInstance.decodeTx(txid, (error, data, response) => {
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

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransactionDecoded"></a>
# **getRawTransactionDecoded**
> InlineResponse20037 getRawTransactionDecoded(txid)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransactionHex"></a>
# **getRawTransactionHex**
> InlineResponse2001 getRawTransactionHex(txid)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransactionPrevout"></a>
# **getRawTransactionPrevout**
> InlineResponse20038 getRawTransactionPrevout(txid)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse20038**](InlineResponse20038.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransaction"></a>
# **getTransaction**
> InlineResponse20035 getTransaction(txid)

Get transaction info

Retrieve information about a specific transaction

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
let txid = "txid_example"; // String | Transaction ID

apiInstance.getTransaction(txid, (error, data, response) => {
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

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTxOut"></a>
# **getTxOut**
> InlineResponse20031 getTxOut(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxOutProof"></a>
# **getTxOutProof**
> InlineResponse2001 getTxOutProof(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxOutSetInfo"></a>
# **getTxOutSetInfo**
> InlineResponse20032 getTxOutSetInfo(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxSpendingPrevout"></a>
# **getTxSpendingPrevout**
> InlineResponse20034 getTxSpendingPrevout(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendRawTransaction"></a>
# **sendRawTransaction**
> InlineResponse2001 sendRawTransaction(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verifyTxOutProof"></a>
# **verifyTxOutProof**
> InlineResponse20033 verifyTxOutProof(body)

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

let apiInstance = new SatstreamJavascriptSdk.TransactionsApi();
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

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

