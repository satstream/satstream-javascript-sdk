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
 * The DecodeScriptRequest model module.
 * @module model/DecodeScriptRequest
 * @version 1.0.45
 */
export default class DecodeScriptRequest {
  /**
   * Constructs a new <code>DecodeScriptRequest</code>.
   * @alias module:model/DecodeScriptRequest
   * @class
   * @param hexstring {String} The hex-encoded script to decode
   */
  constructor(hexstring) {
    this.hexstring = hexstring;
  }

  /**
   * Constructs a <code>DecodeScriptRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodeScriptRequest} obj Optional instance to populate.
   * @return {module:model/DecodeScriptRequest} The populated <code>DecodeScriptRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodeScriptRequest();
      if (data.hasOwnProperty('hexstring'))
        obj.hexstring = ApiClient.convertToType(data['hexstring'], 'String');
    }
    return obj;
  }
}

/**
 * The hex-encoded script to decode
 * @member {String} hexstring
 */
DecodeScriptRequest.prototype.hexstring = undefined;

