# SatstreamApi.AddressesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressBalance**](AddressesApi.md#getAddressBalance) | **GET** /addresses/{address}/balance | Get address balance
[**getAddressNonInscriptionUtxos**](AddressesApi.md#getAddressNonInscriptionUtxos) | **GET** /addresses/{address}/utxos | Get address non-inscription UTXOs
[**getAddressRuneBalance**](AddressesApi.md#getAddressRuneBalance) | **GET** /addresses/{address}/runes/{runeid} | Get address rune balance
[**getAddressRunesBalanceList**](AddressesApi.md#getAddressRunesBalanceList) | **GET** /addresses/{address}/runes | Get address runes balance list
[**getAddressTimeframeBalance**](AddressesApi.md#getAddressTimeframeBalance) | **GET** /addresses/{address}/balance/timeframe | Get address timeframe balance


<a name="getAddressBalance"></a>
# **getAddressBalance**
> ResponsesGetAddressBalance getAddressBalance(address)

Get address balance

Get the current balance of a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressBalance(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**ResponsesGetAddressBalance**](ResponsesGetAddressBalance.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddressNonInscriptionUtxos"></a>
# **getAddressNonInscriptionUtxos**
> ResponsesGetAddressNonInscriptionUTXO getAddressNonInscriptionUtxos(address)

Get address non-inscription UTXOs

Get all non-inscription UTXOs for a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressNonInscriptionUtxos(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**ResponsesGetAddressNonInscriptionUTXO**](ResponsesGetAddressNonInscriptionUTXO.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddressRuneBalance"></a>
# **getAddressRuneBalance**
> ResponsesGetAddressRuneBalance getAddressRuneBalance(address, runeid)

Get address rune balance

Get the balance of a specific rune for a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address

var runeid = "runeid_example"; // String | Rune ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressRuneBalance(address, runeid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 
 **runeid** | **String**| Rune ID | 

### Return type

[**ResponsesGetAddressRuneBalance**](ResponsesGetAddressRuneBalance.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddressRunesBalanceList"></a>
# **getAddressRunesBalanceList**
> ResponsesGetAddressRunesBalanceList getAddressRunesBalanceList(address)

Get address runes balance list

Get the balance of all runes for a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressRunesBalanceList(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**ResponsesGetAddressRunesBalanceList**](ResponsesGetAddressRunesBalanceList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddressTimeframeBalance"></a>
# **getAddressTimeframeBalance**
> ResponsesGetAddressTimeframeBalance getAddressTimeframeBalance(address, timeframe, opts)

Get address timeframe balance

Get the balance of a Bitcoin address for a specific timeframe

### Example
```javascript
var SatstreamApi = require('satstream_api');
var defaultClient = SatstreamApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address

var timeframe = "timeframe_example"; // String | Timeframe

var opts = { 
  'token': "token_example" // String | Token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddressTimeframeBalance(address, timeframe, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 
 **timeframe** | **String**| Timeframe | 
 **token** | **String**| Token | [optional] 

### Return type

[**ResponsesGetAddressTimeframeBalance**](ResponsesGetAddressTimeframeBalance.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

