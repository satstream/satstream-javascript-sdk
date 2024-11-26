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
import GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo from './GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo';

/**
 * The AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo model module.
 * @module model/AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo
 * @version 1.0.19
 */
export default class AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo extends GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo {
  /**
   * Constructs a new <code>AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo</code>.
   * Info on amounts in the block at this height
   * @alias module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo
   * @class
   * @extends module:model/GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo} obj Optional instance to populate.
   * @return {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo} The populated <code>AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfgithubComSatstreamSsUtilsBitcoinCliUTXOSetInfoBlockInfo();
      GithubComSatstreamSsUtilsBitcoinCliUTXOBlockInfo.constructFromObject(data, obj);
    }
    return obj;
  }
}