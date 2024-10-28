# SatstreamApi.AddressesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressesAddressBalanceGet**](AddressesApi.md#addressesAddressBalanceGet) | **GET** /addresses/{address}/balance | Get address balance
[**addressesAddressBalanceTimeframeGet**](AddressesApi.md#addressesAddressBalanceTimeframeGet) | **GET** /addresses/{address}/balance/timeframe | Get address timeframe balance
[**addressesAddressRunesGet**](AddressesApi.md#addressesAddressRunesGet) | **GET** /addresses/{address}/runes | Get address runes balance list
[**addressesAddressRunesRuneidGet**](AddressesApi.md#addressesAddressRunesRuneidGet) | **GET** /addresses/{address}/runes/{runeid} | Get address rune balance
[**addressesAddressUtxosGet**](AddressesApi.md#addressesAddressUtxosGet) | **GET** /addresses/{address}/utxos | Get address non-inscription UTXOs


<a name="addressesAddressBalanceGet"></a>
# **addressesAddressBalanceGet**
> ResponsesGetAddressBalance addressesAddressBalanceGet(address)

Get address balance

Get the current balance of a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressesAddressBalanceGet(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**ResponsesGetAddressBalance**](ResponsesGetAddressBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addressesAddressBalanceTimeframeGet"></a>
# **addressesAddressBalanceTimeframeGet**
> ResponsesGetAddressTimeframeBalance addressesAddressBalanceTimeframeGet(address, start, end)

Get address timeframe balance

Get the balance of a Bitcoin address for a specific timeframe

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address

var start = 56; // Number | Start block height

var end = 56; // Number | End block height


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressesAddressBalanceTimeframeGet(address, start, end, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 
 **start** | **Number**| Start block height | 
 **end** | **Number**| End block height | 

### Return type

[**ResponsesGetAddressTimeframeBalance**](ResponsesGetAddressTimeframeBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addressesAddressRunesGet"></a>
# **addressesAddressRunesGet**
> InlineResponse200 addressesAddressRunesGet(address)

Get address runes balance list

Get the balance of all runes for a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressesAddressRunesGet(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addressesAddressRunesRuneidGet"></a>
# **addressesAddressRunesRuneidGet**
> ResponsesGetAddressRuneBalance addressesAddressRunesRuneidGet(address, runeid)

Get address rune balance

Get the balance of a specific rune for a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');

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
apiInstance.addressesAddressRunesRuneidGet(address, runeid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 
 **runeid** | **String**| Rune ID | 

### Return type

[**ResponsesGetAddressRuneBalance**](ResponsesGetAddressRuneBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addressesAddressUtxosGet"></a>
# **addressesAddressUtxosGet**
> [ResponsesGetAddressNonInscriptionUTXOData] addressesAddressUtxosGet(address)

Get address non-inscription UTXOs

Get all non-inscription UTXOs for a Bitcoin address

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.AddressesApi();

var address = "address_example"; // String | Bitcoin address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressesAddressUtxosGet(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Bitcoin address | 

### Return type

[**[ResponsesGetAddressNonInscriptionUTXOData]**](ResponsesGetAddressNonInscriptionUTXOData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

