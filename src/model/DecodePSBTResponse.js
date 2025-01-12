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
import DecodedPSBT from './DecodedPSBT';

/**
 * The DecodePSBTResponse model module.
 * @module model/DecodePSBTResponse
 * @version 1.0.34
 */
export default class DecodePSBTResponse {
  /**
   * Constructs a new <code>DecodePSBTResponse</code>.
   * @alias module:model/DecodePSBTResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodePSBTResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodePSBTResponse} obj Optional instance to populate.
   * @return {module:model/DecodePSBTResponse} The populated <code>DecodePSBTResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodePSBTResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = DecodedPSBT.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
DecodePSBTResponse.prototype.code = undefined;

/**
 * @member {module:model/DecodedPSBT} data
 */
DecodePSBTResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
DecodePSBTResponse.prototype.msg = undefined;

