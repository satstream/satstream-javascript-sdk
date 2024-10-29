# SatstreamApi.FeesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feesGet**](FeesApi.md#feesGet) | **GET** /fees | Get recommended fees


<a name="feesGet"></a>
# **feesGet**
> InlineResponse2007 feesGet()

Get recommended fees

Get recommended fees for Bitcoin transactions

### Example
```javascript
var SatstreamApi = require('satstream_api');

var apiInstance = new SatstreamApi.FeesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

