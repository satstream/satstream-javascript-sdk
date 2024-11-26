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
import GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse from './GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse';

/**
 * The GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse model module.
 * @module model/GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse
 * @version 1.0.19
 */
export default class GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse} The populated <code>GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse} data
 */
GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiStatusResponsesStatusResponse.prototype.msg = undefined;
