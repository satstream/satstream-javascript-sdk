# SatstreamJavascriptSdk.OutputsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOutputByOutpoint**](OutputsApi.md#getOutputByOutpoint) | **GET** /output/{outpoint} | Get output info by outpoint
[**getOutputs**](OutputsApi.md#getOutputs) | **POST** /outputs | Get multiple outputs

<a name="getOutputByOutpoint"></a>
# **getOutputByOutpoint**
> InlineResponse20025 getOutputByOutpoint(outpoint)

Get output info by outpoint

Retrieve information about a specific UTXO using outpoint string

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.OutputsApi();
let outpoint = "outpoint_example"; // String | Outpoint

apiInstance.getOutputByOutpoint(outpoint, (error, data, response) => {
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
 **outpoint** | **String**| Outpoint | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOutputs"></a>
# **getOutputs**
> InlineResponse2002 getOutputs(body)

Get multiple outputs

Retrieve information about multiple UTXOs

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.OutputsApi();
let body = ["body_example"]; // [String] | Outpoints

apiInstance.getOutputs(body, (error, data, response) => {
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
 **body** | [**[String]**](String.md)| Outpoints | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

