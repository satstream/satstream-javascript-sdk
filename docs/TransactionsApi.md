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
> RpcBtcTx indexerTxHashGet(hash)

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

[**RpcBtcTx**](RpcBtcTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionsBroadcastPost"></a>
# **transactionsBroadcastPost**
> ResponsesSendRawTransaction transactionsBroadcastPost(transaction)

Broadcast transaction

Broadcast a raw transaction to the Bitcoin network

### Example
```javascript
var SatstreamApi = require('satstream_api');

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

[**ResponsesSendRawTransaction**](ResponsesSendRawTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionsTxidGet"></a>
# **transactionsTxidGet**
> RpcBtcTx transactionsTxidGet(txid)

Get transaction info

Get detailed information about a specific transaction

### Example
```javascript
var SatstreamApi = require('satstream_api');

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

[**RpcBtcTx**](RpcBtcTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionsTxidInputsGet"></a>
# **transactionsTxidInputsGet**
> [RpcVin] transactionsTxidInputsGet(txid)

Get transaction inputs

Get the inputs of a specific transaction

### Example
```javascript
var SatstreamApi = require('satstream_api');

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

[**[RpcVin]**](RpcVin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

