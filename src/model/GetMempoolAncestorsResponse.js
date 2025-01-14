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
import MempoolAncestorsData from './MempoolAncestorsData';

/**
 * The GetMempoolAncestorsResponse model module.
 * @module model/GetMempoolAncestorsResponse
 * @version 1.0.37
 */
export default class GetMempoolAncestorsResponse {
  /**
   * Constructs a new <code>GetMempoolAncestorsResponse</code>.
   * @alias module:model/GetMempoolAncestorsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetMempoolAncestorsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMempoolAncestorsResponse} obj Optional instance to populate.
   * @return {module:model/GetMempoolAncestorsResponse} The populated <code>GetMempoolAncestorsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetMempoolAncestorsResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = MempoolAncestorsData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetMempoolAncestorsResponse.prototype.code = undefined;

/**
 * @member {module:model/MempoolAncestorsData} data
 */
GetMempoolAncestorsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetMempoolAncestorsResponse.prototype.msg = undefined;

