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
import GithubComSatstreamSsUtilsOrdServerResponsesInscriptionResponse from './GithubComSatstreamSsUtilsOrdServerResponsesInscriptionResponse';

/**
 * The GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse model module.
 * @module model/GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse
 * @version 1.0.19
 */
export default class GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse} The populated <code>GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsOrdServerResponsesInscriptionResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesInscriptionResponse} data
 */
GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GithubComSatstreamSsApiServerApiInscriptionResponsesInscriptionResponse.prototype.msg = undefined;

