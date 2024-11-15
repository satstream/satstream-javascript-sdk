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
 * The GithubComSatstreamSsApiServerApiRunesResponsesError model module.
 * @module model/GithubComSatstreamSsApiServerApiRunesResponsesError
 * @version 1.0.10
 */
export default class GithubComSatstreamSsApiServerApiRunesResponsesError {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiRunesResponsesError</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiRunesResponsesError
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiRunesResponsesError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiRunesResponsesError} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiRunesResponsesError} The populated <code>GithubComSatstreamSsApiServerApiRunesResponsesError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiRunesResponsesError();
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
GithubComSatstreamSsApiServerApiRunesResponsesError.prototype.code = undefined;

/**
 * @member {Object} data
 */
GithubComSatstreamSsApiServerApiRunesResponsesError.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiRunesResponsesError.prototype.msg = undefined;

