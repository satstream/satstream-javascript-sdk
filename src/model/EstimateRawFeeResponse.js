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
import RawFeeEstimate from './RawFeeEstimate';

/**
 * The EstimateRawFeeResponse model module.
 * @module model/EstimateRawFeeResponse
 * @version 1.0.36
 */
export default class EstimateRawFeeResponse {
  /**
   * Constructs a new <code>EstimateRawFeeResponse</code>.
   * @alias module:model/EstimateRawFeeResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EstimateRawFeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimateRawFeeResponse} obj Optional instance to populate.
   * @return {module:model/EstimateRawFeeResponse} The populated <code>EstimateRawFeeResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstimateRawFeeResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = RawFeeEstimate.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
EstimateRawFeeResponse.prototype.code = undefined;

/**
 * @member {module:model/RawFeeEstimate} data
 */
EstimateRawFeeResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
EstimateRawFeeResponse.prototype.msg = undefined;

