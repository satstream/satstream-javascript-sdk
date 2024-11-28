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
 * The GetDifficultyResponse model module.
 * @module model/GetDifficultyResponse
 * @version 1.0.32
 */
export default class GetDifficultyResponse {
  /**
   * Constructs a new <code>GetDifficultyResponse</code>.
   * @alias module:model/GetDifficultyResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetDifficultyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDifficultyResponse} obj Optional instance to populate.
   * @return {module:model/GetDifficultyResponse} The populated <code>GetDifficultyResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDifficultyResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'Number');
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetDifficultyResponse.prototype.code = undefined;

/**
 * @member {Number} data
 */
GetDifficultyResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetDifficultyResponse.prototype.msg = undefined;
