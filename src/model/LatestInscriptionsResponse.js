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
 * The LatestInscriptionsResponse model module.
 * @module model/LatestInscriptionsResponse
 * @version 1.0.25
 */
export default class LatestInscriptionsResponse {
  /**
   * Constructs a new <code>LatestInscriptionsResponse</code>.
   * @alias module:model/LatestInscriptionsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LatestInscriptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LatestInscriptionsResponse} obj Optional instance to populate.
   * @return {module:model/LatestInscriptionsResponse} The populated <code>LatestInscriptionsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LatestInscriptionsResponse();
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['String']);
      if (data.hasOwnProperty('more'))
        obj.more = ApiClient.convertToType(data['more'], 'Boolean');
      if (data.hasOwnProperty('page_index'))
        obj.pageIndex = ApiClient.convertToType(data['page_index'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} ids
 */
LatestInscriptionsResponse.prototype.ids = undefined;

/**
 * @member {Boolean} more
 */
LatestInscriptionsResponse.prototype.more = undefined;

/**
 * @member {Number} pageIndex
 */
LatestInscriptionsResponse.prototype.pageIndex = undefined;

