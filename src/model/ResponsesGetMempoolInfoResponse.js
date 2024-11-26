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
 * The ResponsesGetMempoolInfoResponse model module.
 * @module model/ResponsesGetMempoolInfoResponse
 * @version 1.0.19
 */
export default class ResponsesGetMempoolInfoResponse {
  /**
   * Constructs a new <code>ResponsesGetMempoolInfoResponse</code>.
   * @alias module:model/ResponsesGetMempoolInfoResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetMempoolInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetMempoolInfoResponse} obj Optional instance to populate.
   * @return {module:model/ResponsesGetMempoolInfoResponse} The populated <code>ResponsesGetMempoolInfoResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetMempoolInfoResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetMempoolInfoResponse.prototype.code = undefined;

/**
 * Mempool information
 * @member {Object} data
 */
ResponsesGetMempoolInfoResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetMempoolInfoResponse.prototype.msg = undefined;
