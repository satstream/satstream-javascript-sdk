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
 * The CreateRawTransactionResponse model module.
 * @module model/CreateRawTransactionResponse
 * @version 1.0.45
 */
export default class CreateRawTransactionResponse {
  /**
   * Constructs a new <code>CreateRawTransactionResponse</code>.
   * @alias module:model/CreateRawTransactionResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateRawTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateRawTransactionResponse} obj Optional instance to populate.
   * @return {module:model/CreateRawTransactionResponse} The populated <code>CreateRawTransactionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateRawTransactionResponse();
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
CreateRawTransactionResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
CreateRawTransactionResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
CreateRawTransactionResponse.prototype.msg = undefined;

