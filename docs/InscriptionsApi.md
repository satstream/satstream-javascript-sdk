# SatstreamJavascriptSdk.InscriptionsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchInscriptionChild**](InscriptionsApi.md#fetchInscriptionChild) | **GET** /inscription/{inscription_id}/{child_index} | Get inscription child info
[**fetchInscriptions**](InscriptionsApi.md#fetchInscriptions) | **POST** /inscriptions | Fetch multiple inscriptions
[**getBlockInscriptions**](InscriptionsApi.md#getBlockInscriptions) | **GET** /inscriptions/block/{block_height} | Get inscriptions in a specific block
[**getBlockInscriptionsPage**](InscriptionsApi.md#getBlockInscriptionsPage) | **GET** /inscriptions/block/{block_height}/{page} | Get paginated inscriptions in a specific block
[**getInscription**](InscriptionsApi.md#getInscription) | **GET** /inscription/{inscription_id} | Get inscription info
[**getLatestInscriptions**](InscriptionsApi.md#getLatestInscriptions) | **GET** /inscriptions | Get latest inscriptions
[**getLatestInscriptionsPage**](InscriptionsApi.md#getLatestInscriptionsPage) | **GET** /inscriptions/{page} | Get latest inscriptions page

<a name="fetchInscriptionChild"></a>
# **fetchInscriptionChild**
> GetInscriptionChildResponse fetchInscriptionChild(inscriptionId, childIndex)

Get inscription child info

Retrieve information about a specific child of an inscription

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
let inscriptionId = "inscriptionId_example"; // String | Inscription ID
let childIndex = 56; // Number | Child Index

apiInstance.fetchInscriptionChild(inscriptionId, childIndex, (error, data, response) => {
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
 **inscriptionId** | **String**| Inscription ID | 
 **childIndex** | **Number**| Child Index | 

### Return type

[**GetInscriptionChildResponse**](GetInscriptionChildResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchInscriptions"></a>
# **fetchInscriptions**
> FetchInscriptionsResponse fetchInscriptions(body)

Fetch multiple inscriptions

Retrieve information about multiple inscriptions

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
let body = ["body_example"]; // [String] | Inscription IDs

apiInstance.fetchInscriptions(body, (error, data, response) => {
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
 **body** | [**[String]**](String.md)| Inscription IDs | 

### Return type

[**FetchInscriptionsResponse**](FetchInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockInscriptions"></a>
# **getBlockInscriptions**
> GetBlockInscriptionsResponse getBlockInscriptions(blockHeight)

Get inscriptions in a specific block

Retrieve all inscriptions in a specific block

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
let blockHeight = 56; // Number | Block Height

apiInstance.getBlockInscriptions(blockHeight, (error, data, response) => {
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
 **blockHeight** | **Number**| Block Height | 

### Return type

[**GetBlockInscriptionsResponse**](GetBlockInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockInscriptionsPage"></a>
# **getBlockInscriptionsPage**
> GetBlockInscriptionsResponse getBlockInscriptionsPage(blockHeight, page)

Get paginated inscriptions in a specific block

Retrieve paginated inscriptions in a specific block

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
let blockHeight = 56; // Number | Block Height
let page = 56; // Number | Page Number

apiInstance.getBlockInscriptionsPage(blockHeight, page, (error, data, response) => {
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
 **blockHeight** | **Number**| Block Height | 
 **page** | **Number**| Page Number | 

### Return type

[**GetBlockInscriptionsResponse**](GetBlockInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInscription"></a>
# **getInscription**
> GetInscriptionResponse getInscription(inscriptionId)

Get inscription info

Get information about a specific inscription

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
let inscriptionId = "inscriptionId_example"; // String | Inscription ID

apiInstance.getInscription(inscriptionId, (error, data, response) => {
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
 **inscriptionId** | **String**| Inscription ID | 

### Return type

[**GetInscriptionResponse**](GetInscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestInscriptions"></a>
# **getLatestInscriptions**
> GetLatestInscriptionsResponse getLatestInscriptions()

Get latest inscriptions

Retrieve the latest 100 inscriptions (first page)

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
apiInstance.getLatestInscriptions((error, data, response) => {
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

[**GetLatestInscriptionsResponse**](GetLatestInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestInscriptionsPage"></a>
# **getLatestInscriptionsPage**
> GetLatestInscriptionsResponse getLatestInscriptionsPage(page)

Get latest inscriptions page

Retrieve a specific page of 100 inscriptions

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
let page = 56; // Number | Page number

apiInstance.getLatestInscriptionsPage(page, (error, data, response) => {
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

[**GetLatestInscriptionsResponse**](GetLatestInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

