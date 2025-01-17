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
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse from './GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse';

/**
 * The GetLatestRunesResponse model module.
 * @module model/GetLatestRunesResponse
 * @version 1.0.45
 */
export default class GetLatestRunesResponse {
  /**
   * Constructs a new <code>GetLatestRunesResponse</code>.
   * @alias module:model/GetLatestRunesResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLatestRunesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLatestRunesResponse} obj Optional instance to populate.
   * @return {module:model/GetLatestRunesResponse} The populated <code>GetLatestRunesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLatestRunesResponse();
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
GetLatestRunesResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse} data
 */
GetLatestRunesResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetLatestRunesResponse.prototype.msg = undefined;

