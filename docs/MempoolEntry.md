# SatstreamJavascriptSdk.MempoolEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestorcount** | **Number** | Number of in-mempool ancestor transactions | [optional] 
**ancestorsize** | **Number** | Virtual size of in-mempool ancestors | [optional] 
**bip125Replaceable** | **Boolean** | Whether this transaction is replaceable | [optional] 
**depends** | **[String]** | Parent transaction IDs | [optional] 
**descendantcount** | **Number** | Number of in-mempool descendant transactions | [optional] 
**descendantsize** | **Number** | Virtual size of in-mempool descendants | [optional] 
**fees** | **AllOfMempoolEntryFees** | Fee information | [optional] 
**height** | **Number** | Block height when transaction entered pool | [optional] 
**spentby** | **[String]** | Child transaction IDs | [optional] 
**time** | **Number** | Time transaction entered pool | [optional] 
**unbroadcast** | **Boolean** | Whether this transaction is currently unbroadcast | [optional] 
**vsize** | **Number** | Virtual transaction size | [optional] 
**weight** | **Number** | Transaction weight | [optional] 
**wtxid** | **String** | Hash of serialized transaction with witness data | [optional] 
