# SatstreamJavascriptSdk.DecodedPSBTInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bip32Derivs** | [**{String: Bip32Deriv}**](Bip32Deriv.md) | The BIP32 derivation paths | [optional] 
**finalScriptsig** | **AllOfDecodedPSBTInputFinalScriptsig** | The final script sig | [optional] 
**finalScriptwitness** | **[String]** | The final script witness | [optional] 
**nonWitnessUtxo** | **AllOfDecodedPSBTInputNonWitnessUtxo** | Decoded network transaction for non-witness UTXOs | [optional] 
**partialSignatures** | **{String: String}** | The public key and signature pairs | [optional] 
**redeemScript** | **AllOfDecodedPSBTInputRedeemScript** | The redeem script | [optional] 
**sighash** | **String** | The sighash type to be used | [optional] 
**unknown** | **AllOfDecodedPSBTInputUnknown** | Unknown fields | [optional] 
**witnessScript** | **AllOfDecodedPSBTInputWitnessScript** | The witness script | [optional] 
**witnessUtxo** | **AllOfDecodedPSBTInputWitnessUtxo** | Transaction output for witness UTXOs | [optional] 
