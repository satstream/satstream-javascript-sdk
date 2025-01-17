# SatstreamJavascriptSdk.RunesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLatestRunes**](RunesApi.md#getLatestRunes) | **GET** /runes | Get latest runes
[**getLatestRunesPage**](RunesApi.md#getLatestRunesPage) | **GET** /runes/{page} | Get latest runes page
[**getRune**](RunesApi.md#getRune) | **GET** /rune/{identifier} | Get rune info

<a name="getLatestRunes"></a>
# **getLatestRunes**
> GetLatestRunesResponse getLatestRunes()

Get latest runes

Retrieve information about the last 100 inscribed runes (first page)

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.RunesApi();
apiInstance.getLatestRunes((error, data, response) => {
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

[**GetLatestRunesResponse**](GetLatestRunesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestRunesPage"></a>
# **getLatestRunesPage**
> GetLatestRunesResponse getLatestRunesPage(page)

Get latest runes page

Retrieve a specific page of 100 inscribed runes

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.RunesApi();
let page = 56; // Number | Page number

apiInstance.getLatestRunesPage(page, (error, data, response) => {
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
 **page** | **Number**| Page number | 

### Return type

[**GetLatestRunesResponse**](GetLatestRunesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRune"></a>
# **getRune**
> GetRuneResponse getRune(identifier)

Get rune info

Retrieve information about a specific rune by name or ID (e.g., \&quot;UNCOMMON•GOODS\&quot; or \&quot;1:0\&quot;)

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.RunesApi();
let identifier = "identifier_example"; // String | Rune Name or ID

apiInstance.getRune(identifier, (error, data, response) => {
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
 **identifier** | **String**| Rune Name or ID | 

### Return type

[**GetRuneResponse**](GetRuneResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

