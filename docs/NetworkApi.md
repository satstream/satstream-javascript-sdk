# SatstreamJavascriptSdk.NetworkApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChainTxStats**](NetworkApi.md#getChainTxStats) | **POST** /chain/txstats | Get chain tx stats
[**getDifficulty**](NetworkApi.md#getDifficulty) | **GET** /chain/difficulty | Get difficulty

<a name="getChainTxStats"></a>
# **getChainTxStats**
> GetChainTxStatsResponse getChainTxStats(body)

Get chain tx stats

Computes statistics about the total number and rate of transactions in the chain

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.NetworkApi();
let body = new SatstreamJavascriptSdk.GetChainTxStatsRequest(); // GetChainTxStatsRequest | Chain tx stats request parameters

apiInstance.getChainTxStats(body, (error, data, response) => {
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
 **body** | [**GetChainTxStatsRequest**](GetChainTxStatsRequest.md)| Chain tx stats request parameters | 

### Return type

[**GetChainTxStatsResponse**](GetChainTxStatsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDifficulty"></a>
# **getDifficulty**
> GetDifficultyResponse getDifficulty()

Get difficulty

Returns the proof-of-work difficulty as a multiple of the minimum difficulty

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.NetworkApi();
apiInstance.getDifficulty((error, data, response) => {
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

[**GetDifficultyResponse**](GetDifficultyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

