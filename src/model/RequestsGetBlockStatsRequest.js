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
 * The RequestsGetBlockStatsRequest model module.
 * @module model/RequestsGetBlockStatsRequest
 * @version 1.0.22
 */
export default class RequestsGetBlockStatsRequest {
  /**
   * Constructs a new <code>RequestsGetBlockStatsRequest</code>.
   * @alias module:model/RequestsGetBlockStatsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsGetBlockStatsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsGetBlockStatsRequest} obj Optional instance to populate.
   * @return {module:model/RequestsGetBlockStatsRequest} The populated <code>RequestsGetBlockStatsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsGetBlockStatsRequest();
      if (data.hasOwnProperty('hash_or_height'))
        obj.hashOrHeight = ApiClient.convertToType(data['hash_or_height'], Object);
      if (data.hasOwnProperty('stats'))
        obj.stats = ApiClient.convertToType(data['stats'], ['String']);
    }
    return obj;
  }
}

/**
 * Required: The block hash (string) or height (numeric)
 * @member {Object} hashOrHeight
 */
RequestsGetBlockStatsRequest.prototype.hashOrHeight = undefined;

/**
 * Optional: Values to plot (if empty, all values will be included)
 * @member {Array.<String>} stats
 */
RequestsGetBlockStatsRequest.prototype.stats = undefined;

