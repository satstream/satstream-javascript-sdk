# SatstreamApi.MempoolApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mempoolAddressesAddressTransactionsGet**](MempoolApi.md#mempoolAddressesAddressTransactionsGet) | **GET** /mempool/addresses/{address}/transactions | Get address mempool transactions
[**mempoolTransactionsGet**](MempoolApi.md#mempoolTransactionsGet) | **GET** /mempool/transactions | Get mempool transactions
[**mempoolTransactionsTxidGet**](MempoolApi.md#mempoolTransactionsTxidGet) | **GET** /mempool/transactions/{txid} | Get mempool transaction info


<a name="mempoolAddressesAddressTransactionsGet"></a>
# **mempoolAddressesAddressTransactionsGet**
> [RpcBtcTx] mempoolAddressesAddressTransactionsGet(address)

Get address mempool transactions

Get all mempool transactions for a specific address

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.MempoolApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mempoolAddressesAddressTransactionsGet(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**[RpcBtcTx]**](RpcBtcTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mempoolTransactionsGet"></a>
# **mempoolTransactionsGet**
> [RpcBtcTx] mempoolTransactionsGet()

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
apiInstance.mempoolTransactionsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RpcBtcTx]**](RpcBtcTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mempoolTransactionsTxidGet"></a>
# **mempoolTransactionsTxidGet**
> RpcBtcTx mempoolTransactionsTxidGet(txid)

Get mempool transaction info

Get information about a specific transaction in the mempool

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.MempoolApi();

var txid = "txid_example"; // String | Transaction ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mempoolTransactionsTxidGet(txid, callback);
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

