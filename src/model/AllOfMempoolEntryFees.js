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
import MempoolFees from './MempoolFees';

/**
 * The AllOfMempoolEntryFees model module.
 * @module model/AllOfMempoolEntryFees
 * @version 1.0.43
 */
export default class AllOfMempoolEntryFees extends MempoolFees {
  /**
   * Constructs a new <code>AllOfMempoolEntryFees</code>.
   * Fee information
   * @alias module:model/AllOfMempoolEntryFees
   * @class
   * @extends module:model/MempoolFees
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfMempoolEntryFees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfMempoolEntryFees} obj Optional instance to populate.
   * @return {module:model/AllOfMempoolEntryFees} The populated <code>AllOfMempoolEntryFees</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfMempoolEntryFees();
      MempoolFees.constructFromObject(data, obj);
    }
    return obj;
  }
}
