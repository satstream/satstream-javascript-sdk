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
 * The BlocksResponse model module.
 * @module model/BlocksResponse
 * @version 1.0.26
 */
export default class BlocksResponse {
  /**
   * Constructs a new <code>BlocksResponse</code>.
   * @alias module:model/BlocksResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BlocksResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlocksResponse} obj Optional instance to populate.
   * @return {module:model/BlocksResponse} The populated <code>BlocksResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BlocksResponse();
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
BlocksResponse.prototype.blocks = undefined;

/**
 * @member {Object.<String, Array.<String>>} featuredBlocks
 */
BlocksResponse.prototype.featuredBlocks = undefined;

/**
 * @member {Number} last
 */
BlocksResponse.prototype.last = undefined;

