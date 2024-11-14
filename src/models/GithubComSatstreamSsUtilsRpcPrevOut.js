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
 * The GithubComSatstreamSsUtilsRpcPrevOut model module.
 * @module models/GithubComSatstreamSsUtilsRpcPrevOut
 * @version 1.0
 */
export default class GithubComSatstreamSsUtilsRpcPrevOut {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsRpcPrevOut</code>.
   * @alias module:models/GithubComSatstreamSsUtilsRpcPrevOut
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsRpcPrevOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/GithubComSatstreamSsUtilsRpcPrevOut} obj Optional instance to populate.
   * @return {module:models/GithubComSatstreamSsUtilsRpcPrevOut} The populated <code>GithubComSatstreamSsUtilsRpcPrevOut</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsRpcPrevOut();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('populated'))
        obj.populated = ApiClient.convertToType(data['populated'], 'Boolean');
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
 * @member {Number} height
 */
GithubComSatstreamSsUtilsRpcPrevOut.prototype.height = undefined;

/**
 * @member {Number} n
 */
GithubComSatstreamSsUtilsRpcPrevOut.prototype.n = undefined;

/**
 * * The populated field is used to determine if the prevout has been populated from our code or automatically by the RPC on fetch
 * @member {Boolean} populated
 */
GithubComSatstreamSsUtilsRpcPrevOut.prototype.populated = undefined;

/**
 * @member {Array.<module:models/GithubComSatstreamSsUtilsRpcUtxoRune>} runeHoldings
 */
GithubComSatstreamSsUtilsRpcPrevOut.prototype.runeHoldings = undefined;

/**
 * @member {module:models/GithubComSatstreamSsUtilsRpcScriptPubKey} scriptPubKey
 */
GithubComSatstreamSsUtilsRpcPrevOut.prototype.scriptPubKey = undefined;

/**
 * @member {Number} value
 */
GithubComSatstreamSsUtilsRpcPrevOut.prototype.value = undefined;

