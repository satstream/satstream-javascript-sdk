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
 * The FeeHorizonEstimate model module.
 * @module model/FeeHorizonEstimate
 * @version 1.0.32
 */
export default class FeeHorizonEstimate {
  /**
   * Constructs a new <code>FeeHorizonEstimate</code>.
   * @alias module:model/FeeHorizonEstimate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FeeHorizonEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeeHorizonEstimate} obj Optional instance to populate.
   * @return {module:model/FeeHorizonEstimate} The populated <code>FeeHorizonEstimate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FeeHorizonEstimate();
      if (data.hasOwnProperty('decay'))
        obj.decay = ApiClient.convertToType(data['decay'], 'Number');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], ['String']);
      if (data.hasOwnProperty('fail'))
        obj.fail = ApiClient.convertToType(data['fail'], Object);
      if (data.hasOwnProperty('feerate'))
        obj.feerate = ApiClient.convertToType(data['feerate'], 'Number');
      if (data.hasOwnProperty('pass'))
        obj.pass = ApiClient.convertToType(data['pass'], Object);
      if (data.hasOwnProperty('scale'))
        obj.scale = ApiClient.convertToType(data['scale'], 'Number');
    }
    return obj;
  }
}

/**
 * Exponential decay (per block) for historical moving average
 * @member {Number} decay
 */
FeeHorizonEstimate.prototype.decay = undefined;

/**
 * Errors encountered during processing
 * @member {Array.<String>} errors
 */
FeeHorizonEstimate.prototype.errors = undefined;

/**
 * Information about highest range of feerates to fail
 * @member {Object} fail
 */
FeeHorizonEstimate.prototype.fail = undefined;

/**
 * Estimate fee rate in BTC/kvB
 * @member {Number} feerate
 */
FeeHorizonEstimate.prototype.feerate = undefined;

/**
 * Information about lowest range of feerates to succeed
 * @member {Object} pass
 */
FeeHorizonEstimate.prototype.pass = undefined;

/**
 * Resolution of confirmation targets at this time horizon
 * @member {Number} scale
 */
FeeHorizonEstimate.prototype.scale = undefined;

