# SatstreamJavascriptSdk.ScriptsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decodeScript**](ScriptsApi.md#decodeScript) | **POST** /script/decode | Decode Script

<a name="decodeScript"></a>
# **decodeScript**
> DecodeScriptResponse decodeScript(body)

Decode Script

Decode a hex-encoded script and return detailed information about it.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.ScriptsApi();
let body = new SatstreamJavascriptSdk.DecodeScriptRequest(); // DecodeScriptRequest | Script to decode

apiInstance.decodeScript(body, (error, data, response) => {
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
 **body** | [**DecodeScriptRequest**](DecodeScriptRequest.md)| Script to decode | 

### Return type

[**DecodeScriptResponse**](DecodeScriptResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

