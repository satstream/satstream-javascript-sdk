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
import BigInt from './BigInt';

/**
 * The GithubComSatstreamSsUtilsRpcUtxoRune model module.
 * @module model/GithubComSatstreamSsUtilsRpcUtxoRune
 * @version 1.0.8
 */
export default class GithubComSatstreamSsUtilsRpcUtxoRune {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsRpcUtxoRune</code>.
   * @alias module:model/GithubComSatstreamSsUtilsRpcUtxoRune
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsRpcUtxoRune</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsRpcUtxoRune} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsRpcUtxoRune} The populated <code>GithubComSatstreamSsUtilsRpcUtxoRune</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsRpcUtxoRune();
      if (data.hasOwnProperty('amount'))
        obj.amount = BigInt.constructFromObject(data['amount']);
      if (data.hasOwnProperty('rune_id'))
        obj.runeId = ApiClient.convertToType(data['rune_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/BigInt} amount
 */
GithubComSatstreamSsUtilsRpcUtxoRune.prototype.amount = undefined;

/**
 * @member {String} runeId
 */
GithubComSatstreamSsUtilsRpcUtxoRune.prototype.runeId = undefined;

