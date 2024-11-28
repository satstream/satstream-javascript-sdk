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
import SatoshiResponse from './SatoshiResponse';

/**
 * The GetSatoshiResponse model module.
 * @module model/GetSatoshiResponse
 * @version 1.0.32
 */
export default class GetSatoshiResponse {
  /**
   * Constructs a new <code>GetSatoshiResponse</code>.
   * @alias module:model/GetSatoshiResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetSatoshiResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSatoshiResponse} obj Optional instance to populate.
   * @return {module:model/GetSatoshiResponse} The populated <code>GetSatoshiResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSatoshiResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = SatoshiResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetSatoshiResponse.prototype.code = undefined;

/**
 * @member {module:model/SatoshiResponse} data
 */
GetSatoshiResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetSatoshiResponse.prototype.msg = undefined;
