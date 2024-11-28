# SatstreamJavascriptSdk.AddressesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddress**](AddressesApi.md#getAddress) | **GET** /address/{address} | Get address info
[**getAddressDeltas**](AddressesApi.md#getAddressDeltas) | **GET** /address/{address}/deltas | Get address deltas
[**getAddressRuneDeltas**](AddressesApi.md#getAddressRuneDeltas) | **GET** /address/{address}/deltas/runes | Get address rune deltas
[**getAddressUtxos**](AddressesApi.md#getAddressUtxos) | **GET** /address/{address}/outputs | Get UTXOs for an address
[**validateAddress**](AddressesApi.md#validateAddress) | **GET** /address/{address}/validate | Validate address

<a name="getAddress"></a>
# **getAddress**
> GetAddressResponse getAddress(address)

Get address info

Get detailed information about a specific address

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.AddressesApi();
let address = "address_example"; // String | Address

apiInstance.getAddress(address, (error, data, response) => {
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
 **address** | **String**| Address | 

### Return type

[**GetAddressResponse**](GetAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressDeltas"></a>
# **getAddressDeltas**
> GetAddressDeltasResponse getAddressDeltas(address, opts)

Get address deltas

Get deltas for a specific address with pagination

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.AddressesApi();
let address = "address_example"; // String | Address
let opts = { 
  'pageSize': 56, // Number | Number of results per page (default: 100, max: 1000)
  'startHeight': 56, // Number | Start block height
  'endHeight': 56, // Number | End block height
  'cursor': "cursor_example" // String | Base64 encoded cursor for pagination
};
apiInstance.getAddressDeltas(address, opts, (error, data, response) => {
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
 **address** | **String**| Address | 
 **pageSize** | **Number**| Number of results per page (default: 100, max: 1000) | [optional] 
 **startHeight** | **Number**| Start block height | [optional] 
 **endHeight** | **Number**| End block height | [optional] 
 **cursor** | **String**| Base64 encoded cursor for pagination | [optional] 

### Return type

[**GetAddressDeltasResponse**](GetAddressDeltasResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressRuneDeltas"></a>
# **getAddressRuneDeltas**
> GetAddressRuneDeltasResponse getAddressRuneDeltas(address, opts)

Get address rune deltas

Get rune deltas for a specific address with pagination

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.AddressesApi();
let address = "address_example"; // String | Address
let opts = { 
  'pageSize': 56, // Number | Number of results per page (default: 100, max: 1000)
  'startHeight': 56, // Number | Start block height
  'endHeight': 56, // Number | End block height
  'cursor': "cursor_example" // String | Cursor for pagination
};
apiInstance.getAddressRuneDeltas(address, opts, (error, data, response) => {
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
 **address** | **String**| Address | 
 **pageSize** | **Number**| Number of results per page (default: 100, max: 1000) | [optional] 
 **startHeight** | **Number**| Start block height | [optional] 
 **endHeight** | **Number**| End block height | [optional] 
 **cursor** | **String**| Cursor for pagination | [optional] 

### Return type

[**GetAddressRuneDeltasResponse**](GetAddressRuneDeltasResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressUtxos"></a>
# **getAddressUtxos**
> GetAddressUTXOsResponse getAddressUtxos(address, opts)

Get UTXOs for an address

Retrieve UTXOs held by a specific address with optional type filtering

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.AddressesApi();
let address = "address_example"; // String | Address
let opts = { 
  'type': "type_example" // String | UTXO Type
};
apiInstance.getAddressUtxos(address, opts, (error, data, response) => {
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
 **address** | **String**| Address | 
 **type** | **String**| UTXO Type | [optional] 

### Return type

[**GetAddressUTXOsResponse**](GetAddressUTXOsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validateAddress"></a>
# **validateAddress**
> ValidateAddressResponse validateAddress(address)

Validate address

Returns information about the given Bitcoin address

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';
let defaultClient = SatstreamJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SatstreamJavascriptSdk.AddressesApi();
let address = "address_example"; // String | Bitcoin address to validate

apiInstance.validateAddress(address, (error, data, response) => {
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
 **address** | **String**| Bitcoin address to validate | 

### Return type

[**ValidateAddressResponse**](ValidateAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

