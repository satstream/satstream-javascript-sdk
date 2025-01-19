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
import ScriptSig from './ScriptSig';

/**
 * The TxVin1 model module.
 * @module model/TxVin1
 * @version 1.0.43
 */
export default class TxVin1 {
  /**
   * Constructs a new <code>TxVin1</code>.
   * @alias module:model/TxVin1
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TxVin1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TxVin1} obj Optional instance to populate.
   * @return {module:model/TxVin1} The populated <code>TxVin1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TxVin1();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'String');
      if (data.hasOwnProperty('scriptSig'))
        obj.scriptSig = ScriptSig.constructFromObject(data['scriptSig']);
      if (data.hasOwnProperty('sequence'))
        obj.sequence = ApiClient.convertToType(data['sequence'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('txinwitness'))
        obj.txinwitness = ApiClient.convertToType(data['txinwitness'], ['String']);
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} coinbase
 */
TxVin1.prototype.coinbase = undefined;

/**
 * @member {module:model/ScriptSig} scriptSig
 */
TxVin1.prototype.scriptSig = undefined;

/**
 * @member {Number} sequence
 */
TxVin1.prototype.sequence = undefined;

/**
 * @member {String} txid
 */
TxVin1.prototype.txid = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
TxVin1.prototype.txinwitness = undefined;

/**
 * @member {Number} vout
 */
TxVin1.prototype.vout = undefined;

