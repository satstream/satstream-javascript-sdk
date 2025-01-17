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
 * The GetAddressBalanceResponseData model module.
 * @module model/GetAddressBalanceResponseData
 * @version 1.0.45
 */
export default class GetAddressBalanceResponseData {
  /**
   * Constructs a new <code>GetAddressBalanceResponseData</code>.
   * @alias module:model/GetAddressBalanceResponseData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAddressBalanceResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressBalanceResponseData} obj Optional instance to populate.
   * @return {module:model/GetAddressBalanceResponseData} The populated <code>GetAddressBalanceResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAddressBalanceResponseData();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
GetAddressBalanceResponseData.prototype.address = undefined;

/**
 * @member {Number} balance
 */
GetAddressBalanceResponseData.prototype.balance = undefined;

