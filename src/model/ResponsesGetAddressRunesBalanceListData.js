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
import ResponsesGetAddressRunesBalanceListItem from './ResponsesGetAddressRunesBalanceListItem';

/**
 * The ResponsesGetAddressRunesBalanceListData model module.
 * @module model/ResponsesGetAddressRunesBalanceListData
 * @version 1.0.15
 */
export default class ResponsesGetAddressRunesBalanceListData {
  /**
   * Constructs a new <code>ResponsesGetAddressRunesBalanceListData</code>.
   * @alias module:model/ResponsesGetAddressRunesBalanceListData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressRunesBalanceListData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressRunesBalanceListData} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressRunesBalanceListData} The populated <code>ResponsesGetAddressRunesBalanceListData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressRunesBalanceListData();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [ResponsesGetAddressRunesBalanceListItem]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ResponsesGetAddressRunesBalanceListItem>} items
 */
ResponsesGetAddressRunesBalanceListData.prototype.items = undefined;

