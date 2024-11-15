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
import GithubComSatstreamSsUtilsRpcBlock from './GithubComSatstreamSsUtilsRpcBlock';

/**
 * The ResponsesGetBlockInfo model module.
 * @module model/ResponsesGetBlockInfo
 * @version 1.0.15
 */
export default class ResponsesGetBlockInfo {
  /**
   * Constructs a new <code>ResponsesGetBlockInfo</code>.
   * @alias module:model/ResponsesGetBlockInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetBlockInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetBlockInfo} obj Optional instance to populate.
   * @return {module:model/ResponsesGetBlockInfo} The populated <code>ResponsesGetBlockInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetBlockInfo();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsRpcBlock.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetBlockInfo.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsRpcBlock} data
 */
ResponsesGetBlockInfo.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetBlockInfo.prototype.msg = undefined;

