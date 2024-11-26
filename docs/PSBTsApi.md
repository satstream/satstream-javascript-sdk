# SatstreamJavascriptSdk.PSBTsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzePsbt**](PSBTsApi.md#analyzePsbt) | **POST** /psbt/analyze | Analyze PSBT
[**combinePsbt**](PSBTsApi.md#combinePsbt) | **POST** /psbt/combine | Combine PSBTs
[**createPsbt**](PSBTsApi.md#createPsbt) | **POST** /psbt/create | Create PSBT
[**decodePsbt**](PSBTsApi.md#decodePsbt) | **POST** /psbt/decode | Decode PSBT
[**joinPsbts**](PSBTsApi.md#joinPsbts) | **POST** /psbt/join | Join PSBTs

<a name="analyzePsbt"></a>
# **analyzePsbt**
> InlineResponse20026 analyzePsbt(body)

Analyze PSBT

Analyzes and provides information about the current status of a PSBT and its inputs

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.PSBTsApi();
let body = new SatstreamJavascriptSdk.RequestsAnalyzePSBTRequest(); // RequestsAnalyzePSBTRequest | PSBT to analyze

apiInstance.analyzePsbt(body, (error, data, response) => {
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
 **body** | [**RequestsAnalyzePSBTRequest**](RequestsAnalyzePSBTRequest.md)| PSBT to analyze | 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combinePsbt"></a>
# **combinePsbt**
> InlineResponse2005 combinePsbt(body)

Combine PSBTs

Combines multiple partially signed Bitcoin transactions into one transaction

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.PSBTsApi();
let body = new SatstreamJavascriptSdk.RequestsCombinePSBTRequest(); // RequestsCombinePSBTRequest | Array of PSBTs to combine

apiInstance.combinePsbt(body, (error, data, response) => {
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
 **body** | [**RequestsCombinePSBTRequest**](RequestsCombinePSBTRequest.md)| Array of PSBTs to combine | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPsbt"></a>
# **createPsbt**
> InlineResponse2005 createPsbt(body)

Create PSBT

Creates a transaction in the Partially Signed Transaction format. Implements the Creator role.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.PSBTsApi();
let body = new SatstreamJavascriptSdk.RequestsCreatePSBTRequest(); // RequestsCreatePSBTRequest | Transaction parameters

apiInstance.createPsbt(body, (error, data, response) => {
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
 **body** | [**RequestsCreatePSBTRequest**](RequestsCreatePSBTRequest.md)| Transaction parameters | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decodePsbt"></a>
# **decodePsbt**
> InlineResponse20027 decodePsbt(body)

Decode PSBT

Return a JSON object representing the serialized, base64-encoded partially signed Bitcoin transaction.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.PSBTsApi();
let body = new SatstreamJavascriptSdk.RequestsAnalyzePSBTRequest(); // RequestsAnalyzePSBTRequest | PSBT to decode

apiInstance.decodePsbt(body, (error, data, response) => {
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
 **body** | [**RequestsAnalyzePSBTRequest**](RequestsAnalyzePSBTRequest.md)| PSBT to decode | 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="joinPsbts"></a>
# **joinPsbts**
> InlineResponse2005 joinPsbts(body)

Join PSBTs

Joins multiple distinct PSBTs with different inputs and outputs into one PSBT

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.PSBTsApi();
let body = new SatstreamJavascriptSdk.RequestsJoinPSBTsRequest(); // RequestsJoinPSBTsRequest | PSBTs to join

apiInstance.joinPsbts(body, (error, data, response) => {
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
 **body** | [**RequestsJoinPSBTsRequest**](RequestsJoinPSBTsRequest.md)| PSBTs to join | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

