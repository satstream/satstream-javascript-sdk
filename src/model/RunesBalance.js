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
 * The RunesBalance model module.
 * @module model/RunesBalance
 * @version 1.0.34
 */
export default class RunesBalance {
  /**
   * Constructs a new <code>RunesBalance</code>.
   * @alias module:model/RunesBalance
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RunesBalance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunesBalance} obj Optional instance to populate.
   * @return {module:model/RunesBalance} The populated <code>RunesBalance</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RunesBalance();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'String');
      if (data.hasOwnProperty('spaced_rune'))
        obj.spacedRune = ApiClient.convertToType(data['spaced_rune'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} amount
 */
RunesBalance.prototype.amount = undefined;

/**
 * @member {String} spacedRune
 */
RunesBalance.prototype.spacedRune = undefined;

/**
 * @member {String} symbol
 */
RunesBalance.prototype.symbol = undefined;

