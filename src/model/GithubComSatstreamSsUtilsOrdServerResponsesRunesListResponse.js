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
import GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry from './GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry';

/**
 * The GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse
 * @version 1.0.45
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse();
      if (data.hasOwnProperty('entries'))
        obj.entries = ApiClient.convertToType(data['entries'], [GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry]);
      if (data.hasOwnProperty('more'))
        obj.more = ApiClient.convertToType(data['more'], 'Boolean');
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'Number');
      if (data.hasOwnProperty('prev'))
        obj.prev = ApiClient.convertToType(data['prev'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry>} entries
 */
GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse.prototype.entries = undefined;

/**
 * @member {Boolean} more
 */
GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse.prototype.more = undefined;

/**
 * @member {Number} next
 */
GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse.prototype.next = undefined;

/**
 * @member {Number} prev
 */
GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse.prototype.prev = undefined;

