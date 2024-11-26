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
 * The GithubComSatstreamSsUtilsOrdServerResponsesOutput model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesOutput
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesOutput {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesOutput</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesOutput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesOutput} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesOutput} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesOutput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesOutput();
      if (data.hasOwnProperty('script_pubkey'))
        obj.scriptPubkey = ApiClient.convertToType(data['script_pubkey'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} scriptPubkey
 */
GithubComSatstreamSsUtilsOrdServerResponsesOutput.prototype.scriptPubkey = undefined;

/**
 * @member {Number} value
 */
GithubComSatstreamSsUtilsOrdServerResponsesOutput.prototype.value = undefined;
