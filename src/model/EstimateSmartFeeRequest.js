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
 * The EstimateSmartFeeRequest model module.
 * @module model/EstimateSmartFeeRequest
 * @version 1.0.32
 */
export default class EstimateSmartFeeRequest {
  /**
   * Constructs a new <code>EstimateSmartFeeRequest</code>.
   * @alias module:model/EstimateSmartFeeRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EstimateSmartFeeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimateSmartFeeRequest} obj Optional instance to populate.
   * @return {module:model/EstimateSmartFeeRequest} The populated <code>EstimateSmartFeeRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstimateSmartFeeRequest();
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
EstimateSmartFeeRequest.prototype.confTarget = undefined;

/**
 * Optional: The fee estimate mode (unset, economical, conservative)
 * @member {String} estimateMode
 */
EstimateSmartFeeRequest.prototype.estimateMode = undefined;

