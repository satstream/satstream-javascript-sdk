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
import ResponsesGetAddressTimeframeBalanceData from './ResponsesGetAddressTimeframeBalanceData';

/**
 * The ResponsesGetAddressTimeframeBalance model module.
 * @module model/ResponsesGetAddressTimeframeBalance
 * @version 1.0
 */
export default class ResponsesGetAddressTimeframeBalance {
  /**
   * Constructs a new <code>ResponsesGetAddressTimeframeBalance</code>.
   * @alias module:model/ResponsesGetAddressTimeframeBalance
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressTimeframeBalance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressTimeframeBalance} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressTimeframeBalance} The populated <code>ResponsesGetAddressTimeframeBalance</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressTimeframeBalance();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetAddressTimeframeBalanceData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetAddressTimeframeBalance.prototype.code = undefined;

/**
 * @member {module:model/ResponsesGetAddressTimeframeBalanceData} data
 */
ResponsesGetAddressTimeframeBalance.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetAddressTimeframeBalance.prototype.msg = undefined;

