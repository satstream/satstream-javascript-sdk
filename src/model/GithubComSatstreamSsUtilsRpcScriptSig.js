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
 * The GithubComSatstreamSsUtilsRpcScriptSig model module.
 * @module model/GithubComSatstreamSsUtilsRpcScriptSig
 * @version 1.0
 */
export default class GithubComSatstreamSsUtilsRpcScriptSig {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsRpcScriptSig</code>.
   * @alias module:model/GithubComSatstreamSsUtilsRpcScriptSig
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsRpcScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsRpcScriptSig} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsRpcScriptSig} The populated <code>GithubComSatstreamSsUtilsRpcScriptSig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsRpcScriptSig();
      if (data.hasOwnProperty('asm'))
        obj.asm = ApiClient.convertToType(data['asm'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} asm
 */
GithubComSatstreamSsUtilsRpcScriptSig.prototype.asm = undefined;

/**
 * @member {String} hex
 */
GithubComSatstreamSsUtilsRpcScriptSig.prototype.hex = undefined;

