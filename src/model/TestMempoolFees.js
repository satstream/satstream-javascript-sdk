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
 * The TestMempoolFees model module.
 * @module model/TestMempoolFees
 * @version 1.0.21
 */
export default class TestMempoolFees {
  /**
   * Constructs a new <code>TestMempoolFees</code>.
   * @alias module:model/TestMempoolFees
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TestMempoolFees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestMempoolFees} obj Optional instance to populate.
   * @return {module:model/TestMempoolFees} The populated <code>TestMempoolFees</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TestMempoolFees();
      if (data.hasOwnProperty('base'))
        obj.base = ApiClient.convertToType(data['base'], 'Number');
    }
    return obj;
  }
}

/**
 * Transaction fee in BTC
 * @member {Number} base
 */
TestMempoolFees.prototype.base = undefined;

