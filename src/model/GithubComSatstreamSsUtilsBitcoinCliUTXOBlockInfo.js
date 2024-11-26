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
 * The GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo} The populated <code>GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'Number');
      if (data.hasOwnProperty('new_outputs_ex_coinbase'))
        obj.newOutputsExCoinbase = ApiClient.convertToType(data['new_outputs_ex_coinbase'], 'Number');
      if (data.hasOwnProperty('prevout_spent'))
        obj.prevoutSpent = ApiClient.convertToType(data['prevout_spent'], 'Number');
      if (data.hasOwnProperty('unspendable'))
        obj.unspendable = ApiClient.convertToType(data['unspendable'], 'Number');
      if (data.hasOwnProperty('unspendables'))
        obj.unspendables = ApiClient.convertToType(data['unspendables'], Object);
    }
    return obj;
  }
}

/**
 * Coinbase subsidy amount of this block
 * @member {Number} coinbase
 */
GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo.prototype.coinbase = undefined;

/**
 * Total amount of new outputs created by this block
 * @member {Number} newOutputsExCoinbase
 */
GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo.prototype.newOutputsExCoinbase = undefined;

/**
 * Total amount of all prevouts spent in this block
 * @member {Number} prevoutSpent
 */
GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo.prototype.prevoutSpent = undefined;

/**
 * Total amount of unspendable outputs created
 * @member {Number} unspendable
 */
GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo.prototype.unspendable = undefined;

/**
 * Detailed view of unspendable categories
 * @member {Object} unspendables
 */
GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo.prototype.unspendables = undefined;
