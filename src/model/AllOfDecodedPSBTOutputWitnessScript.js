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
import Script from './Script';

/**
 * The AllOfDecodedPSBTOutputWitnessScript model module.
 * @module model/AllOfDecodedPSBTOutputWitnessScript
 * @version 1.0.21
 */
export default class AllOfDecodedPSBTOutputWitnessScript extends Script {
  /**
   * Constructs a new <code>AllOfDecodedPSBTOutputWitnessScript</code>.
   * The witness script
   * @alias module:model/AllOfDecodedPSBTOutputWitnessScript
   * @class
   * @extends module:model/Script
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTOutputWitnessScript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTOutputWitnessScript} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTOutputWitnessScript} The populated <code>AllOfDecodedPSBTOutputWitnessScript</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTOutputWitnessScript();
      Script.constructFromObject(data, obj);
    }
    return obj;
  }
}
