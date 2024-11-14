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
> ResponsesGetBlockByHash getBlockByHash(hash)

Get block by hash

Get information about a specific block by its hash

### Example
```javascript
import {SatstreamApi} from 'satstream_api';

let apiInstance = new SatstreamApi.BlocksApi();
let hash = "hash_example"; // String | Block hash

apiInstance.getBlockByHash(hash, (error, data, response) => {
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
 **hash** | **String**| Block hash | 

### Return type

[**ResponsesGetBlockByHash**](ResponsesGetBlockByHash.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockInfo"></a>
# **getBlockInfo**
> ResponsesGetBlockInfo getBlockInfo(height)

Get block info

Get information about a specific block by height

### Example
```javascript
import {SatstreamApi} from 'satstream_api';

let apiInstance = new SatstreamApi.BlocksApi();
let height = 56; // Number | Block height

apiInstance.getBlockInfo(height, (error, data, response) => {
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
 **height** | **Number**| Block height | 

### Return type

[**ResponsesGetBlockInfo**](ResponsesGetBlockInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockTransactions"></a>
# **getBlockTransactions**
> ResponsesGetBlockTransactions getBlockTransactions(height)

Get block transactions

Get transactions for a specific block height

### Example
```javascript
import {SatstreamApi} from 'satstream_api';

let apiInstance = new SatstreamApi.BlocksApi();
let height = 56; // Number | Block height

apiInstance.getBlockTransactions(height, (error, data, response) => {
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
 **height** | **Number**| Block height | 

### Return type

[**ResponsesGetBlockTransactions**](ResponsesGetBlockTransactions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentBlockHeight"></a>
# **getCurrentBlockHeight**
> ResponsesGetBlockHeight getCurrentBlockHeight()

Get current block height

Get the current block height of the Bitcoin blockchain

### Example
```javascript
import {SatstreamApi} from 'satstream_api';

let apiInstance = new SatstreamApi.BlocksApi();
apiInstance.getCurrentBlockHeight((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponsesGetBlockHeight**](ResponsesGetBlockHeight.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

