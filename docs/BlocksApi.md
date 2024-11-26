# SatstreamJavascriptSdk.BlocksApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockCount**](BlocksApi.md#getBlockCount) | **GET** /blockcount | Get the height of the latest block
[**getBlockDecoded**](BlocksApi.md#getBlockDecoded) | **GET** /block/raw/{identifier}/decoded | Get block by hash or height (verbosity 2)
[**getBlockHashByHeight**](BlocksApi.md#getBlockHashByHeight) | **GET** /blockhash/{block_height} | Returns blockhash of specified block.
[**getBlockHex**](BlocksApi.md#getBlockHex) | **GET** /block/raw/{identifier}/hex | Get block by hash or height (verbosity 0)
[**getBlockInfo**](BlocksApi.md#getBlockInfo) | **GET** /block/{identifier} | Get block info by hash or height
[**getBlockPrevout**](BlocksApi.md#getBlockPrevout) | **GET** /block/raw/{identifier}/prevout | Get block by hash or height (verbosity 3)
[**getBlockStats**](BlocksApi.md#getBlockStats) | **POST** /block/stats | Get block stats
[**getBlockSummary**](BlocksApi.md#getBlockSummary) | **GET** /block/raw/{identifier}/summary | Get block by hash or height (verbosity 1)
[**getBlockchainInfo**](BlocksApi.md#getBlockchainInfo) | **GET** /blockchain/info | Get blockchain information
[**getBlocks**](BlocksApi.md#getBlocks) | **GET** /blocks | Returns the latest block height, last 100 block hashes, and featured inscriptions
[**getLatestBlockHeight**](BlocksApi.md#getLatestBlockHeight) | **GET** /blockheight | Returns the height of the latest block.
[**getLatestBlockhash**](BlocksApi.md#getLatestBlockhash) | **GET** /blockhash | Returns blockhash for the latest block.
[**getLatestBlocktime**](BlocksApi.md#getLatestBlocktime) | **GET** /blocktime | Get the timestamp of the latest block

<a name="getBlockCount"></a>
# **getBlockCount**
> InlineResponse20011 getBlockCount()

Get the height of the latest block

Returns the height of the latest block

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
apiInstance.getBlockCount((error, data, response) => {
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockDecoded"></a>
# **getBlockDecoded**
> InlineResponse2004 getBlockDecoded(identifier)

Get block by hash or height (verbosity 2)

Get block by hash or height as a decoded object

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let identifier = "identifier_example"; // String | Block hash or height

apiInstance.getBlockDecoded(identifier, (error, data, response) => {
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
 **identifier** | **String**| Block hash or height | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockHashByHeight"></a>
# **getBlockHashByHeight**
> InlineResponse2005 getBlockHashByHeight(blockHeight)

Returns blockhash of specified block.

Returns blockhash of specified block.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let blockHeight = "blockHeight_example"; // String | Block Height

apiInstance.getBlockHashByHeight(blockHeight, (error, data, response) => {
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
 **blockHeight** | **String**| Block Height | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockHex"></a>
# **getBlockHex**
> InlineResponse2005 getBlockHex(identifier)

Get block by hash or height (verbosity 0)

Get block by hash or height as a raw hex string

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let identifier = "identifier_example"; // String | Block hash or height

apiInstance.getBlockHex(identifier, (error, data, response) => {
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
 **identifier** | **String**| Block hash or height | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockInfo"></a>
# **getBlockInfo**
> InlineResponse2009 getBlockInfo(identifier)

Get block info by hash or height

Get detailed information about a specific block by hash or height

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let identifier = "identifier_example"; // String | Block hash or height

apiInstance.getBlockInfo(identifier, (error, data, response) => {
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
 **identifier** | **String**| Block hash or height | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockPrevout"></a>
# **getBlockPrevout**
> InlineResponse2006 getBlockPrevout(identifier)

Get block by hash or height (verbosity 3)

Get block by hash or height with prevout information

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let identifier = "identifier_example"; // String | Block hash or height

apiInstance.getBlockPrevout(identifier, (error, data, response) => {
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
 **identifier** | **String**| Block hash or height | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockStats"></a>
# **getBlockStats**
> InlineResponse2008 getBlockStats(body)

Get block stats

Computes per block statistics for a given window

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let body = new SatstreamJavascriptSdk.RequestsGetBlockStatsRequest(); // RequestsGetBlockStatsRequest | Block stats request parameters

apiInstance.getBlockStats(body, (error, data, response) => {
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
 **body** | [**RequestsGetBlockStatsRequest**](RequestsGetBlockStatsRequest.md)| Block stats request parameters | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockSummary"></a>
# **getBlockSummary**
> InlineResponse2007 getBlockSummary(identifier)

Get block by hash or height (verbosity 1)

Get block by hash or height as a summary object

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
let identifier = "identifier_example"; // String | Block hash or height

apiInstance.getBlockSummary(identifier, (error, data, response) => {
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
 **identifier** | **String**| Block hash or height | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockchainInfo"></a>
# **getBlockchainInfo**
> InlineResponse20010 getBlockchainInfo()

Get blockchain information

Returns an object containing various state info regarding blockchain processing

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
apiInstance.getBlockchainInfo((error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlocks"></a>
# **getBlocks**
> InlineResponse20012 getBlocks()

Returns the latest block height, last 100 block hashes, and featured inscriptions

Returns the latest block height, last 100 block hashes, and featured inscriptions

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
apiInstance.getBlocks((error, data, response) => {
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

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestBlockHeight"></a>
# **getLatestBlockHeight**
> InlineResponse20011 getLatestBlockHeight()

Returns the height of the latest block.

Returns the height of the latest block.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
apiInstance.getLatestBlockHeight((error, data, response) => {
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestBlockhash"></a>
# **getLatestBlockhash**
> InlineResponse2005 getLatestBlockhash()

Returns blockhash for the latest block.

Returns blockhash for the latest block.

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
apiInstance.getLatestBlockhash((error, data, response) => {
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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestBlocktime"></a>
# **getLatestBlocktime**
> InlineResponse20011 getLatestBlocktime()

Get the timestamp of the latest block

Returns the UNIX timestamp of when the latest block was mined

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.BlocksApi();
apiInstance.getLatestBlocktime((error, data, response) => {
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

