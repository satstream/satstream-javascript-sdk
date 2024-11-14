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
import ResponsesGetAddressRuneBalanceData from './ResponsesGetAddressRuneBalanceData';

/**
 * The ResponsesGetAddressRuneBalance model module.
 * @module models/ResponsesGetAddressRuneBalance
 * @version 1.0
 */
export default class ResponsesGetAddressRuneBalance {
  /**
   * Constructs a new <code>ResponsesGetAddressRuneBalance</code>.
   * @alias module:models/ResponsesGetAddressRuneBalance
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressRuneBalance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ResponsesGetAddressRuneBalance} obj Optional instance to populate.
   * @return {module:models/ResponsesGetAddressRuneBalance} The populated <code>ResponsesGetAddressRuneBalance</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressRuneBalance();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetAddressRuneBalanceData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetAddressRuneBalance.prototype.code = undefined;

/**
 * @member {module:models/ResponsesGetAddressRuneBalanceData} data
 */
ResponsesGetAddressRuneBalance.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetAddressRuneBalance.prototype.msg = undefined;

