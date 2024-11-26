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
 * The GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate} The populated <code>GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate();
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
GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate.prototype.decay = undefined;

/**
 * Errors encountered during processing
 * @member {Array.<String>} errors
 */
GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate.prototype.errors = undefined;

/**
 * Information about highest range of feerates to fail
 * @member {Object} fail
 */
GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate.prototype.fail = undefined;

/**
 * Estimate fee rate in BTC/kvB
 * @member {Number} feerate
 */
GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate.prototype.feerate = undefined;

/**
 * Information about lowest range of feerates to succeed
 * @member {Object} pass
 */
GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate.prototype.pass = undefined;

/**
 * Resolution of confirmation targets at this time horizon
 * @member {Number} scale
 */
GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate.prototype.scale = undefined;

