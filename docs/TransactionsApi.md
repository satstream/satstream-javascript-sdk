# SatstreamApi.TransactionsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastTransaction**](TransactionsApi.md#broadcastTransaction) | **POST** /transactions/broadcast | Broadcast transaction
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /indexer/tx/{hash} | Get transaction
[**getTransactionInfo**](TransactionsApi.md#getTransactionInfo) | **GET** /transactions/{txid} | Get transaction info


<a name="broadcastTransaction"></a>
# **broadcastTransaction**
> ResponsesSendRawTransaction broadcastTransaction(transaction)

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
apiInstance.broadcastTransaction(transaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | **String**| Raw transaction hex | 

### Return type

[**ResponsesSendRawTransaction**](ResponsesSendRawTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransaction"></a>
# **getTransaction**
> ResponsesGetTransaction getTransaction(hash)

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
apiInstance.getTransaction(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Transaction hash | 

### Return type

[**ResponsesGetTransaction**](ResponsesGetTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransactionInfo"></a>
# **getTransactionInfo**
> ResponsesGetTxInfo getTransactionInfo(txid)

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
apiInstance.getTransactionInfo(txid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**ResponsesGetTxInfo**](ResponsesGetTxInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

