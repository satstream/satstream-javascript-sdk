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
import GithubComSatstreamSsUtilsRpcBtcTx from './GithubComSatstreamSsUtilsRpcBtcTx';

/**
 * The ResponsesGetTransaction model module.
 * @module model/ResponsesGetTransaction
 * @version 1.0.0
 */
export default class ResponsesGetTransaction {
  /**
   * Constructs a new <code>ResponsesGetTransaction</code>.
   * @alias module:model/ResponsesGetTransaction
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetTransaction} obj Optional instance to populate.
   * @return {module:model/ResponsesGetTransaction} The populated <code>ResponsesGetTransaction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetTransaction();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsRpcBtcTx.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetTransaction.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsRpcBtcTx} data
 */
ResponsesGetTransaction.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetTransaction.prototype.msg = undefined;

