# SatstreamJavascriptSdk.FeesApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRecommendedFees**](FeesApi.md#getRecommendedFees) | **GET** /fees | Get recommended fees

<a name="getRecommendedFees"></a>
# **getRecommendedFees**
> ResponsesGetFees getRecommendedFees()

Get recommended fees

Get recommended fees for Bitcoin transactions

### Example
```javascript
import {SatstreamJavascriptSdk} from 'satstream-javascript-sdk';

let apiInstance = new SatstreamJavascriptSdk.FeesApi();
apiInstance.getRecommendedFees((error, data, response) => {
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

[**ResponsesGetFees**](ResponsesGetFees.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

