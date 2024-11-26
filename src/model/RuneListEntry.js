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
 * The RuneListEntry model module.
 * @module model/RuneListEntry
 * @version 1.0.22
 */
export default class RuneListEntry {
  /**
   * Constructs a new <code>RuneListEntry</code>.
   * @alias module:model/RuneListEntry
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RuneListEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuneListEntry} obj Optional instance to populate.
   * @return {module:model/RuneListEntry} The populated <code>RuneListEntry</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RuneListEntry();
      if (data.hasOwnProperty('0'))
        obj._0 = ApiClient.convertToType(data['0'], 'String');
      if (data.hasOwnProperty('1'))
        obj._1 = ApiClient.convertToType(data['1'], Object);
    }
    return obj;
  }
}

/**
 * The first element is the ID
 * @member {String} _0
 */
RuneListEntry.prototype._0 = undefined;

/**
 * The second element is the entry data
 * @member {Object} _1
 */
RuneListEntry.prototype._1 = undefined;

