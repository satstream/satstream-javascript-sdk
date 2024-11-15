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
import ResponsesGetAddressTimeframeBalanceItem from './ResponsesGetAddressTimeframeBalanceItem';

/**
 * The ResponsesGetAddressTimeframeBalanceData model module.
 * @module model/ResponsesGetAddressTimeframeBalanceData
 * @version 1.0.10
 */
export default class ResponsesGetAddressTimeframeBalanceData {
  /**
   * Constructs a new <code>ResponsesGetAddressTimeframeBalanceData</code>.
   * @alias module:model/ResponsesGetAddressTimeframeBalanceData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressTimeframeBalanceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressTimeframeBalanceData} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressTimeframeBalanceData} The populated <code>ResponsesGetAddressTimeframeBalanceData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressTimeframeBalanceData();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [ResponsesGetAddressTimeframeBalanceItem]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ResponsesGetAddressTimeframeBalanceItem>} items
 */
ResponsesGetAddressTimeframeBalanceData.prototype.items = undefined;

