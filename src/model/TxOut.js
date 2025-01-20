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
 * The TxOut model module.
 * @module model/TxOut
 * @version 1.0.45
 */
export default class TxOut {
  /**
   * Constructs a new <code>TxOut</code>.
   * @alias module:model/TxOut
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TxOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TxOut} obj Optional instance to populate.
   * @return {module:model/TxOut} The populated <code>TxOut</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TxOut();
      if (data.hasOwnProperty('bestblock'))
        obj.bestblock = ApiClient.convertToType(data['bestblock'], 'String');
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'Boolean');
      if (data.hasOwnProperty('confirmations'))
        obj.confirmations = ApiClient.convertToType(data['confirmations'], 'Number');
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = ApiClient.convertToType(data['scriptPubKey'], Object);
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * The hash of the block at the tip of the chain
 * @member {String} bestblock
 */
TxOut.prototype.bestblock = undefined;

/**
 * Whether this is a coinbase transaction
 * @member {Boolean} coinbase
 */
TxOut.prototype.coinbase = undefined;

/**
 * The number of confirmations
 * @member {Number} confirmations
 */
TxOut.prototype.confirmations = undefined;

/**
 * The public key script
 * @member {Object} scriptPubKey
 */
TxOut.prototype.scriptPubKey = undefined;

/**
 * The transaction value in BTC
 * @member {Number} value
 */
TxOut.prototype.value = undefined;

