# SatstreamApi.TransactionsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastTransaction**](TransactionsApi.md#broadcastTransaction) | **POST** /transactions/broadcast | Broadcast transaction
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /indexer/tx/{hash} | Get transaction
[**getTransactionInfo**](TransactionsApi.md#getTransactionInfo) | **GET** /transactions/{txid} | Get transaction info

<a name="broadcastTransaction"></a>
# **broadcastTransaction**
> ResponsesSendRawTransaction broadcastTransaction(body)

Broadcast transaction

Broadcast a raw transaction to the Bitcoin network

### Example
```javascript
import {SatstreamApi} from 'satstream_api';
let defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamApi.TransactionsApi();
let body = "body_example"; // String | Raw transaction hex

apiInstance.broadcastTransaction(body, (error, data, response) => {
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
 **body** | [**String**](String.md)| Raw transaction hex | 

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
import {SatstreamApi} from 'satstream_api';

let apiInstance = new SatstreamApi.TransactionsApi();
let hash = "hash_example"; // String | Transaction hash

apiInstance.getTransaction(hash, (error, data, response) => {
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
 **hash** | **String**| Transaction hash | 

### Return type

[**ResponsesGetTransaction**](ResponsesGetTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionInfo"></a>
# **getTransactionInfo**
> ResponsesGetTxInfo getTransactionInfo(txid)

Get transaction info

Get detailed information about a specific transaction

### Example
```javascript
import {SatstreamApi} from 'satstream_api';
let defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamApi.TransactionsApi();
let txid = "txid_example"; // String | Transaction ID

apiInstance.getTransactionInfo(txid, (error, data, response) => {
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

[**ResponsesGetTxInfo**](ResponsesGetTxInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

