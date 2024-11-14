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
 * The ResponsesBlockRange model module.
 * @module models/ResponsesBlockRange
 * @version 1.0
 */
export default class ResponsesBlockRange {
  /**
   * Constructs a new <code>ResponsesBlockRange</code>.
   * @alias module:models/ResponsesBlockRange
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesBlockRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ResponsesBlockRange} obj Optional instance to populate.
   * @return {module:models/ResponsesBlockRange} The populated <code>ResponsesBlockRange</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesBlockRange();
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'Number');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} end
 */
ResponsesBlockRange.prototype.end = undefined;

/**
 * @member {Number} start
 */
ResponsesBlockRange.prototype.start = undefined;

