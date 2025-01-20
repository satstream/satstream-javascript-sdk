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
import BlockResponse from './BlockResponse';

/**
 * The GetBlockResponse model module.
 * @module model/GetBlockResponse
 * @version 1.0.45
 */
export default class GetBlockResponse {
  /**
   * Constructs a new <code>GetBlockResponse</code>.
   * @alias module:model/GetBlockResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockResponse} The populated <code>GetBlockResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = BlockResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetBlockResponse.prototype.code = undefined;

/**
 * @member {module:model/BlockResponse} data
 */
GetBlockResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetBlockResponse.prototype.msg = undefined;

