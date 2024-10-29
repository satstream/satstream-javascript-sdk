# SatstreamApi.TransactionsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indexerTxHashGet**](TransactionsApi.md#indexerTxHashGet) | **GET** /indexer/tx/{hash} | Get transaction
[**transactionsBroadcastPost**](TransactionsApi.md#transactionsBroadcastPost) | **POST** /transactions/broadcast | Broadcast transaction
[**transactionsTxidGet**](TransactionsApi.md#transactionsTxidGet) | **GET** /transactions/{txid} | Get transaction info
[**transactionsTxidInputsGet**](TransactionsApi.md#transactionsTxidInputsGet) | **GET** /transactions/{txid}/inputs | Get transaction inputs


<a name="indexerTxHashGet"></a>
# **indexerTxHashGet**
> InlineResponse2008 indexerTxHashGet(hash)

Get transaction

Get a transaction by its hash

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.TransactionsApi();

var hash = "hash_example"; // String | Transaction hash


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.indexerTxHashGet(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Transaction hash | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionsBroadcastPost"></a>
# **transactionsBroadcastPost**
> InlineResponse2009 transactionsBroadcastPost(transaction)

Broadcast transaction

Broadcast a raw transaction to the Bitcoin network

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.TransactionsApi();

var transaction = "transaction_example"; // String | Raw transaction hex


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsBroadcastPost(transaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | **String**| Raw transaction hex | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionsTxidGet"></a>
# **transactionsTxidGet**
> InlineResponse20010 transactionsTxidGet(txid)

Get transaction info

Get detailed information about a specific transaction

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.TransactionsApi();

var txid = "txid_example"; // String | Transaction ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsTxidGet(txid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionsTxidInputsGet"></a>
# **transactionsTxidInputsGet**
> [Object] transactionsTxidInputsGet(txid)

Get transaction inputs

Get the inputs of a specific transaction

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.TransactionsApi();

var txid = "txid_example"; // String | Transaction ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsTxidInputsGet(txid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

**[Object]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

