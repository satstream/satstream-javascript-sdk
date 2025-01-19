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
 * The UTXOUnspendables model module.
 * @module model/UTXOUnspendables
 * @version 1.0.43
 */
export default class UTXOUnspendables {
  /**
   * Constructs a new <code>UTXOUnspendables</code>.
   * @alias module:model/UTXOUnspendables
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UTXOUnspendables</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UTXOUnspendables} obj Optional instance to populate.
   * @return {module:model/UTXOUnspendables} The populated <code>UTXOUnspendables</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UTXOUnspendables();
      if (data.hasOwnProperty('bip30'))
        obj.bip30 = ApiClient.convertToType(data['bip30'], 'Number');
      if (data.hasOwnProperty('genesis_block'))
        obj.genesisBlock = ApiClient.convertToType(data['genesis_block'], 'Number');
      if (data.hasOwnProperty('scripts'))
        obj.scripts = ApiClient.convertToType(data['scripts'], 'Number');
      if (data.hasOwnProperty('unclaimed_rewards'))
        obj.unclaimedRewards = ApiClient.convertToType(data['unclaimed_rewards'], 'Number');
    }
    return obj;
  }
}

/**
 * Transactions overridden by duplicates
 * @member {Number} bip30
 */
UTXOUnspendables.prototype.bip30 = undefined;

/**
 * Unspendable amount of Genesis block subsidy
 * @member {Number} genesisBlock
 */
UTXOUnspendables.prototype.genesisBlock = undefined;

/**
 * Amounts sent to unspendable scripts
 * @member {Number} scripts
 */
UTXOUnspendables.prototype.scripts = undefined;

/**
 * Fee rewards unclaimed by miners
 * @member {Number} unclaimedRewards
 */
UTXOUnspendables.prototype.unclaimedRewards = undefined;

