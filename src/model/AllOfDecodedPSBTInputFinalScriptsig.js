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
 * The AllOfDecodedPSBTInputFinalScriptsig model module.
 * @module model/AllOfDecodedPSBTInputFinalScriptsig
 * @version 1.0.32
 */
export default class AllOfDecodedPSBTInputFinalScriptsig extends Script {
  /**
   * Constructs a new <code>AllOfDecodedPSBTInputFinalScriptsig</code>.
   * The final script sig
   * @alias module:model/AllOfDecodedPSBTInputFinalScriptsig
   * @class
   * @extends module:model/Script
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTInputFinalScriptsig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTInputFinalScriptsig} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTInputFinalScriptsig} The populated <code>AllOfDecodedPSBTInputFinalScriptsig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTInputFinalScriptsig();
      Script.constructFromObject(data, obj);
    }
    return obj;
  }
}