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
 * The GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails
 * @version 1.0.32
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('divisibility'))
        obj.divisibility = ApiClient.convertToType(data['divisibility'], 'Number');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} amount
 */
GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails.prototype.amount = undefined;

/**
 * @member {Number} divisibility
 */
GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails.prototype.divisibility = undefined;

/**
 * @member {String} symbol
 */
GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails.prototype.symbol = undefined;
