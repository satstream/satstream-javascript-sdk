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
import GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate from './GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate';

/**
 * The AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium model module.
 * @module model/AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium
 * @version 1.0.19
 */
export default class AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium extends GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate {
  /**
   * Constructs a new <code>AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium</code>.
   * Estimate for medium time horizon
   * @alias module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium
   * @class
   * @extends module:model/GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium} obj Optional instance to populate.
   * @return {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium} The populated <code>AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfgithubComSatstreamSsUtilsBitcoinCliEstimateRawFeeMedium();
      GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate.constructFromObject(data, obj);
    }
    return obj;
  }
}
