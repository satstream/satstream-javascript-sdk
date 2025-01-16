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
 * The BlockVin3 model module.
 * @module model/BlockVin3
 * @version 1.0.39
 */
export default class BlockVin3 {
  /**
   * Constructs a new <code>BlockVin3</code>.
   * @alias module:model/BlockVin3
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BlockVin3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlockVin3} obj Optional instance to populate.
   * @return {module:model/BlockVin3} The populated <code>BlockVin3</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BlockVin3();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'String');
      if (data.hasOwnProperty('prevout'))
        obj.prevout = ApiClient.convertToType(data['prevout'], Object);
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
BlockVin3.prototype.coinbase = undefined;

/**
 * Detailed previous output
 * @member {Object} prevout
 */
BlockVin3.prototype.prevout = undefined;

/**
 * @member {module:model/ScriptSig} scriptSig
 */
BlockVin3.prototype.scriptSig = undefined;

/**
 * @member {Number} sequence
 */
BlockVin3.prototype.sequence = undefined;

/**
 * @member {String} txid
 */
BlockVin3.prototype.txid = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
BlockVin3.prototype.txinwitness = undefined;

/**
 * @member {Number} vout
 */
BlockVin3.prototype.vout = undefined;

