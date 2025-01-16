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
 * The AllOfDecodedPSBTInputWitnessScript model module.
 * @module model/AllOfDecodedPSBTInputWitnessScript
 * @version 1.0.38
 */
export default class AllOfDecodedPSBTInputWitnessScript extends Script {
  /**
   * Constructs a new <code>AllOfDecodedPSBTInputWitnessScript</code>.
   * The witness script
   * @alias module:model/AllOfDecodedPSBTInputWitnessScript
   * @class
   * @extends module:model/Script
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTInputWitnessScript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTInputWitnessScript} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTInputWitnessScript} The populated <code>AllOfDecodedPSBTInputWitnessScript</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTInputWitnessScript();
      Script.constructFromObject(data, obj);
    }
    return obj;
  }
}
