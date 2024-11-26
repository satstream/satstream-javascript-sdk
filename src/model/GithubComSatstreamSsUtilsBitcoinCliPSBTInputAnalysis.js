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
import GithubComSatstreamSsUtilsBitcoinCliPSBTMissingData from './GithubComSatstreamSsUtilsBitcoinCliPSBTMissingData';

/**
 * The GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis} The populated <code>GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis();
      if (data.hasOwnProperty('has_utxo'))
        obj.hasUtxo = ApiClient.convertToType(data['has_utxo'], 'Boolean');
      if (data.hasOwnProperty('is_final'))
        obj.isFinal = ApiClient.convertToType(data['is_final'], 'Boolean');
      if (data.hasOwnProperty('missing'))
        obj.missing = GithubComSatstreamSsUtilsBitcoinCliPSBTMissingData.constructFromObject(data['missing']);
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} hasUtxo
 */
GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis.prototype.hasUtxo = undefined;

/**
 * @member {Boolean} isFinal
 */
GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis.prototype.isFinal = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsBitcoinCliPSBTMissingData} missing
 */
GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis.prototype.missing = undefined;

/**
 * @member {String} next
 */
GithubComSatstreamSsUtilsBitcoinCliPSBTInputAnalysis.prototype.next = undefined;
