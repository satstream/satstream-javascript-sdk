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
import Block2 from './Block2';

/**
 * The GetBlockDecodedResponse model module.
 * @module model/GetBlockDecodedResponse
 * @version 1.0.32
 */
export default class GetBlockDecodedResponse {
  /**
   * Constructs a new <code>GetBlockDecodedResponse</code>.
   * @alias module:model/GetBlockDecodedResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockDecodedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockDecodedResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockDecodedResponse} The populated <code>GetBlockDecodedResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockDecodedResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = Block2.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetBlockDecodedResponse.prototype.code = undefined;

/**
 * @member {module:model/Block2} data
 */
GetBlockDecodedResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetBlockDecodedResponse.prototype.msg = undefined;
