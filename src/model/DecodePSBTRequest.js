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

/**
 * The DecodePSBTRequest model module.
 * @module model/DecodePSBTRequest
 * @version 1.0.34
 */
export default class DecodePSBTRequest {
  /**
   * Constructs a new <code>DecodePSBTRequest</code>.
   * @alias module:model/DecodePSBTRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodePSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodePSBTRequest} obj Optional instance to populate.
   * @return {module:model/DecodePSBTRequest} The populated <code>DecodePSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodePSBTRequest();
      if (data.hasOwnProperty('psbt'))
        obj.psbt = ApiClient.convertToType(data['psbt'], 'String');
    }
    return obj;
  }
}

/**
 * The base64-encoded PSBT to decode
 * @member {String} psbt
 */
DecodePSBTRequest.prototype.psbt = undefined;

