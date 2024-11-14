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
 * The BigInt model module.
 * @module models/BigInt
 * @version 1.0
 */
export default class BigInt {
  /**
   * Constructs a new <code>BigInt</code>.
   * @alias module:models/BigInt
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BigInt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/BigInt} obj Optional instance to populate.
   * @return {module:models/BigInt} The populated <code>BigInt</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BigInt();
    }
    return obj;
  }
}
