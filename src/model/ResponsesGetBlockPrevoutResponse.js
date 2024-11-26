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
import GithubComSatstreamSsUtilsBitcoinCliBlock3 from './GithubComSatstreamSsUtilsBitcoinCliBlock3';

/**
 * The ResponsesGetBlockPrevoutResponse model module.
 * @module model/ResponsesGetBlockPrevoutResponse
 * @version 1.0.19
 */
export default class ResponsesGetBlockPrevoutResponse {
  /**
   * Constructs a new <code>ResponsesGetBlockPrevoutResponse</code>.
   * @alias module:model/ResponsesGetBlockPrevoutResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetBlockPrevoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetBlockPrevoutResponse} obj Optional instance to populate.
   * @return {module:model/ResponsesGetBlockPrevoutResponse} The populated <code>ResponsesGetBlockPrevoutResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetBlockPrevoutResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsBitcoinCliBlock3.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetBlockPrevoutResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsBitcoinCliBlock3} data
 */
ResponsesGetBlockPrevoutResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetBlockPrevoutResponse.prototype.msg = undefined;
