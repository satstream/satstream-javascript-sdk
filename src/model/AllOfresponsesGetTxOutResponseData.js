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
import GithubComSatstreamSsUtilsBitcoinCliTxOut from './GithubComSatstreamSsUtilsBitcoinCliTxOut';

/**
 * The AllOfresponsesGetTxOutResponseData model module.
 * @module model/AllOfresponsesGetTxOutResponseData
 * @version 1.0.19
 */
export default class AllOfresponsesGetTxOutResponseData extends GithubComSatstreamSsUtilsBitcoinCliTxOut {
  /**
   * Constructs a new <code>AllOfresponsesGetTxOutResponseData</code>.
   * Transaction output details (null if not found)
   * @alias module:model/AllOfresponsesGetTxOutResponseData
   * @class
   * @extends module:model/GithubComSatstreamSsUtilsBitcoinCliTxOut
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfresponsesGetTxOutResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfresponsesGetTxOutResponseData} obj Optional instance to populate.
   * @return {module:model/AllOfresponsesGetTxOutResponseData} The populated <code>AllOfresponsesGetTxOutResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfresponsesGetTxOutResponseData();
      GithubComSatstreamSsUtilsBitcoinCliTxOut.constructFromObject(data, obj);
    }
    return obj;
  }
}