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
 * The GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput();
      if (data.hasOwnProperty('previous_output'))
        obj.previousOutput = ApiClient.convertToType(data['previous_output'], 'String');
      if (data.hasOwnProperty('script_sig'))
        obj.scriptSig = ApiClient.convertToType(data['script_sig'], 'String');
      if (data.hasOwnProperty('sequence'))
        obj.sequence = ApiClient.convertToType(data['sequence'], 'Number');
      if (data.hasOwnProperty('witness'))
        obj.witness = ApiClient.convertToType(data['witness'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} previousOutput
 */
GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput.prototype.previousOutput = undefined;

/**
 * @member {String} scriptSig
 */
GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput.prototype.scriptSig = undefined;

/**
 * @member {Number} sequence
 */
GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput.prototype.sequence = undefined;

/**
 * @member {Array.<String>} witness
 */
GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput.prototype.witness = undefined;
