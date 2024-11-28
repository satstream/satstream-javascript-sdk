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
import DecodeResponse from './DecodeResponse';

/**
 * The DecodeTransactionResponse model module.
 * @module model/DecodeTransactionResponse
 * @version 1.0.32
 */
export default class DecodeTransactionResponse {
  /**
   * Constructs a new <code>DecodeTransactionResponse</code>.
   * @alias module:model/DecodeTransactionResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodeTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodeTransactionResponse} obj Optional instance to populate.
   * @return {module:model/DecodeTransactionResponse} The populated <code>DecodeTransactionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodeTransactionResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = DecodeResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
DecodeTransactionResponse.prototype.code = undefined;

/**
 * @member {module:model/DecodeResponse} data
 */
DecodeTransactionResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
DecodeTransactionResponse.prototype.msg = undefined;
