# SatstreamJavascriptSdk.MempoolApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMempoolAncestors**](MempoolApi.md#getMempoolAncestors) | **POST** /mempool/ancestors | Get mempool ancestors
[**getMempoolDescendants**](MempoolApi.md#getMempoolDescendants) | **POST** /mempool/descendants | Get mempool descendants
[**getMempoolInfo**](MempoolApi.md#getMempoolInfo) | **GET** /mempool/info | Get mempool information
[**getRawMempool**](MempoolApi.md#getRawMempool) | **POST** /mempool/raw | Get raw mempool
[**testMempoolAccept**](MempoolApi.md#testMempoolAccept) | **POST** /mempool/test-accept | Test mempool accept

<a name="getMempoolAncestors"></a>
# **getMempoolAncestors**
> InlineResponse20019 getMempoolAncestors(body)

Get mempool ancestors

Returns all in-mempool ancestors for a transaction in the mempool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.MempoolApi();
let body = new SatstreamJavascriptSdk.RequestsGetMempoolAncestorsRequest(); // RequestsGetMempoolAncestorsRequest | Mempool ancestors request parameters

apiInstance.getMempoolAncestors(body, (error, data, response) => {
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
 **body** | [**RequestsGetMempoolAncestorsRequest**](RequestsGetMempoolAncestorsRequest.md)| Mempool ancestors request parameters | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMempoolDescendants"></a>
# **getMempoolDescendants**
> InlineResponse20020 getMempoolDescendants(body)

Get mempool descendants

Returns all in-mempool descendants for a transaction in the mempool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.MempoolApi();
let body = new SatstreamJavascriptSdk.RequestsGetMempoolDescendantsRequest(); // RequestsGetMempoolDescendantsRequest | Mempool descendants request parameters

apiInstance.getMempoolDescendants(body, (error, data, response) => {
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
 **body** | [**RequestsGetMempoolDescendantsRequest**](RequestsGetMempoolDescendantsRequest.md)| Mempool descendants request parameters | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMempoolInfo"></a>
# **getMempoolInfo**
> InlineResponse20021 getMempoolInfo()

Get mempool information

Returns details on the active state of the TX memory pool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.MempoolApi();
apiInstance.getMempoolInfo((error, data, response) => {
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

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawMempool"></a>
# **getRawMempool**
> InlineResponse20022 getRawMempool(body)

Get raw mempool

Returns all transaction ids in memory pool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.MempoolApi();
let body = new SatstreamJavascriptSdk.RequestsGetRawMempoolRequest(); // RequestsGetRawMempoolRequest | Raw mempool request parameters

apiInstance.getRawMempool(body, (error, data, response) => {
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
 **body** | [**RequestsGetRawMempoolRequest**](RequestsGetRawMempoolRequest.md)| Raw mempool request parameters | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testMempoolAccept"></a>
# **testMempoolAccept**
> InlineResponse20023 testMempoolAccept(body)

Test mempool accept

Tests whether raw transactions would be accepted by mempool

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.MempoolApi();
let body = new SatstreamJavascriptSdk.RequestsTestMempoolAcceptRequest(); // RequestsTestMempoolAcceptRequest | Raw transactions to test

apiInstance.testMempoolAccept(body, (error, data, response) => {
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
 **body** | [**RequestsTestMempoolAcceptRequest**](RequestsTestMempoolAcceptRequest.md)| Raw transactions to test | 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

