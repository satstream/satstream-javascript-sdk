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
 * The GithubComSatstreamSsApiServerApiBlocksResponsesError model module.
 * @module models/GithubComSatstreamSsApiServerApiBlocksResponsesError
 * @version 1.0
 */
export default class GithubComSatstreamSsApiServerApiBlocksResponsesError {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiBlocksResponsesError</code>.
   * @alias module:models/GithubComSatstreamSsApiServerApiBlocksResponsesError
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiBlocksResponsesError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/GithubComSatstreamSsApiServerApiBlocksResponsesError} obj Optional instance to populate.
   * @return {module:models/GithubComSatstreamSsApiServerApiBlocksResponsesError} The populated <code>GithubComSatstreamSsApiServerApiBlocksResponsesError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiBlocksResponsesError();
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
GithubComSatstreamSsApiServerApiBlocksResponsesError.prototype.code = undefined;

/**
 * @member {Object} data
 */
GithubComSatstreamSsApiServerApiBlocksResponsesError.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiBlocksResponsesError.prototype.msg = undefined;

