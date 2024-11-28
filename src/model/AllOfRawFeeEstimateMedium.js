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
import FeeHorizonEstimate from './FeeHorizonEstimate';

/**
 * The AllOfRawFeeEstimateMedium model module.
 * @module model/AllOfRawFeeEstimateMedium
 * @version 1.0.32
 */
export default class AllOfRawFeeEstimateMedium extends FeeHorizonEstimate {
  /**
   * Constructs a new <code>AllOfRawFeeEstimateMedium</code>.
   * Estimate for medium time horizon
   * @alias module:model/AllOfRawFeeEstimateMedium
   * @class
   * @extends module:model/FeeHorizonEstimate
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfRawFeeEstimateMedium</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfRawFeeEstimateMedium} obj Optional instance to populate.
   * @return {module:model/AllOfRawFeeEstimateMedium} The populated <code>AllOfRawFeeEstimateMedium</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfRawFeeEstimateMedium();
      FeeHorizonEstimate.constructFromObject(data, obj);
    }
    return obj;
  }
}
