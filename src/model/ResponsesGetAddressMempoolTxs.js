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
 * The ResponsesGetAddressMempoolTxs model module.
 * @module model/ResponsesGetAddressMempoolTxs
 * @version 1.0.8
 */
export default class ResponsesGetAddressMempoolTxs {
  /**
   * Constructs a new <code>ResponsesGetAddressMempoolTxs</code>.
   * @alias module:model/ResponsesGetAddressMempoolTxs
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressMempoolTxs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressMempoolTxs} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressMempoolTxs} The populated <code>ResponsesGetAddressMempoolTxs</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressMempoolTxs();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [GithubComSatstreamSsUtilsRpcBtcTx]);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetAddressMempoolTxs.prototype.code = undefined;

/**
 * @member {Array.<module:model/GithubComSatstreamSsUtilsRpcBtcTx>} data
 */
ResponsesGetAddressMempoolTxs.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetAddressMempoolTxs.prototype.msg = undefined;

