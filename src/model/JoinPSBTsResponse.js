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
 * The JoinPSBTsResponse model module.
 * @module model/JoinPSBTsResponse
 * @version 1.0.26
 */
export default class JoinPSBTsResponse {
  /**
   * Constructs a new <code>JoinPSBTsResponse</code>.
   * @alias module:model/JoinPSBTsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>JoinPSBTsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JoinPSBTsResponse} obj Optional instance to populate.
   * @return {module:model/JoinPSBTsResponse} The populated <code>JoinPSBTsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new JoinPSBTsResponse();
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
JoinPSBTsResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
JoinPSBTsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
JoinPSBTsResponse.prototype.msg = undefined;

