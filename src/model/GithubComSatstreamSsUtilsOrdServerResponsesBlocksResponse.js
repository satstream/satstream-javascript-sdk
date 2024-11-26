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
 * The GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse();
      if (data.hasOwnProperty('blocks'))
        obj.blocks = ApiClient.convertToType(data['blocks'], ['String']);
      if (data.hasOwnProperty('featured_blocks'))
        obj.featuredBlocks = ApiClient.convertToType(data['featured_blocks'], {'String': ['String']});
      if (data.hasOwnProperty('last'))
        obj.last = ApiClient.convertToType(data['last'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} blocks
 */
GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse.prototype.blocks = undefined;

/**
 * @member {Object.<String, Array.<String>>} featuredBlocks
 */
GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse.prototype.featuredBlocks = undefined;

/**
 * @member {Number} last
 */
GithubComSatstreamSsUtilsOrdServerResponsesBlocksResponse.prototype.last = undefined;
