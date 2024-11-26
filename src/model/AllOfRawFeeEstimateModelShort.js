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
 * The AllOfRawFeeEstimateModelShort model module.
 * @module model/AllOfRawFeeEstimateModelShort
 * @version 1.0.22
 */
export default class AllOfRawFeeEstimateModelShort extends FeeHorizonEstimate {
  /**
   * Constructs a new <code>AllOfRawFeeEstimateModelShort</code>.
   * Estimate for short time horizon
   * @alias module:model/AllOfRawFeeEstimateModelShort
   * @class
   * @extends module:model/FeeHorizonEstimate
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfRawFeeEstimateModelShort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfRawFeeEstimateModelShort} obj Optional instance to populate.
   * @return {module:model/AllOfRawFeeEstimateModelShort} The populated <code>AllOfRawFeeEstimateModelShort</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfRawFeeEstimateModelShort();
      FeeHorizonEstimate.constructFromObject(data, obj);
    }
    return obj;
  }
}
