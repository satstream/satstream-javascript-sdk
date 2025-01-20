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
 * The GetBlockHexResponse model module.
 * @module model/GetBlockHexResponse
 * @version 1.0.45
 */
export default class GetBlockHexResponse {
  /**
   * Constructs a new <code>GetBlockHexResponse</code>.
   * @alias module:model/GetBlockHexResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockHexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockHexResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockHexResponse} The populated <code>GetBlockHexResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockHexResponse();
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
GetBlockHexResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
GetBlockHexResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetBlockHexResponse.prototype.msg = undefined;

