# SatstreamApi.RunesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runesGet**](RunesApi.md#runesGet) | **GET** /runes | Get runes info list
[**runesRuneIdGet**](RunesApi.md#runesRuneIdGet) | **GET** /runes/{runeId} | Get rune info
[**runesRuneIdHoldersGet**](RunesApi.md#runesRuneIdHoldersGet) | **GET** /runes/{runeId}/holders | Get rune holders
[**runesStatusGet**](RunesApi.md#runesStatusGet) | **GET** /runes/status | Get runes status


<a name="runesGet"></a>
# **runesGet**
> [Object] runesGet()

Get runes info list

Get information about all runes

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.RunesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runesRuneIdGet"></a>
# **runesRuneIdGet**
> Object runesRuneIdGet(runeId)

Get rune info

Get detailed information about a specific rune

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.RunesApi();

var runeId = "runeId_example"; // String | Rune ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runesRuneIdGet(runeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runeId** | **String**| Rune ID | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runesRuneIdHoldersGet"></a>
# **runesRuneIdHoldersGet**
> [Object] runesRuneIdHoldersGet(runeId)

Get rune holders

Get a list of addresses holding a specific rune

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.RunesApi();

var runeId = "runeId_example"; // String | Rune ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runesRuneIdHoldersGet(runeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runeId** | **String**| Rune ID | 

### Return type

**[Object]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runesStatusGet"></a>
# **runesStatusGet**
> Object runesStatusGet()

Get runes status

Get the current status of the runes system

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.RunesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runesStatusGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

