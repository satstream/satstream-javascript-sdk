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
import GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse from './GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse';

/**
 * The GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse model module.
 * @module model/GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse
 * @version 1.0.19
 */
export default class GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse} The populated <code>GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse} data
 */
GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiBlockResponsesBlocksResponse.prototype.msg = undefined;

