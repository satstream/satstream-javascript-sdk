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

/**
 * The GetBlockStatsRequest model module.
 * @module model/GetBlockStatsRequest
 * @version 1.0.44
 */
export default class GetBlockStatsRequest {
  /**
   * Constructs a new <code>GetBlockStatsRequest</code>.
   * @alias module:model/GetBlockStatsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockStatsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockStatsRequest} obj Optional instance to populate.
   * @return {module:model/GetBlockStatsRequest} The populated <code>GetBlockStatsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockStatsRequest();
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
GetBlockStatsRequest.prototype.hashOrHeight = undefined;

/**
 * Optional: Values to plot (if empty, all values will be included)
 * @member {Array.<String>} stats
 */
GetBlockStatsRequest.prototype.stats = undefined;

