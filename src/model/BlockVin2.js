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

/**
 * The BlockVin2 model module.
 * @module model/BlockVin2
 * @version 1.0.25
 */
export default class BlockVin2 {
  /**
   * Constructs a new <code>BlockVin2</code>.
   * @alias module:model/BlockVin2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BlockVin2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlockVin2} obj Optional instance to populate.
   * @return {module:model/BlockVin2} The populated <code>BlockVin2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BlockVin2();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'String');
      if (data.hasOwnProperty('scriptSig'))
        obj.scriptSig = ApiClient.convertToType(data['scriptSig'], Object);
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
 * Coinbase transaction input
 * @member {String} coinbase
 */
BlockVin2.prototype.coinbase = undefined;

/**
 * The script signature
 * @member {Object} scriptSig
 */
BlockVin2.prototype.scriptSig = undefined;

/**
 * Input sequence number
 * @member {Number} sequence
 */
BlockVin2.prototype.sequence = undefined;

/**
 * Transaction ID of the referenced output
 * @member {String} txid
 */
BlockVin2.prototype.txid = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
BlockVin2.prototype.txinwitness = undefined;

/**
 * Index of the referenced output
 * @member {Number} vout
 */
BlockVin2.prototype.vout = undefined;

