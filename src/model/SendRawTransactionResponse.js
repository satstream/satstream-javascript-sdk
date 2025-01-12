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
 * The SendRawTransactionResponse model module.
 * @module model/SendRawTransactionResponse
 * @version 1.0.34
 */
export default class SendRawTransactionResponse {
  /**
   * Constructs a new <code>SendRawTransactionResponse</code>.
   * @alias module:model/SendRawTransactionResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SendRawTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendRawTransactionResponse} obj Optional instance to populate.
   * @return {module:model/SendRawTransactionResponse} The populated <code>SendRawTransactionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SendRawTransactionResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
SendRawTransactionResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
SendRawTransactionResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
SendRawTransactionResponse.prototype.msg = undefined;

