# SatstreamJavascriptSdk.CreatePSBTRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**[CreatePSBTInput]**](CreatePSBTInput.md) | The inputs for the transaction | 
**locktime** | **Number** | Raw locktime. Non-0 value also locktime-activates inputs | [optional] 
**outputs** | [**[CreatePSBTOutput]**](CreatePSBTOutput.md) | The outputs (address:amount pairs or {\&quot;data\&quot;:\&quot;hex\&quot;}) | 
**replaceable** | **Boolean** | Marks this transaction as BIP125-replaceable | [optional] 
