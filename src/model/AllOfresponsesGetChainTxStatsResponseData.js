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
import GithubComSatstreamSsUtilsBitcoinCliChainTxStats from './GithubComSatstreamSsUtilsBitcoinCliChainTxStats';

/**
 * The AllOfresponsesGetChainTxStatsResponseData model module.
 * @module model/AllOfresponsesGetChainTxStatsResponseData
 * @version 1.0.19
 */
export default class AllOfresponsesGetChainTxStatsResponseData extends GithubComSatstreamSsUtilsBitcoinCliChainTxStats {
  /**
   * Constructs a new <code>AllOfresponsesGetChainTxStatsResponseData</code>.
   * Chain transaction statistics
   * @alias module:model/AllOfresponsesGetChainTxStatsResponseData
   * @class
   * @extends module:model/GithubComSatstreamSsUtilsBitcoinCliChainTxStats
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfresponsesGetChainTxStatsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfresponsesGetChainTxStatsResponseData} obj Optional instance to populate.
   * @return {module:model/AllOfresponsesGetChainTxStatsResponseData} The populated <code>AllOfresponsesGetChainTxStatsResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfresponsesGetChainTxStatsResponseData();
      GithubComSatstreamSsUtilsBitcoinCliChainTxStats.constructFromObject(data, obj);
    }
    return obj;
  }
}
