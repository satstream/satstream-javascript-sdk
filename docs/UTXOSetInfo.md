# SatstreamJavascriptSdk.UTXOSetInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bestblock** | **String** | The hash of the block at which these statistics are calculated | [optional] 
**blockInfo** | **AllOfUTXOSetInfoBlockInfo** | Info on amounts in the block at this height | [optional] 
**bogosize** | **Number** | Database-independent metric indicating the UTXO set size | [optional] 
**diskSize** | **Number** | The estimated size of the chainstate on disk | [optional] 
**hashSerialized2** | **String** | The serialized hash (only for hash_serialized_2) | [optional] 
**height** | **Number** | The block height of the returned statistics | [optional] 
**muhash** | **String** | The serialized hash (only for muhash) | [optional] 
**totalAmount** | **Number** | The total amount of coins in the UTXO set | [optional] 
**totalUnspendableAmount** | **Number** | Total amount permanently excluded from UTXO set | [optional] 
**transactions** | **Number** | The number of transactions with unspent outputs | [optional] 
**txouts** | **Number** | The number of unspent transaction outputs | [optional] 
