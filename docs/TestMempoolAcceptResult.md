# SatstreamJavascriptSdk.TestMempoolAcceptResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **Boolean** | Whether this tx would be accepted to the mempool | [optional] 
**fees** | **AllOfTestMempoolAcceptResultFees** | Transaction fees | [optional] 
**packageError** | **String** | Package validation error, if any | [optional] 
**rejectReason** | **String** | Rejection string | [optional] 
**txid** | **String** | The transaction hash in hex | [optional] 
**vsize** | **Number** | Virtual transaction size as defined in BIP 141 | [optional] 
**wtxid** | **String** | The transaction witness hash in hex | [optional] 
