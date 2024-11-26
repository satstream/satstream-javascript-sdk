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
import GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees from './GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees';

/**
 * The AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees model module.
 * @module model/AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees
 * @version 1.0.19
 */
export default class AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees extends GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees {
  /**
   * Constructs a new <code>AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees</code>.
   * Transaction fees
   * @alias module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees
   * @class
   * @extends module:model/GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees} obj Optional instance to populate.
   * @return {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees} The populated <code>AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfgithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResultFees();
      GithubComSatstreamSsUtilsBitcoinCliTestMempoolFees.constructFromObject(data, obj);
    }
    return obj;
  }
}
