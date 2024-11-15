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
 * The ResponsesGetBlockByHash model module.
 * @module model/ResponsesGetBlockByHash
 * @version 1.0.13
 */
export default class ResponsesGetBlockByHash {
  /**
   * Constructs a new <code>ResponsesGetBlockByHash</code>.
   * @alias module:model/ResponsesGetBlockByHash
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetBlockByHash</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetBlockByHash} obj Optional instance to populate.
   * @return {module:model/ResponsesGetBlockByHash} The populated <code>ResponsesGetBlockByHash</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetBlockByHash();
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
ResponsesGetBlockByHash.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsRpcBlock} data
 */
ResponsesGetBlockByHash.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetBlockByHash.prototype.msg = undefined;

