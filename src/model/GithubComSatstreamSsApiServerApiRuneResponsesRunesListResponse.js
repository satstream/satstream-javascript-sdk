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
import GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse from './GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse';

/**
 * The GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse model module.
 * @module model/GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse
 * @version 1.0.19
 */
export default class GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse} The populated <code>GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse} data
 */
GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiRuneResponsesRunesListResponse.prototype.msg = undefined;
