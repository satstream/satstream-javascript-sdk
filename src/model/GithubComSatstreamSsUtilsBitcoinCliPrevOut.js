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
import GithubComSatstreamSsUtilsBitcoinCliScriptPubKey from './GithubComSatstreamSsUtilsBitcoinCliScriptPubKey';

/**
 * The GithubComSatstreamSsUtilsBitcoinCliPrevOut model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliPrevOut
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliPrevOut {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliPrevOut</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliPrevOut
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliPrevOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliPrevOut} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliPrevOut} The populated <code>GithubComSatstreamSsUtilsBitcoinCliPrevOut</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliPrevOut();
      if (data.hasOwnProperty('generated'))
        obj.generated = ApiClient.convertToType(data['generated'], 'Boolean');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = GithubComSatstreamSsUtilsBitcoinCliScriptPubKey.constructFromObject(data['scriptPubKey']);
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Boolean} generated
 */
GithubComSatstreamSsUtilsBitcoinCliPrevOut.prototype.generated = undefined;

/**
 * @member {Number} height
 */
GithubComSatstreamSsUtilsBitcoinCliPrevOut.prototype.height = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsBitcoinCliScriptPubKey} scriptPubKey
 */
GithubComSatstreamSsUtilsBitcoinCliPrevOut.prototype.scriptPubKey = undefined;

/**
 * @member {Number} value
 */
GithubComSatstreamSsUtilsBitcoinCliPrevOut.prototype.value = undefined;

