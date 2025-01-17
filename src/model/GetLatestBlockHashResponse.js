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
 * The GetLatestBlockHashResponse model module.
 * @module model/GetLatestBlockHashResponse
 * @version 1.0.45
 */
export default class GetLatestBlockHashResponse {
  /**
   * Constructs a new <code>GetLatestBlockHashResponse</code>.
   * @alias module:model/GetLatestBlockHashResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLatestBlockHashResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLatestBlockHashResponse} obj Optional instance to populate.
   * @return {module:model/GetLatestBlockHashResponse} The populated <code>GetLatestBlockHashResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLatestBlockHashResponse();
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
GetLatestBlockHashResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
GetLatestBlockHashResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetLatestBlockHashResponse.prototype.msg = undefined;

