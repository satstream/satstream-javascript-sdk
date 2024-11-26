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
import GithubComSatstreamSsUtilsBitcoinCliScriptSig from './GithubComSatstreamSsUtilsBitcoinCliScriptSig';

/**
 * The GithubComSatstreamSsUtilsBitcoinCliTxVin1 model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliTxVin1
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliTxVin1 {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliTxVin1</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliTxVin1
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliTxVin1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliTxVin1} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliTxVin1} The populated <code>GithubComSatstreamSsUtilsBitcoinCliTxVin1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliTxVin1();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'String');
      if (data.hasOwnProperty('scriptSig'))
        obj.scriptSig = GithubComSatstreamSsUtilsBitcoinCliScriptSig.constructFromObject(data['scriptSig']);
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
GithubComSatstreamSsUtilsBitcoinCliTxVin1.prototype.coinbase = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsBitcoinCliScriptSig} scriptSig
 */
GithubComSatstreamSsUtilsBitcoinCliTxVin1.prototype.scriptSig = undefined;

/**
 * @member {Number} sequence
 */
GithubComSatstreamSsUtilsBitcoinCliTxVin1.prototype.sequence = undefined;

/**
 * @member {String} txid
 */
GithubComSatstreamSsUtilsBitcoinCliTxVin1.prototype.txid = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
GithubComSatstreamSsUtilsBitcoinCliTxVin1.prototype.txinwitness = undefined;

/**
 * @member {Number} vout
 */
GithubComSatstreamSsUtilsBitcoinCliTxVin1.prototype.vout = undefined;
