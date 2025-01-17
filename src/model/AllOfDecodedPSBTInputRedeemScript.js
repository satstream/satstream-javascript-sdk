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
 * The AllOfDecodedPSBTInputRedeemScript model module.
 * @module model/AllOfDecodedPSBTInputRedeemScript
 * @version 1.0.45
 */
export default class AllOfDecodedPSBTInputRedeemScript extends Script {
  /**
   * Constructs a new <code>AllOfDecodedPSBTInputRedeemScript</code>.
   * The redeem script
   * @alias module:model/AllOfDecodedPSBTInputRedeemScript
   * @class
   * @extends module:model/Script
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTInputRedeemScript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTInputRedeemScript} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTInputRedeemScript} The populated <code>AllOfDecodedPSBTInputRedeemScript</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTInputRedeemScript();
      Script.constructFromObject(data, obj);
    }
    return obj;
  }
}
