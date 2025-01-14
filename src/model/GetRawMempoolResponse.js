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
import RawMempoolData from './RawMempoolData';

/**
 * The GetRawMempoolResponse model module.
 * @module model/GetRawMempoolResponse
 * @version 1.0.37
 */
export default class GetRawMempoolResponse {
  /**
   * Constructs a new <code>GetRawMempoolResponse</code>.
   * @alias module:model/GetRawMempoolResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRawMempoolResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRawMempoolResponse} obj Optional instance to populate.
   * @return {module:model/GetRawMempoolResponse} The populated <code>GetRawMempoolResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRawMempoolResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = RawMempoolData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetRawMempoolResponse.prototype.code = undefined;

/**
 * @member {module:model/RawMempoolData} data
 */
GetRawMempoolResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetRawMempoolResponse.prototype.msg = undefined;

