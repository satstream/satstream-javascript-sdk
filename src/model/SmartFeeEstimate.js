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
 * The SmartFeeEstimate model module.
 * @module model/SmartFeeEstimate
 * @version 1.0.23
 */
export default class SmartFeeEstimate {
  /**
   * Constructs a new <code>SmartFeeEstimate</code>.
   * @alias module:model/SmartFeeEstimate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SmartFeeEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SmartFeeEstimate} obj Optional instance to populate.
   * @return {module:model/SmartFeeEstimate} The populated <code>SmartFeeEstimate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SmartFeeEstimate();
      if (data.hasOwnProperty('blocks'))
        obj.blocks = ApiClient.convertToType(data['blocks'], 'Number');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], ['String']);
      if (data.hasOwnProperty('feerate'))
        obj.feerate = ApiClient.convertToType(data['feerate'], 'Number');
    }
    return obj;
  }
}

/**
 * Block number where estimate was found
 * @member {Number} blocks
 */
SmartFeeEstimate.prototype.blocks = undefined;

/**
 * Errors encountered during processing
 * @member {Array.<String>} errors
 */
SmartFeeEstimate.prototype.errors = undefined;

/**
 * Estimate fee rate in BTC/kvB
 * @member {Number} feerate
 */
SmartFeeEstimate.prototype.feerate = undefined;

