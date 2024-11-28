# SatstreamJavascriptSdk.FeeHorizonEstimate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decay** | **Number** | Exponential decay (per block) for historical moving average | [optional] 
**errors** | **[String]** | Errors encountered during processing | [optional] 
**fail** | **AllOfFeeHorizonEstimateFail** | Information about highest range of feerates to fail | [optional] 
**feerate** | **Number** | Estimate fee rate in BTC/kvB | [optional] 
**pass** | **AllOfFeeHorizonEstimatePass** | Information about lowest range of feerates to succeed | [optional] 
**scale** | **Number** | Resolution of confirmation targets at this time horizon | [optional] 