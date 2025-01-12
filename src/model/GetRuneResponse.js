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
import RuneResponse from './RuneResponse';

/**
 * The GetRuneResponse model module.
 * @module model/GetRuneResponse
 * @version 1.0.32
 */
export default class GetRuneResponse {
  /**
   * Constructs a new <code>GetRuneResponse</code>.
   * @alias module:model/GetRuneResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRuneResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRuneResponse} obj Optional instance to populate.
   * @return {module:model/GetRuneResponse} The populated <code>GetRuneResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRuneResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = RuneResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetRuneResponse.prototype.code = undefined;

/**
 * @member {module:model/RuneResponse} data
 */
GetRuneResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetRuneResponse.prototype.msg = undefined;

