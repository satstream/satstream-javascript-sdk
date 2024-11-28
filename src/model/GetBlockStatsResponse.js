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
import BlockStats from './BlockStats';

/**
 * The GetBlockStatsResponse model module.
 * @module model/GetBlockStatsResponse
 * @version 1.0.32
 */
export default class GetBlockStatsResponse {
  /**
   * Constructs a new <code>GetBlockStatsResponse</code>.
   * @alias module:model/GetBlockStatsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockStatsResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockStatsResponse} The populated <code>GetBlockStatsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockStatsResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = BlockStats.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetBlockStatsResponse.prototype.code = undefined;

/**
 * @member {module:model/BlockStats} data
 */
GetBlockStatsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetBlockStatsResponse.prototype.msg = undefined;
