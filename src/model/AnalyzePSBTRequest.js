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

/**
 * The AnalyzePSBTRequest model module.
 * @module model/AnalyzePSBTRequest
 * @version 1.0.26
 */
export default class AnalyzePSBTRequest {
  /**
   * Constructs a new <code>AnalyzePSBTRequest</code>.
   * @alias module:model/AnalyzePSBTRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnalyzePSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyzePSBTRequest} obj Optional instance to populate.
   * @return {module:model/AnalyzePSBTRequest} The populated <code>AnalyzePSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnalyzePSBTRequest();
      if (data.hasOwnProperty('psbt'))
        obj.psbt = ApiClient.convertToType(data['psbt'], 'String');
    }
    return obj;
  }
}

/**
 * The base64-encoded PSBT to analyze
 * @member {String} psbt
 */
AnalyzePSBTRequest.prototype.psbt = undefined;

