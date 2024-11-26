# SatstreamJavascriptSdk.InscriptionsApi

All URIs are relative to *https://api.satstream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decodeTx**](InscriptionsApi.md#decodeTx) | **GET** /decode/{txid} | Decode a transaction
[**fetchInscriptionChild**](InscriptionsApi.md#fetchInscriptionChild) | **GET** /inscription/{inscription_id}/child/{child_index} | Get inscription child info
[**fetchInscriptions**](InscriptionsApi.md#fetchInscriptions) | **POST** /inscriptions | Fetch multiple inscriptions
[**getAddress**](InscriptionsApi.md#getAddress) | **GET** /address/{address} | Get address info
[**getAddressUtxos**](InscriptionsApi.md#getAddressUtxos) | **GET** /address/{address}/outputs | Get UTXOs for an address
[**getBlockByHeight**](InscriptionsApi.md#getBlockByHeight) | **GET** /block/height/{block_height} | Get block info by height
[**getBlockCount**](InscriptionsApi.md#getBlockCount) | **GET** /blockcount | Get the height of the latest block
[**getBlockHashByHeight**](InscriptionsApi.md#getBlockHashByHeight) | **GET** /blockhash/{block_height} | Returns blockhash of specified block.
[**getBlockInscriptions**](InscriptionsApi.md#getBlockInscriptions) | **GET** /inscriptions/block/{block_height} | Get inscriptions in a specific block
[**getBlocks**](InscriptionsApi.md#getBlocks) | **GET** /blocks | Returns the latest block height, last 100 block hashes, and featured inscriptions
[**getInscription**](InscriptionsApi.md#getInscription) | **GET** /inscription/{inscription_id} | Get inscription info
[**getLatestBlockHeight**](InscriptionsApi.md#getLatestBlockHeight) | **GET** /latestblockheight | Returns the height of the latest block.
[**getLatestBlockhash**](InscriptionsApi.md#getLatestBlockhash) | **GET** /latestblockhash | Returns blockhash for the latest block.
[**getLatestBlocktime**](InscriptionsApi.md#getLatestBlocktime) | **GET** /blocktime | Get the timestamp of the latest block
[**getLatestInscriptions**](InscriptionsApi.md#getLatestInscriptions) | **GET** /inscriptions/latest | Get latest inscriptions
[**getLatestInscriptionsPage**](InscriptionsApi.md#getLatestInscriptionsPage) | **GET** /inscriptions/page/{page} | Get latest inscriptions page
[**getLatestRunes**](InscriptionsApi.md#getLatestRunes) | **GET** /runes/latest | Get latest runes
[**getLatestRunesPage**](InscriptionsApi.md#getLatestRunesPage) | **GET** /runes/page/{page} | Get latest runes page
[**getOutputByOutpoint**](InscriptionsApi.md#getOutputByOutpoint) | **GET** /output/outpoint/{outpoint} | Get output info by outpoint
[**getOutputs**](InscriptionsApi.md#getOutputs) | **POST** /outputs | Get multiple outputs
[**getRune**](InscriptionsApi.md#getRune) | **GET** /rune/{rune_name} | Get rune info
[**getSatoshi**](InscriptionsApi.md#getSatoshi) | **GET** /sat/{number} | Get satoshi info
[**getStatus**](InscriptionsApi.md#getStatus) | **GET** /status | Get server status
[**getTransaction**](InscriptionsApi.md#getTransaction) | **GET** /tx/{txid} | Get transaction info

<a name="decodeTx"></a>
# **decodeTx**
> GithubComSatstreamSsApiServerApiTransactionResponsesDecodeResponse decodeTx(txid)

Decode a transaction

Decodes a transaction and returns its inscriptions and runestone data

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
let txid = "txid_example"; // String | Transaction ID

apiInstance.decodeTx(txid, (error, data, response) => {
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
 **txid** | **String**| Transaction ID | 

### Return type

[**GithubComSatstreamSsApiServerApiTransactionResponsesDecodeResponse**](GithubComSatstreamSsApiServerApiTransactionResponsesDecodeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchInscriptionChild"></a>
# **fetchInscriptionChild**
> GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse fetchInscriptionChild(inscriptionId, childIndex)

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

[**GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse**](GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchInscriptions"></a>
# **fetchInscriptions**
> [GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse] fetchInscriptions(body)

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

[**[GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse]**](GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddress"></a>
# **getAddress**
> GithubComSatstreamSsApiServerApiAddressResponsesAddressResponse getAddress(address)

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**GithubComSatstreamSsApiServerApiAddressResponsesAddressResponse**](GithubComSatstreamSsApiServerApiAddressResponsesAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressUtxos"></a>
# **getAddressUtxos**
> [GithubComSatstreamSsApiServerApiAddressResponsesOutputResponse] getAddressUtxos(address, opts)

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**[GithubComSatstreamSsApiServerApiAddressResponsesOutputResponse]**](GithubComSatstreamSsApiServerApiAddressResponsesOutputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockByHeight"></a>
# **getBlockByHeight**
> GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse getBlockByHeight(blockHeight)

Get block info by height

Get detailed information about a specific block by height

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
let blockHeight = "blockHeight_example"; // String | Block Height

apiInstance.getBlockByHeight(blockHeight, (error, data, response) => {
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

[**GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse**](GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockCount"></a>
# **getBlockCount**
> GithubComSatstreamSsApiServerApiBlockResponsesBlockCountResponse getBlockCount()

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**GithubComSatstreamSsApiServerApiBlockResponsesBlockCountResponse**](GithubComSatstreamSsApiServerApiBlockResponsesBlockCountResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockHashByHeight"></a>
# **getBlockHashByHeight**
> GithubComSatstreamSsApiServerApiBlockResponsesBlockHashResponse getBlockHashByHeight(blockHeight)

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**GithubComSatstreamSsApiServerApiBlockResponsesBlockHashResponse**](GithubComSatstreamSsApiServerApiBlockResponsesBlockHashResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockInscriptions"></a>
# **getBlockInscriptions**
> GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse getBlockInscriptions(blockHeight)

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

[**GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse**](GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlocks"></a>
# **getBlocks**
> GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse getBlocks()

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse**](GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInscription"></a>
# **getInscription**
> GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse getInscription(inscriptionId)

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

[**GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse**](GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestBlockHeight"></a>
# **getLatestBlockHeight**
> ResponsesLatestBlockHeightResponse getLatestBlockHeight()

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**ResponsesLatestBlockHeightResponse**](ResponsesLatestBlockHeightResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestBlockhash"></a>
# **getLatestBlockhash**
> ResponsesLatestBlockHashResponse getLatestBlockhash()

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**ResponsesLatestBlockHashResponse**](ResponsesLatestBlockHashResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestBlocktime"></a>
# **getLatestBlocktime**
> ResponsesLatestBlockTimeResponse getLatestBlocktime()

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

let apiInstance = new SatstreamJavascriptSdk.InscriptionsApi();
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

[**ResponsesLatestBlockTimeResponse**](ResponsesLatestBlockTimeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestInscriptions"></a>
# **getLatestInscriptions**
> GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse getLatestInscriptions()

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

[**GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse**](GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestInscriptionsPage"></a>
# **getLatestInscriptionsPage**
> GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse getLatestInscriptionsPage(page)

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

[**GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse**](GithubComSatstreamSsApiServerApiInscriptionResponsesLatestInscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestRunes"></a>
# **getLatestRunes**
> GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse getLatestRunes()

Get latest runes

Retrieve information about the last 100 inscribed runes (first page)

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
apiInstance.getLatestRunes((error, data, response) => {
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

[**GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse**](GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestRunesPage"></a>
# **getLatestRunesPage**
> GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse getLatestRunesPage(page)

Get latest runes page

Retrieve a specific page of 100 inscribed runes

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

apiInstance.getLatestRunesPage(page, (error, data, response) => {
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

[**GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse**](GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOutputByOutpoint"></a>
# **getOutputByOutpoint**
> ResponsesGetOutputByOutpointResponse getOutputByOutpoint(outpoint)

Get output info by outpoint

Retrieve information about a specific UTXO using outpoint string

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
let outpoint = "outpoint_example"; // String | Outpoint

apiInstance.getOutputByOutpoint(outpoint, (error, data, response) => {
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
 **outpoint** | **String**| Outpoint | 

### Return type

[**ResponsesGetOutputByOutpointResponse**](ResponsesGetOutputByOutpointResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOutputs"></a>
# **getOutputs**
> [ResponsesGetOutputsResponse] getOutputs(body)

Get multiple outputs

Retrieve information about multiple UTXOs

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
let body = ["body_example"]; // [String] | Outpoints

apiInstance.getOutputs(body, (error, data, response) => {
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
 **body** | [**[String]**](String.md)| Outpoints | 

### Return type

[**[ResponsesGetOutputsResponse]**](ResponsesGetOutputsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRune"></a>
# **getRune**
> GithubComSatstreamSsApiServerApiRuneResponsesRuneResponse getRune(runeName)

Get rune info

Retrieve information about a specific rune

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
let runeName = "runeName_example"; // String | Rune Name

apiInstance.getRune(runeName, (error, data, response) => {
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
 **runeName** | **String**| Rune Name | 

### Return type

[**GithubComSatstreamSsApiServerApiRuneResponsesRuneResponse**](GithubComSatstreamSsApiServerApiRuneResponsesRuneResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSatoshi"></a>
# **getSatoshi**
> GithubComSatstreamSsApiServerApiSatoshiResponsesSatoshiResponse getSatoshi(_number)

Get satoshi info

Retrieve information about a specific satoshi

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
let _number = 56; // Number | Satoshi Number

apiInstance.getSatoshi(_number, (error, data, response) => {
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
 **_number** | **Number**| Satoshi Number | 

### Return type

[**GithubComSatstreamSsApiServerApiSatoshiResponsesSatoshiResponse**](GithubComSatstreamSsApiServerApiSatoshiResponsesSatoshiResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStatus"></a>
# **getStatus**
> GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse getStatus()

Get server status

Retrieve information about the server installation and index

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
apiInstance.getStatus((error, data, response) => {
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

[**GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse**](GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransaction"></a>
# **getTransaction**
> GithubComSatstreamSsApiServerApiTransactionResponsesTransactionResponse getTransaction(txid)

Get transaction info

Retrieve information about a specific transaction

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
let txid = "txid_example"; // String | Transaction ID

apiInstance.getTransaction(txid, (error, data, response) => {
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
 **txid** | **String**| Transaction ID | 

### Return type

[**GithubComSatstreamSsApiServerApiTransactionResponsesTransactionResponse**](GithubComSatstreamSsApiServerApiTransactionResponsesTransactionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

