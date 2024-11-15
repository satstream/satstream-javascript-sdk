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
 * The ResponsesGetAddressTimeframeBalanceItem model module.
 * @module model/ResponsesGetAddressTimeframeBalanceItem
 * @version 1.0.13
 */
export default class ResponsesGetAddressTimeframeBalanceItem {
  /**
   * Constructs a new <code>ResponsesGetAddressTimeframeBalanceItem</code>.
   * @alias module:model/ResponsesGetAddressTimeframeBalanceItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressTimeframeBalanceItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressTimeframeBalanceItem} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressTimeframeBalanceItem} The populated <code>ResponsesGetAddressTimeframeBalanceItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressTimeframeBalanceItem();
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'String');
      if (data.hasOwnProperty('blockRange'))
        obj.blockRange = ApiClient.convertToType(data['blockRange'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} balance
 */
ResponsesGetAddressTimeframeBalanceItem.prototype.balance = undefined;

/**
 * Time       time.Time  `json:\"time\"`
 * @member {Object} blockRange
 */
ResponsesGetAddressTimeframeBalanceItem.prototype.blockRange = undefined;

