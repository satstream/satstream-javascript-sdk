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
 * The CombinePSBTResponse model module.
 * @module model/CombinePSBTResponse
 * @version 1.0.32
 */
export default class CombinePSBTResponse {
  /**
   * Constructs a new <code>CombinePSBTResponse</code>.
   * @alias module:model/CombinePSBTResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CombinePSBTResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinePSBTResponse} obj Optional instance to populate.
   * @return {module:model/CombinePSBTResponse} The populated <code>CombinePSBTResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CombinePSBTResponse();
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
CombinePSBTResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
CombinePSBTResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
CombinePSBTResponse.prototype.msg = undefined;

