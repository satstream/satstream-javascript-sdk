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
import StatusResponse from './StatusResponse';

/**
 * The GetStatusResponse model module.
 * @module model/GetStatusResponse
 * @version 1.0.32
 */
export default class GetStatusResponse {
  /**
   * Constructs a new <code>GetStatusResponse</code>.
   * @alias module:model/GetStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStatusResponse} obj Optional instance to populate.
   * @return {module:model/GetStatusResponse} The populated <code>GetStatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetStatusResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = StatusResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetStatusResponse.prototype.code = undefined;

/**
 * @member {module:model/StatusResponse} data
 */
GetStatusResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetStatusResponse.prototype.msg = undefined;

