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
import GithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResult from './GithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResult';

/**
 * The ResponsesTestMempoolAcceptResponse model module.
 * @module model/ResponsesTestMempoolAcceptResponse
 * @version 1.0.19
 */
export default class ResponsesTestMempoolAcceptResponse {
  /**
   * Constructs a new <code>ResponsesTestMempoolAcceptResponse</code>.
   * @alias module:model/ResponsesTestMempoolAcceptResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesTestMempoolAcceptResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesTestMempoolAcceptResponse} obj Optional instance to populate.
   * @return {module:model/ResponsesTestMempoolAcceptResponse} The populated <code>ResponsesTestMempoolAcceptResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesTestMempoolAcceptResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [GithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResult]);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesTestMempoolAcceptResponse.prototype.code = undefined;

/**
 * Results of mempool acceptance tests
 * @member {Array.<module:model/GithubComSatstreamSsUtilsBitcoinCliTestMempoolAcceptResult>} data
 */
ResponsesTestMempoolAcceptResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesTestMempoolAcceptResponse.prototype.msg = undefined;

