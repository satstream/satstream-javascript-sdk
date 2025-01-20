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
import PSBTMissingData from './PSBTMissingData';

/**
 * The PSBTInputAnalysis model module.
 * @module model/PSBTInputAnalysis
 * @version 1.0.45
 */
export default class PSBTInputAnalysis {
  /**
   * Constructs a new <code>PSBTInputAnalysis</code>.
   * @alias module:model/PSBTInputAnalysis
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PSBTInputAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PSBTInputAnalysis} obj Optional instance to populate.
   * @return {module:model/PSBTInputAnalysis} The populated <code>PSBTInputAnalysis</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PSBTInputAnalysis();
      if (data.hasOwnProperty('has_utxo'))
        obj.hasUtxo = ApiClient.convertToType(data['has_utxo'], 'Boolean');
      if (data.hasOwnProperty('is_final'))
        obj.isFinal = ApiClient.convertToType(data['is_final'], 'Boolean');
      if (data.hasOwnProperty('missing'))
        obj.missing = PSBTMissingData.constructFromObject(data['missing']);
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} hasUtxo
 */
PSBTInputAnalysis.prototype.hasUtxo = undefined;

/**
 * @member {Boolean} isFinal
 */
PSBTInputAnalysis.prototype.isFinal = undefined;

/**
 * @member {module:model/PSBTMissingData} missing
 */
PSBTInputAnalysis.prototype.missing = undefined;

/**
 * @member {String} next
 */
PSBTInputAnalysis.prototype.next = undefined;

