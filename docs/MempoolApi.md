# SatstreamApi.MempoolApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressMempoolTransactions**](MempoolApi.md#getAddressMempoolTransactions) | **GET** /mempool/addresses/{address}/transactions | Get address mempool transactions
[**getMempoolTransactionInfo**](MempoolApi.md#getMempoolTransactionInfo) | **GET** /mempool/transactions/{txid} | Get mempool transaction info
[**getMempoolTransactions**](MempoolApi.md#getMempoolTransactions) | **GET** /mempool/transactions | Get mempool transactions


<a name="getAddressMempoolTransactions"></a>
# **getAddressMempoolTransactions**
> ResponsesGetAddressMempoolTxs getAddressMempoolTransactions(address)

Get address mempool transactions

Get all mempool transactions for a specific address

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.MempoolApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressMempoolTransactions(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**ResponsesGetAddressMempoolTxs**](ResponsesGetAddressMempoolTxs.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMempoolTransactionInfo"></a>
# **getMempoolTransactionInfo**
> ResponsesGetMempoolTxInfo getMempoolTransactionInfo(txid)

Get mempool transaction info

Get information about a specific transaction in the mempool

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.MempoolApi();

var txid = "txid_example"; // String | Transaction ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMempoolTransactionInfo(txid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**| Transaction ID | 

### Return type

[**ResponsesGetMempoolTxInfo**](ResponsesGetMempoolTxInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMempoolTransactions"></a>
# **getMempoolTransactions**
> ResponsesGetMempoolTransactions getMempoolTransactions()

Get mempool transactions

Get all transactions currently in the mempool

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.MempoolApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMempoolTransactions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponsesGetMempoolTransactions**](ResponsesGetMempoolTransactions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

