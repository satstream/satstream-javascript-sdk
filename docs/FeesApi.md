# SatstreamJavascriptSdk.FeesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**estimateRawFee**](FeesApi.md#estimateRawFee) | **POST** /fee/estimate-raw | Estimate Raw Fee
[**estimateSmartFee**](FeesApi.md#estimateSmartFee) | **POST** /fee/estimate-smart | Estimate smart fee

<a name="estimateRawFee"></a>
# **estimateRawFee**
> EstimateRawFeeResponse estimateRawFee(body)

Estimate Raw Fee

Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks if possible.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.FeesApi();
let body = new SatstreamJavascriptSdk.EstimateRawFeeRequest(); // EstimateRawFeeRequest | Fee estimation parameters

apiInstance.estimateRawFee(body, (error, data, response) => {
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
 **body** | [**EstimateRawFeeRequest**](EstimateRawFeeRequest.md)| Fee estimation parameters | 

### Return type

[**EstimateRawFeeResponse**](EstimateRawFeeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="estimateSmartFee"></a>
# **estimateSmartFee**
> EstimateSmartFeeResponse estimateSmartFee(body)

Estimate smart fee

Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.FeesApi();
let body = new SatstreamJavascriptSdk.EstimateSmartFeeRequest(); // EstimateSmartFeeRequest | Fee estimation parameters

apiInstance.estimateSmartFee(body, (error, data, response) => {
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
 **body** | [**EstimateSmartFeeRequest**](EstimateSmartFeeRequest.md)| Fee estimation parameters | 

### Return type

[**EstimateSmartFeeResponse**](EstimateSmartFeeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

