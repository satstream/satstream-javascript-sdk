# SatstreamApi.BlocksApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blocksCurrentHeightGet**](BlocksApi.md#blocksCurrentHeightGet) | **GET** /blocks/current-height | Get current block height
[**blocksHashHashGet**](BlocksApi.md#blocksHashHashGet) | **GET** /blocks/hash/{hash} | Get block by hash
[**blocksHeightGet**](BlocksApi.md#blocksHeightGet) | **GET** /blocks/{height} | Get block info
[**blocksHeightTransactionsGet**](BlocksApi.md#blocksHeightTransactionsGet) | **GET** /blocks/{height}/transactions | Get block transactions


<a name="blocksCurrentHeightGet"></a>
# **blocksCurrentHeightGet**
> InlineResponse2005 blocksCurrentHeightGet()

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
apiInstance.blocksCurrentHeightGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blocksHashHashGet"></a>
# **blocksHashHashGet**
> InlineResponse2006 blocksHashHashGet(hash)

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
apiInstance.blocksHashHashGet(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Block hash | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blocksHeightGet"></a>
# **blocksHeightGet**
> InlineResponse2006 blocksHeightGet(height)

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
apiInstance.blocksHeightGet(height, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blocksHeightTransactionsGet"></a>
# **blocksHeightTransactionsGet**
> [Object] blocksHeightTransactionsGet(height)

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
apiInstance.blocksHeightTransactionsGet(height, callback);
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

