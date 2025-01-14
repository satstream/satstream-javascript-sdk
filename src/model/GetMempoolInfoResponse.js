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
import MempoolInfo from './MempoolInfo';

/**
 * The GetMempoolInfoResponse model module.
 * @module model/GetMempoolInfoResponse
 * @version 1.0.37
 */
export default class GetMempoolInfoResponse {
  /**
   * Constructs a new <code>GetMempoolInfoResponse</code>.
   * @alias module:model/GetMempoolInfoResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetMempoolInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMempoolInfoResponse} obj Optional instance to populate.
   * @return {module:model/GetMempoolInfoResponse} The populated <code>GetMempoolInfoResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetMempoolInfoResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = MempoolInfo.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetMempoolInfoResponse.prototype.code = undefined;

/**
 * @member {module:model/MempoolInfo} data
 */
GetMempoolInfoResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetMempoolInfoResponse.prototype.msg = undefined;

