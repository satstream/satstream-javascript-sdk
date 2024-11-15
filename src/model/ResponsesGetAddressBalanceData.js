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
 * The ResponsesGetAddressBalanceData model module.
 * @module model/ResponsesGetAddressBalanceData
 * @version 1.0.14
 */
export default class ResponsesGetAddressBalanceData {
  /**
   * Constructs a new <code>ResponsesGetAddressBalanceData</code>.
   * @alias module:model/ResponsesGetAddressBalanceData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressBalanceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressBalanceData} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressBalanceData} The populated <code>ResponsesGetAddressBalanceData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressBalanceData();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
ResponsesGetAddressBalanceData.prototype.address = undefined;

/**
 * @member {String} balance
 */
ResponsesGetAddressBalanceData.prototype.balance = undefined;

