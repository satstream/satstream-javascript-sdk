# SatstreamApi.RunesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRunesHolders**](RunesApi.md#getRunesHolders) | **GET** /runes/{runeId}/holders | Get rune holders
[**getRunesInfo**](RunesApi.md#getRunesInfo) | **GET** /runes/{runeId} | Get rune info
[**getRunesInfoList**](RunesApi.md#getRunesInfoList) | **GET** /runes | Get runes info list

<a name="getRunesHolders"></a>
# **getRunesHolders**
> ResponsesGetRuneHolders getRunesHolders(runeId)

Get rune holders

Get a list of addresses holding a specific rune

### Example
```javascript
import {SatstreamApi} from 'satstream_api';
let defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamApi.RunesApi();
let runeId = "runeId_example"; // String | Rune ID

apiInstance.getRunesHolders(runeId, (error, data, response) => {
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
 **runeId** | **String**| Rune ID | 

### Return type

[**ResponsesGetRuneHolders**](ResponsesGetRuneHolders.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRunesInfo"></a>
# **getRunesInfo**
> ResponsesGetRuneInfo getRunesInfo(runeId)

Get rune info

Get detailed information about a specific rune

### Example
```javascript
import {SatstreamApi} from 'satstream_api';
let defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamApi.RunesApi();
let runeId = "runeId_example"; // String | Rune ID

apiInstance.getRunesInfo(runeId, (error, data, response) => {
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
 **runeId** | **String**| Rune ID | 

### Return type

[**ResponsesGetRuneInfo**](ResponsesGetRuneInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRunesInfoList"></a>
# **getRunesInfoList**
> ResponsesGetRunesInfoList getRunesInfoList(opts)

Get runes info list

Get information about all runes

### Example
```javascript
import {SatstreamApi} from 'satstream_api';
let defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamApi.RunesApi();
let opts = { 
  'page': 56, // Number | Page number (default: 1)
  'perPage': 56 // Number | Items per page (default: 10)
};
apiInstance.getRunesInfoList(opts, (error, data, response) => {
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
 **page** | **Number**| Page number (default: 1) | [optional] 
 **perPage** | **Number**| Items per page (default: 10) | [optional] 

### Return type

[**ResponsesGetRunesInfoList**](ResponsesGetRunesInfoList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

