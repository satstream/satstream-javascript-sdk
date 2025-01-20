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
import BigInt from './BigInt';

/**
 * The RuneTerms model module.
 * @module model/RuneTerms
 * @version 1.0.44
 */
export default class RuneTerms {
  /**
   * Constructs a new <code>RuneTerms</code>.
   * @alias module:model/RuneTerms
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RuneTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuneTerms} obj Optional instance to populate.
   * @return {module:model/RuneTerms} The populated <code>RuneTerms</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RuneTerms();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('cap'))
        obj.cap = BigInt.constructFromObject(data['cap']);
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], ['Number']);
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], ['Number']);
    }
    return obj;
  }
}

/**
 * @member {Number} amount
 */
RuneTerms.prototype.amount = undefined;

/**
 * @member {module:model/BigInt} cap
 */
RuneTerms.prototype.cap = undefined;

/**
 * @member {Array.<Number>} height
 */
RuneTerms.prototype.height = undefined;

/**
 * @member {Array.<Number>} offset
 */
RuneTerms.prototype.offset = undefined;

