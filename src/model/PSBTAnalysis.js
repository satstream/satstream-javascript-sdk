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
import PSBTInputAnalysis from './PSBTInputAnalysis';

/**
 * The PSBTAnalysis model module.
 * @module model/PSBTAnalysis
 * @version 1.0.22
 */
export default class PSBTAnalysis {
  /**
   * Constructs a new <code>PSBTAnalysis</code>.
   * @alias module:model/PSBTAnalysis
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PSBTAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PSBTAnalysis} obj Optional instance to populate.
   * @return {module:model/PSBTAnalysis} The populated <code>PSBTAnalysis</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PSBTAnalysis();
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
      if (data.hasOwnProperty('estimated_feerate'))
        obj.estimatedFeerate = ApiClient.convertToType(data['estimated_feerate'], 'Number');
      if (data.hasOwnProperty('estimated_vsize'))
        obj.estimatedVsize = ApiClient.convertToType(data['estimated_vsize'], 'Number');
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('inputs'))
        obj.inputs = ApiClient.convertToType(data['inputs'], [PSBTInputAnalysis]);
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} error
 */
PSBTAnalysis.prototype.error = undefined;

/**
 * @member {Number} estimatedFeerate
 */
PSBTAnalysis.prototype.estimatedFeerate = undefined;

/**
 * @member {Number} estimatedVsize
 */
PSBTAnalysis.prototype.estimatedVsize = undefined;

/**
 * @member {Number} fee
 */
PSBTAnalysis.prototype.fee = undefined;

/**
 * @member {Array.<module:model/PSBTInputAnalysis>} inputs
 */
PSBTAnalysis.prototype.inputs = undefined;

/**
 * @member {String} next
 */
PSBTAnalysis.prototype.next = undefined;

