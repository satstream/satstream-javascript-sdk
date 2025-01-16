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
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The TransactionCreateRawTxInput model module.
 * @module model/TransactionCreateRawTxInput
 * @version 1.0.38
 */
export default class TransactionCreateRawTxInput {
  /**
   * Constructs a new <code>TransactionCreateRawTxInput</code>.
   * @alias module:model/TransactionCreateRawTxInput
   * @class
   * @param txid {String} The transaction id
   * @param vout {Number} The output number
   */
  constructor(txid, vout) {
    this.txid = txid;
    this.vout = vout;
  }

  /**
   * Constructs a <code>TransactionCreateRawTxInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionCreateRawTxInput} obj Optional instance to populate.
   * @return {module:model/TransactionCreateRawTxInput} The populated <code>TransactionCreateRawTxInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionCreateRawTxInput();
      if (data.hasOwnProperty('sequence'))
        obj.sequence = ApiClient.convertToType(data['sequence'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * The sequence number Optional, default depends on the value of the 'replaceable' and 'locktime' arguments
 * @member {Number} sequence
 */
TransactionCreateRawTxInput.prototype.sequence = undefined;

/**
 * The transaction id
 * @member {String} txid
 */
TransactionCreateRawTxInput.prototype.txid = undefined;

/**
 * The output number
 * @member {Number} vout
 */
TransactionCreateRawTxInput.prototype.vout = undefined;

