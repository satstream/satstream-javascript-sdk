# SatstreamJavascriptSdk.SatoshisApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSatoshi**](SatoshisApi.md#getSatoshi) | **GET** /sat/{number} | Get satoshi info

<a name="getSatoshi"></a>
# **getSatoshi**
> InlineResponse20030 getSatoshi(_number)

Get satoshi info

Retrieve information about a specific satoshi

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.SatoshisApi();
let _number = 56; // Number | Satoshi Number

apiInstance.getSatoshi(_number, (error, data, response) => {
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
 **_number** | **Number**| Satoshi Number | 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

