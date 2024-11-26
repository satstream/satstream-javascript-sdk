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
 * The GithubComSatstreamSsApiServerApiRuneResponsesError model module.
 * @module model/GithubComSatstreamSsApiServerApiRuneResponsesError
 * @version 1.0.19
 */
export default class GithubComSatstreamSsApiServerApiRuneResponsesError {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiRuneResponsesError</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiRuneResponsesError
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiRuneResponsesError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiRuneResponsesError} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiRuneResponsesError} The populated <code>GithubComSatstreamSsApiServerApiRuneResponsesError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiRuneResponsesError();
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
GithubComSatstreamSsApiServerApiRuneResponsesError.prototype.code = undefined;

/**
 * @member {Object} data
 */
GithubComSatstreamSsApiServerApiRuneResponsesError.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiRuneResponsesError.prototype.msg = undefined;
