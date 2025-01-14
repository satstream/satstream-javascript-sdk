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
import FeeHorizonEstimate from './FeeHorizonEstimate';

/**
 * The AllOfRawFeeEstimateModelLong model module.
 * @module model/AllOfRawFeeEstimateModelLong
 * @version 1.0.37
 */
export default class AllOfRawFeeEstimateModelLong extends FeeHorizonEstimate {
  /**
   * Constructs a new <code>AllOfRawFeeEstimateModelLong</code>.
   * Estimate for long time horizon
   * @alias module:model/AllOfRawFeeEstimateModelLong
   * @class
   * @extends module:model/FeeHorizonEstimate
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfRawFeeEstimateModelLong</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfRawFeeEstimateModelLong} obj Optional instance to populate.
   * @return {module:model/AllOfRawFeeEstimateModelLong} The populated <code>AllOfRawFeeEstimateModelLong</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfRawFeeEstimateModelLong();
      FeeHorizonEstimate.constructFromObject(data, obj);
    }
    return obj;
  }
}
