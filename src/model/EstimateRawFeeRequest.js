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
 * The EstimateRawFeeRequest model module.
 * @module model/EstimateRawFeeRequest
 * @version 1.0.44
 */
export default class EstimateRawFeeRequest {
  /**
   * Constructs a new <code>EstimateRawFeeRequest</code>.
   * @alias module:model/EstimateRawFeeRequest
   * @class
   * @param confTarget {Number} Confirmation target in blocks (1 - 1008)
   */
  constructor(confTarget) {
    this.confTarget = confTarget;
  }

  /**
   * Constructs a <code>EstimateRawFeeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimateRawFeeRequest} obj Optional instance to populate.
   * @return {module:model/EstimateRawFeeRequest} The populated <code>EstimateRawFeeRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstimateRawFeeRequest();
      if (data.hasOwnProperty('conf_target'))
        obj.confTarget = ApiClient.convertToType(data['conf_target'], 'Number');
      if (data.hasOwnProperty('threshold'))
        obj.threshold = ApiClient.convertToType(data['threshold'], 'Number');
    }
    return obj;
  }
}

/**
 * Confirmation target in blocks (1 - 1008)
 * @member {Number} confTarget
 */
EstimateRawFeeRequest.prototype.confTarget = undefined;

/**
 * The proportion of transactions in a given feerate range that must have been confirmed within conf_target in order to consider those feerates as high enough and proceed to check lower buckets. Optional, defaults to 0.95
 * @member {Number} threshold
 */
EstimateRawFeeRequest.prototype.threshold = undefined;

