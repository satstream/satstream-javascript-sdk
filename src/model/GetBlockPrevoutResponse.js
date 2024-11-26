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
import Block3 from './Block3';

/**
 * The GetBlockPrevoutResponse model module.
 * @module model/GetBlockPrevoutResponse
 * @version 1.0.25
 */
export default class GetBlockPrevoutResponse {
  /**
   * Constructs a new <code>GetBlockPrevoutResponse</code>.
   * @alias module:model/GetBlockPrevoutResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockPrevoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockPrevoutResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockPrevoutResponse} The populated <code>GetBlockPrevoutResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockPrevoutResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = Block3.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetBlockPrevoutResponse.prototype.code = undefined;

/**
 * @member {module:model/Block3} data
 */
GetBlockPrevoutResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetBlockPrevoutResponse.prototype.msg = undefined;

