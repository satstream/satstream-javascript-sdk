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
import GithubComSatstreamSsUtilsRpcScriptPubKey from './GithubComSatstreamSsUtilsRpcScriptPubKey';
import GithubComSatstreamSsUtilsRpcUtxoRune from './GithubComSatstreamSsUtilsRpcUtxoRune';

/**
 * The GithubComSatstreamSsUtilsRpcVout model module.
 * @module model/GithubComSatstreamSsUtilsRpcVout
 * @version 1.0.16
 */
export default class GithubComSatstreamSsUtilsRpcVout {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsRpcVout</code>.
   * @alias module:model/GithubComSatstreamSsUtilsRpcVout
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsRpcVout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsRpcVout} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsRpcVout} The populated <code>GithubComSatstreamSsUtilsRpcVout</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsRpcVout();
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('rune_holdings'))
        obj.runeHoldings = ApiClient.convertToType(data['rune_holdings'], [GithubComSatstreamSsUtilsRpcUtxoRune]);
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = GithubComSatstreamSsUtilsRpcScriptPubKey.constructFromObject(data['scriptPubKey']);
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} n
 */
GithubComSatstreamSsUtilsRpcVout.prototype.n = undefined;

/**
 * @member {Array.<module:model/GithubComSatstreamSsUtilsRpcUtxoRune>} runeHoldings
 */
GithubComSatstreamSsUtilsRpcVout.prototype.runeHoldings = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsRpcScriptPubKey} scriptPubKey
 */
GithubComSatstreamSsUtilsRpcVout.prototype.scriptPubKey = undefined;

/**
 * @member {Number} value
 */
GithubComSatstreamSsUtilsRpcVout.prototype.value = undefined;

