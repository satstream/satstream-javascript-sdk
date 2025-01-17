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
 * The ConvertToPSBTResponse model module.
 * @module model/ConvertToPSBTResponse
 * @version 1.0.45
 */
export default class ConvertToPSBTResponse {
  /**
   * Constructs a new <code>ConvertToPSBTResponse</code>.
   * @alias module:model/ConvertToPSBTResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ConvertToPSBTResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConvertToPSBTResponse} obj Optional instance to populate.
   * @return {module:model/ConvertToPSBTResponse} The populated <code>ConvertToPSBTResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConvertToPSBTResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ConvertToPSBTResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
ConvertToPSBTResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
ConvertToPSBTResponse.prototype.msg = undefined;

