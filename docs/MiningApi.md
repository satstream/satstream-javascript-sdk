# SatstreamJavascriptSdk.MiningApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMiningInfo**](MiningApi.md#getMiningInfo) | **GET** /mining/info | Get mining information
[**getNetworkHashps**](MiningApi.md#getNetworkHashps) | **POST** /mining/networkhashps | Get network hash per second

<a name="getMiningInfo"></a>
# **getMiningInfo**
> GetMiningInfoResponse getMiningInfo()

Get mining information

Returns a json object containing mining-related information

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.MiningApi();
apiInstance.getMiningInfo((error, data, response) => {
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

[**GetMiningInfoResponse**](GetMiningInfoResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkHashps"></a>
# **getNetworkHashps**
> GetNetworkHashPSResponse getNetworkHashps(body)

Get network hash per second

Returns the estimated network hashes per second based on the last n blocks

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.MiningApi();
let body = new SatstreamJavascriptSdk.GetNetworkHashPSRequest(); // GetNetworkHashPSRequest | Network hash rate parameters

apiInstance.getNetworkHashps(body, (error, data, response) => {
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
 **body** | [**GetNetworkHashPSRequest**](GetNetworkHashPSRequest.md)| Network hash rate parameters | 

### Return type

[**GetNetworkHashPSResponse**](GetNetworkHashPSResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

