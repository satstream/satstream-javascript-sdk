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
import SmartFeeEstimate from './SmartFeeEstimate';

/**
 * The EstimateSmartFeeResponse model module.
 * @module model/EstimateSmartFeeResponse
 * @version 1.0.38
 */
export default class EstimateSmartFeeResponse {
  /**
   * Constructs a new <code>EstimateSmartFeeResponse</code>.
   * @alias module:model/EstimateSmartFeeResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EstimateSmartFeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimateSmartFeeResponse} obj Optional instance to populate.
   * @return {module:model/EstimateSmartFeeResponse} The populated <code>EstimateSmartFeeResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstimateSmartFeeResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = SmartFeeEstimate.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
EstimateSmartFeeResponse.prototype.code = undefined;

/**
 * @member {module:model/SmartFeeEstimate} data
 */
EstimateSmartFeeResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
EstimateSmartFeeResponse.prototype.msg = undefined;

