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
 * The RequestsEstimateSmartFeeRequest model module.
 * @module model/RequestsEstimateSmartFeeRequest
 * @version 1.0.23
 */
export default class RequestsEstimateSmartFeeRequest {
  /**
   * Constructs a new <code>RequestsEstimateSmartFeeRequest</code>.
   * @alias module:model/RequestsEstimateSmartFeeRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsEstimateSmartFeeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsEstimateSmartFeeRequest} obj Optional instance to populate.
   * @return {module:model/RequestsEstimateSmartFeeRequest} The populated <code>RequestsEstimateSmartFeeRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsEstimateSmartFeeRequest();
      if (data.hasOwnProperty('conf_target'))
        obj.confTarget = ApiClient.convertToType(data['conf_target'], 'Number');
      if (data.hasOwnProperty('estimate_mode'))
        obj.estimateMode = ApiClient.convertToType(data['estimate_mode'], 'String');
    }
    return obj;
  }
}

/**
 * Required: Confirmation target in blocks (1 - 1008)
 * @member {Number} confTarget
 */
RequestsEstimateSmartFeeRequest.prototype.confTarget = undefined;

/**
 * Optional: The fee estimate mode (unset, economical, conservative)
 * @member {String} estimateMode
 */
RequestsEstimateSmartFeeRequest.prototype.estimateMode = undefined;

