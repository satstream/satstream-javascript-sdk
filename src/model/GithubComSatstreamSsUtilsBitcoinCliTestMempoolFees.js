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
 * The GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees} The populated <code>GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees();
      if (data.hasOwnProperty('base'))
        obj.base = ApiClient.convertToType(data['base'], 'Number');
    }
    return obj;
  }
}

/**
 * Transaction fee in BTC
 * @member {Number} base
 */
GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees.prototype.base = undefined;

