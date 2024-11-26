# SatstreamJavascriptSdk.BlocksApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockByHash**](BlocksApi.md#getBlockByHash) | **GET** /block/hash/{block_hash} | Get block info by hash

<a name="getBlockByHash"></a>
# **getBlockByHash**
> GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse getBlockByHash(blockHash)

Get block info by hash

Get detailed information about a specific block by hash

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let blockHash = "blockHash_example"; // String | Block Hash

apiInstance.getBlockByHash(blockHash, (error, data, response) => {
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
 **blockHash** | **String**| Block Hash | 

### Return type

[**GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse**](GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

