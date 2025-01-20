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
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import Script from './Script';

/**
 * The AllOfDecodedPSBTOutputRedeemScript model module.
 * @module model/AllOfDecodedPSBTOutputRedeemScript
 * @version 1.0.44
 */
export default class AllOfDecodedPSBTOutputRedeemScript extends Script {
  /**
   * Constructs a new <code>AllOfDecodedPSBTOutputRedeemScript</code>.
   * The redeem script
   * @alias module:model/AllOfDecodedPSBTOutputRedeemScript
   * @class
   * @extends module:model/Script
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTOutputRedeemScript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTOutputRedeemScript} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTOutputRedeemScript} The populated <code>AllOfDecodedPSBTOutputRedeemScript</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTOutputRedeemScript();
      Script.constructFromObject(data, obj);
    }
    return obj;
  }
}
