/*
 * Satstream API
 * Satstream API
 *
 * OpenAPI spec version: 1.0
 * Contact: team@satstream.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import TransactionCreateRawTxInput from './TransactionCreateRawTxInput';

/**
 * The TransactionCreateRawTxRequest model module.
 * @module model/TransactionCreateRawTxRequest
 * @version 1.0.26
 */
export default class TransactionCreateRawTxRequest {
  /**
   * Constructs a new <code>TransactionCreateRawTxRequest</code>.
   * @alias module:model/TransactionCreateRawTxRequest
   * @class
   * @param inputs {Array.<module:model/TransactionCreateRawTxInput>} The inputs for the transaction
   * @param outputs {Array.<Object.<String, Number>>} The outputs for the transaction Each address can only appear once and there can only be one 'data' object
   */
  constructor(inputs, outputs) {
    this.inputs = inputs;
    this.outputs = outputs;
  }

  /**
   * Constructs a <code>TransactionCreateRawTxRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionCreateRawTxRequest} obj Optional instance to populate.
   * @return {module:model/TransactionCreateRawTxRequest} The populated <code>TransactionCreateRawTxRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionCreateRawTxRequest();
      if (data.hasOwnProperty('inputs'))
        obj.inputs = ApiClient.convertToType(data['inputs'], [TransactionCreateRawTxInput]);
      if (data.hasOwnProperty('locktime'))
        obj.locktime = ApiClient.convertToType(data['locktime'], 'Number');
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], [{'String': 'Number'}]);
      if (data.hasOwnProperty('replaceable'))
        obj.replaceable = ApiClient.convertToType(data['replaceable'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The inputs for the transaction
 * @member {Array.<module:model/TransactionCreateRawTxInput>} inputs
 */
TransactionCreateRawTxRequest.prototype.inputs = undefined;

/**
 * Raw locktime. Non-0 value also locktime-activates inputs Optional, defaults to 0
 * @member {Number} locktime
 */
TransactionCreateRawTxRequest.prototype.locktime = undefined;

/**
 * The outputs for the transaction Each address can only appear once and there can only be one 'data' object
 * @member {Array.<Object.<String, Number>>} outputs
 */
TransactionCreateRawTxRequest.prototype.outputs = undefined;

/**
 * Marks this transaction as BIP125-replaceable Allows this transaction to be replaced by a transaction with higher fees If provided, it is an error if explicit sequence numbers are incompatible Optional, defaults to true
 * @member {Boolean} replaceable
 */
TransactionCreateRawTxRequest.prototype.replaceable = undefined;

