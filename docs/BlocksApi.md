# SatstreamApi.BlocksApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockByHash**](BlocksApi.md#getBlockByHash) | **GET** /blocks/hash/{hash} | Get block by hash
[**getBlockInfo**](BlocksApi.md#getBlockInfo) | **GET** /blocks/{height} | Get block info
[**getBlockTransactions**](BlocksApi.md#getBlockTransactions) | **GET** /blocks/{height}/transactions | Get block transactions
[**getCurrentBlockHeight**](BlocksApi.md#getCurrentBlockHeight) | **GET** /blocks/current-height | Get current block height


<a name="getBlockByHash"></a>
# **getBlockByHash**
> InlineResponse2005 getBlockByHash(hash)

Get block by hash

Get information about a specific block by its hash

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.BlocksApi();

var hash = "hash_example"; // String | Block hash


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBlockByHash(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Block hash | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockInfo"></a>
# **getBlockInfo**
> InlineResponse2005 getBlockInfo(height)

Get block info

Get information about a specific block by height

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.BlocksApi();

var height = 56; // Number | Block height


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBlockInfo(height, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockTransactions"></a>
# **getBlockTransactions**
> [Object] getBlockTransactions(height)

Get block transactions

Get transactions for a specific block height

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.BlocksApi();

var height = 56; // Number | Block height


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBlockTransactions(height, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentBlockHeight"></a>
# **getCurrentBlockHeight**
> ResponsesBlockHeight getCurrentBlockHeight()

Get current block height

Get the current block height of the Bitcoin blockchain

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.BlocksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentBlockHeight(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponsesBlockHeight**](ResponsesBlockHeight.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

