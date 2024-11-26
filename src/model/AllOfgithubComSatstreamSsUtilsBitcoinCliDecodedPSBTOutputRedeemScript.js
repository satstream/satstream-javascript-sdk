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
import GithubComSatstreamSsUtilsBitcoinCliScript from './GithubComSatstreamSsUtilsBitcoinCliScript';

/**
 * The AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript model module.
 * @module model/AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript
 * @version 1.0.19
 */
export default class AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript extends GithubComSatstreamSsUtilsBitcoinCliScript {
  /**
   * Constructs a new <code>AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript</code>.
   * The redeem script
   * @alias module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript
   * @class
   * @extends module:model/GithubComSatstreamSsUtilsBitcoinCliScript
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript} obj Optional instance to populate.
   * @return {module:model/AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript} The populated <code>AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfgithubComSatstreamSsUtilsBitcoinCliDecodedPSBTOutputRedeemScript();
      GithubComSatstreamSsUtilsBitcoinCliScript.constructFromObject(data, obj);
    }
    return obj;
  }
}