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
 * The MempoolFees model module.
 * @module model/MempoolFees
 * @version 1.0.37
 */
export default class MempoolFees {
  /**
   * Constructs a new <code>MempoolFees</code>.
   * @alias module:model/MempoolFees
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MempoolFees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MempoolFees} obj Optional instance to populate.
   * @return {module:model/MempoolFees} The populated <code>MempoolFees</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MempoolFees();
      if (data.hasOwnProperty('ancestor'))
        obj.ancestor = ApiClient.convertToType(data['ancestor'], 'Number');
      if (data.hasOwnProperty('base'))
        obj.base = ApiClient.convertToType(data['base'], 'Number');
      if (data.hasOwnProperty('descendant'))
        obj.descendant = ApiClient.convertToType(data['descendant'], 'Number');
      if (data.hasOwnProperty('modified'))
        obj.modified = ApiClient.convertToType(data['modified'], 'Number');
    }
    return obj;
  }
}

/**
 * Ancestor transaction fees in BTC
 * @member {Number} ancestor
 */
MempoolFees.prototype.ancestor = undefined;

/**
 * Base transaction fee in BTC
 * @member {Number} base
 */
MempoolFees.prototype.base = undefined;

/**
 * Descendant transaction fees in BTC
 * @member {Number} descendant
 */
MempoolFees.prototype.descendant = undefined;

/**
 * Modified transaction fee in BTC
 * @member {Number} modified
 */
MempoolFees.prototype.modified = undefined;

