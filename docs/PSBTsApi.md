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
> AnalyzePSBTResponse analyzePsbt(body)

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
let body = new SatstreamJavascriptSdk.AnalyzePSBTRequest(); // AnalyzePSBTRequest | PSBT to analyze

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
 **body** | [**AnalyzePSBTRequest**](AnalyzePSBTRequest.md)| PSBT to analyze | 

### Return type

[**AnalyzePSBTResponse**](AnalyzePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combinePsbt"></a>
# **combinePsbt**
> CombinePSBTResponse combinePsbt(body)

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
let body = new SatstreamJavascriptSdk.CombinePSBTRequest(); // CombinePSBTRequest | Array of PSBTs to combine

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
 **body** | [**CombinePSBTRequest**](CombinePSBTRequest.md)| Array of PSBTs to combine | 

### Return type

[**CombinePSBTResponse**](CombinePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPsbt"></a>
# **createPsbt**
> CreatePSBTResponse createPsbt(body)

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
let body = new SatstreamJavascriptSdk.CreatePSBTRequest(); // CreatePSBTRequest | Transaction parameters

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
 **body** | [**CreatePSBTRequest**](CreatePSBTRequest.md)| Transaction parameters | 

### Return type

[**CreatePSBTResponse**](CreatePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decodePsbt"></a>
# **decodePsbt**
> DecodePSBTResponse decodePsbt(body)

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
let body = new SatstreamJavascriptSdk.DecodePSBTRequest(); // DecodePSBTRequest | PSBT to decode

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
 **body** | [**DecodePSBTRequest**](DecodePSBTRequest.md)| PSBT to decode | 

### Return type

[**DecodePSBTResponse**](DecodePSBTResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="joinPsbts"></a>
# **joinPsbts**
> JoinPSBTsResponse joinPsbts(body)

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
let body = new SatstreamJavascriptSdk.JoinPSBTsRequest(); // JoinPSBTsRequest | PSBTs to join

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
 **body** | [**JoinPSBTsRequest**](JoinPSBTsRequest.md)| PSBTs to join | 

### Return type

[**JoinPSBTsResponse**](JoinPSBTsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

