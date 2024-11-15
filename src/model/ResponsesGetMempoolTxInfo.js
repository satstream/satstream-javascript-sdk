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
 * The ResponsesGetMempoolTxInfo model module.
 * @module model/ResponsesGetMempoolTxInfo
 * @version 1.0.14
 */
export default class ResponsesGetMempoolTxInfo {
  /**
   * Constructs a new <code>ResponsesGetMempoolTxInfo</code>.
   * @alias module:model/ResponsesGetMempoolTxInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetMempoolTxInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetMempoolTxInfo} obj Optional instance to populate.
   * @return {module:model/ResponsesGetMempoolTxInfo} The populated <code>ResponsesGetMempoolTxInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetMempoolTxInfo();
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
ResponsesGetMempoolTxInfo.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsRpcBtcTx} data
 */
ResponsesGetMempoolTxInfo.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetMempoolTxInfo.prototype.msg = undefined;

