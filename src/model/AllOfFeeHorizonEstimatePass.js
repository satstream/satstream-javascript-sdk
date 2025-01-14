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
import FeeRange from './FeeRange';

/**
 * The AllOfFeeHorizonEstimatePass model module.
 * @module model/AllOfFeeHorizonEstimatePass
 * @version 1.0.36
 */
export default class AllOfFeeHorizonEstimatePass extends FeeRange {
  /**
   * Constructs a new <code>AllOfFeeHorizonEstimatePass</code>.
   * Information about lowest range of feerates to succeed
   * @alias module:model/AllOfFeeHorizonEstimatePass
   * @class
   * @extends module:model/FeeRange
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfFeeHorizonEstimatePass</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfFeeHorizonEstimatePass} obj Optional instance to populate.
   * @return {module:model/AllOfFeeHorizonEstimatePass} The populated <code>AllOfFeeHorizonEstimatePass</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfFeeHorizonEstimatePass();
      FeeRange.constructFromObject(data, obj);
    }
    return obj;
  }
}
