# SatstreamJavascriptSdk.CreatePSBTRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**[CreatePSBTInput]**](CreatePSBTInput.md) | The inputs for the transaction | 
**locktime** | **Number** | Raw locktime. Non-0 value also locktime-activates inputs | [optional] 
**outputs** | [**[CreatePSBTOutput]**](CreatePSBTOutput.md) | The outputs for the transaction (each address can only appear once) | 
**replaceable** | **Boolean** | Marks this transaction as BIP125-replaceable | [optional] 
