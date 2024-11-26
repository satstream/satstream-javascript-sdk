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
 * The GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput();
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
GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput.prototype.scriptPubkey = undefined;

/**
 * @member {Number} value
 */
GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput.prototype.value = undefined;

