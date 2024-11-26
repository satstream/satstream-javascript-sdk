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
 * The PSBTMissingData model module.
 * @module model/PSBTMissingData
 * @version 1.0.22
 */
export default class PSBTMissingData {
  /**
   * Constructs a new <code>PSBTMissingData</code>.
   * @alias module:model/PSBTMissingData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PSBTMissingData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PSBTMissingData} obj Optional instance to populate.
   * @return {module:model/PSBTMissingData} The populated <code>PSBTMissingData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PSBTMissingData();
      if (data.hasOwnProperty('pubkeys'))
        obj.pubkeys = ApiClient.convertToType(data['pubkeys'], ['String']);
      if (data.hasOwnProperty('redeemscript'))
        obj.redeemscript = ApiClient.convertToType(data['redeemscript'], 'String');
      if (data.hasOwnProperty('signatures'))
        obj.signatures = ApiClient.convertToType(data['signatures'], ['String']);
      if (data.hasOwnProperty('witnessscript'))
        obj.witnessscript = ApiClient.convertToType(data['witnessscript'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} pubkeys
 */
PSBTMissingData.prototype.pubkeys = undefined;

/**
 * @member {String} redeemscript
 */
PSBTMissingData.prototype.redeemscript = undefined;

/**
 * @member {Array.<String>} signatures
 */
PSBTMissingData.prototype.signatures = undefined;

/**
 * @member {String} witnessscript
 */
PSBTMissingData.prototype.witnessscript = undefined;

