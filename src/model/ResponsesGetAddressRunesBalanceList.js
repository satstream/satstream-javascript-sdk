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
import ResponsesGetAddressRunesBalanceListData from './ResponsesGetAddressRunesBalanceListData';

/**
 * The ResponsesGetAddressRunesBalanceList model module.
 * @module model/ResponsesGetAddressRunesBalanceList
 * @version 1.0.0
 */
export default class ResponsesGetAddressRunesBalanceList {
  /**
   * Constructs a new <code>ResponsesGetAddressRunesBalanceList</code>.
   * @alias module:model/ResponsesGetAddressRunesBalanceList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressRunesBalanceList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressRunesBalanceList} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressRunesBalanceList} The populated <code>ResponsesGetAddressRunesBalanceList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressRunesBalanceList();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetAddressRunesBalanceListData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetAddressRunesBalanceList.prototype.code = undefined;

/**
 * @member {module:model/ResponsesGetAddressRunesBalanceListData} data
 */
ResponsesGetAddressRunesBalanceList.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetAddressRunesBalanceList.prototype.msg = undefined;

