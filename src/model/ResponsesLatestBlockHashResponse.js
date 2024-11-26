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
 * The ResponsesLatestBlockHashResponse model module.
 * @module model/ResponsesLatestBlockHashResponse
 * @version 1.0.19
 */
export default class ResponsesLatestBlockHashResponse {
  /**
   * Constructs a new <code>ResponsesLatestBlockHashResponse</code>.
   * @alias module:model/ResponsesLatestBlockHashResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesLatestBlockHashResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesLatestBlockHashResponse} obj Optional instance to populate.
   * @return {module:model/ResponsesLatestBlockHashResponse} The populated <code>ResponsesLatestBlockHashResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesLatestBlockHashResponse();
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
ResponsesLatestBlockHashResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
ResponsesLatestBlockHashResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesLatestBlockHashResponse.prototype.msg = undefined;
