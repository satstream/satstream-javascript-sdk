# SatstreamJavascriptSdk.ValidateAddressResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The bitcoin address validated | [optional] 
**error** | **String** | Error message, if any | [optional] 
**errorLocations** | **[Number]** | Indices of likely error locations | [optional] 
**isscript** | **Boolean** | If the key is a script | [optional] 
**isvalid** | **Boolean** | If the address is valid or not | [optional] 
**iswitness** | **Boolean** | If the address is a witness address | [optional] 
**scriptPubKey** | **String** | The hex-encoded scriptPubKey | [optional] 
**witnessProgram** | **String** | The hex value of the witness program | [optional] 
**witnessVersion** | **Number** | The version number of the witness program | [optional] 
