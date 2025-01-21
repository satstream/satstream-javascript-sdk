# SatstreamJavascriptSdk.TransactionsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**combineRawTransaction**](TransactionsApi.md#combineRawTransaction) | **POST** /tx/combine | Combine Raw Transactions
[**convertToPsbt**](TransactionsApi.md#convertToPsbt) | **POST** /tx/convert-to-psbt | Convert Raw Transaction to PSBT
[**createRawTransaction**](TransactionsApi.md#createRawTransaction) | **POST** /tx/create | Create Raw Transaction
[**decodeTxInscriptions**](TransactionsApi.md#decodeTxInscriptions) | **GET** /tx/{txid}/inscriptions | Decode transaction inscriptions
[**getRawTransaction**](TransactionsApi.md#getRawTransaction) | **GET** /tx/{txid}/raw/decode | Get raw transaction (verbosity 1)
[**getRawTransactionHex**](TransactionsApi.md#getRawTransactionHex) | **GET** /tx/{txid}/raw/hex | Get raw transaction (verbosity 0)
[**getRawTransactionPrevout**](TransactionsApi.md#getRawTransactionPrevout) | **GET** /tx/{txid}/raw/prevout | Get raw transaction with prevouts (verbosity 2)
[**getTxOut**](TransactionsApi.md#getTxOut) | **POST** /tx/out | Get transaction output
[**getTxOutProof**](TransactionsApi.md#getTxOutProof) | **POST** /tx/outproof | Get transaction output proof
[**getTxOutSetInfo**](TransactionsApi.md#getTxOutSetInfo) | **POST** /tx/out/set/info | Get transaction output set information
[**getTxSpendingPrevout**](TransactionsApi.md#getTxSpendingPrevout) | **POST** /tx/spending-prevout | Get transaction spending prevout
[**sendRawTransaction**](TransactionsApi.md#sendRawTransaction) | **POST** /tx/send | Send raw transaction
[**verifyTxOutProof**](TransactionsApi.md#verifyTxOutProof) | **POST** /tx/outproof/verify | Verify transaction output proof

<a name="combineRawTransaction"></a>
# **combineRawTransaction**
> CombineRawTransactionResponse combineRawTransaction(body)

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
let body = new SatstreamJavascriptSdk.TransactionCombineRawTransactionRequest(); // TransactionCombineRawTransactionRequest | Array of hex-encoded raw transactions

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
 **body** | [**TransactionCombineRawTransactionRequest**](TransactionCombineRawTransactionRequest.md)| Array of hex-encoded raw transactions | 

### Return type

[**CombineRawTransactionResponse**](CombineRawTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="convertToPsbt"></a>
# **convertToPsbt**
> ConvertToPSBTResponse convertToPsbt(body)

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
let body = new SatstreamJavascriptSdk.TransactionConvertToPSBTRequest(); // TransactionConvertToPSBTRequest | Raw transaction conversion parameters

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
 **body** | [**TransactionConvertToPSBTRequest**](TransactionConvertToPSBTRequest.md)| Raw transaction conversion parameters | 

### Return type

[**ConvertToPSBTResponse**](ConvertToPSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRawTransaction"></a>
# **createRawTransaction**
> CreateRawTransactionResponse createRawTransaction(body)

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
let body = new SatstreamJavascriptSdk.TransactionCreateRawTxRequest(); // TransactionCreateRawTxRequest | Transaction parameters

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
 **body** | [**TransactionCreateRawTxRequest**](TransactionCreateRawTxRequest.md)| Transaction parameters | 

### Return type

[**CreateRawTransactionResponse**](CreateRawTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decodeTxInscriptions"></a>
# **decodeTxInscriptions**
> DecodeTransactionResponse decodeTxInscriptions(txid)

Decode transaction inscriptions

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

apiInstance.decodeTxInscriptions(txid, (error, data, response) => {
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

[**DecodeTransactionResponse**](DecodeTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransaction"></a>
# **getRawTransaction**
> GetRawTransactionDecodeResponse getRawTransaction(txid)

Get raw transaction (verbosity 1)

Get raw transaction with basic decoded information

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

apiInstance.getRawTransaction(txid, (error, data, response) => {
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

[**GetRawTransactionDecodeResponse**](GetRawTransactionDecodeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransactionHex"></a>
# **getRawTransactionHex**
> GetRawTransactionHexResponse getRawTransactionHex(txid)

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

[**GetRawTransactionHexResponse**](GetRawTransactionHexResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTransactionPrevout"></a>
# **getRawTransactionPrevout**
> GetRawTransactionPrevoutResponse getRawTransactionPrevout(txid)

Get raw transaction with prevouts (verbosity 2)

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

[**GetRawTransactionPrevoutResponse**](GetRawTransactionPrevoutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTxOut"></a>
# **getTxOut**
> GetTxOutResponse getTxOut(body)

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
let body = new SatstreamJavascriptSdk.TransactionGetTxOutRequest(); // TransactionGetTxOutRequest | Transaction output request parameters

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
 **body** | [**TransactionGetTxOutRequest**](TransactionGetTxOutRequest.md)| Transaction output request parameters | 

### Return type

[**GetTxOutResponse**](GetTxOutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxOutProof"></a>
# **getTxOutProof**
> GetTxOutProofResponse getTxOutProof(body)

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
let body = new SatstreamJavascriptSdk.TransactionGetTxOutProofRequest(); // TransactionGetTxOutProofRequest | Transaction proof request parameters

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
 **body** | [**TransactionGetTxOutProofRequest**](TransactionGetTxOutProofRequest.md)| Transaction proof request parameters | 

### Return type

[**GetTxOutProofResponse**](GetTxOutProofResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxOutSetInfo"></a>
# **getTxOutSetInfo**
> InlineResponse2002 getTxOutSetInfo(body)

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
let body = new SatstreamJavascriptSdk.TransactionGetTxOutSetInfoRequest(); // TransactionGetTxOutSetInfoRequest | UTXO set info request parameters

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
 **body** | [**TransactionGetTxOutSetInfoRequest**](TransactionGetTxOutSetInfoRequest.md)| UTXO set info request parameters | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxSpendingPrevout"></a>
# **getTxSpendingPrevout**
> GetTxSpendingPrevoutResponse getTxSpendingPrevout(body)

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
let body = new SatstreamJavascriptSdk.TransactionGetTxSpendingPrevoutRequest(); // TransactionGetTxSpendingPrevoutRequest | Transaction spending prevout request

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
 **body** | [**TransactionGetTxSpendingPrevoutRequest**](TransactionGetTxSpendingPrevoutRequest.md)| Transaction spending prevout request | 

### Return type

[**GetTxSpendingPrevoutResponse**](GetTxSpendingPrevoutResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendRawTransaction"></a>
# **sendRawTransaction**
> SendRawTransactionResponse sendRawTransaction(body)

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
let body = new SatstreamJavascriptSdk.TransactionSendRawTransactionRequest(); // TransactionSendRawTransactionRequest | Raw transaction to send

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
 **body** | [**TransactionSendRawTransactionRequest**](TransactionSendRawTransactionRequest.md)| Raw transaction to send | 

### Return type

[**SendRawTransactionResponse**](SendRawTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verifyTxOutProof"></a>
# **verifyTxOutProof**
> VerifyTxOutProofResponse verifyTxOutProof(body)

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
let body = new SatstreamJavascriptSdk.TransactionVerifyTxOutProofRequest(); // TransactionVerifyTxOutProofRequest | Proof to verify

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
 **body** | [**TransactionVerifyTxOutProofRequest**](TransactionVerifyTxOutProofRequest.md)| Proof to verify | 

### Return type

[**VerifyTxOutProofResponse**](VerifyTxOutProofResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

