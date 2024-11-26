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
import GithubComSatstreamSsUtilsOrdServerResponsesBlockResponse from './GithubComSatstreamSsUtilsOrdServerResponsesBlockResponse';

/**
 * The GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse model module.
 * @module model/GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse
 * @version 1.0.19
 */
export default class GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse} The populated <code>GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsOrdServerResponsesBlockResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesBlockResponse} data
 */
GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiBlockResponsesBlockResponse.prototype.msg = undefined;

