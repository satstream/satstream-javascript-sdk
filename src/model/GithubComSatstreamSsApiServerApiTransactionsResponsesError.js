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

/**
 * The GithubComSatstreamSsApiServerApiTransactionsResponsesError model module.
 * @module model/GithubComSatstreamSsApiServerApiTransactionsResponsesError
 * @version 1.0.14
 */
export default class GithubComSatstreamSsApiServerApiTransactionsResponsesError {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiTransactionsResponsesError</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiTransactionsResponsesError
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiTransactionsResponsesError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiTransactionsResponsesError} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiTransactionsResponsesError} The populated <code>GithubComSatstreamSsApiServerApiTransactionsResponsesError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiTransactionsResponsesError();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GithubComSatstreamSsApiServerApiTransactionsResponsesError.prototype.code = undefined;

/**
 * @member {Object} data
 */
GithubComSatstreamSsApiServerApiTransactionsResponsesError.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiTransactionsResponsesError.prototype.msg = undefined;

