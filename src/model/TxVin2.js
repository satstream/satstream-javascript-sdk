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
import PrevOut from './PrevOut';
import ScriptSig from './ScriptSig';

/**
 * The TxVin2 model module.
 * @module model/TxVin2
 * @version 1.0.21
 */
export default class TxVin2 {
  /**
   * Constructs a new <code>TxVin2</code>.
   * @alias module:model/TxVin2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TxVin2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TxVin2} obj Optional instance to populate.
   * @return {module:model/TxVin2} The populated <code>TxVin2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TxVin2();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'String');
      if (data.hasOwnProperty('prevout'))
        obj.prevout = PrevOut.constructFromObject(data['prevout']);
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
TxVin2.prototype.coinbase = undefined;

/**
 * @member {module:model/PrevOut} prevout
 */
TxVin2.prototype.prevout = undefined;

/**
 * @member {module:model/ScriptSig} scriptSig
 */
TxVin2.prototype.scriptSig = undefined;

/**
 * @member {Number} sequence
 */
TxVin2.prototype.sequence = undefined;

/**
 * @member {String} txid
 */
TxVin2.prototype.txid = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
TxVin2.prototype.txinwitness = undefined;

/**
 * @member {Number} vout
 */
TxVin2.prototype.vout = undefined;

