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
 * The GetRawTransactionHexResponse model module.
 * @module model/GetRawTransactionHexResponse
 * @version 1.0.34
 */
export default class GetRawTransactionHexResponse {
  /**
   * Constructs a new <code>GetRawTransactionHexResponse</code>.
   * @alias module:model/GetRawTransactionHexResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRawTransactionHexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRawTransactionHexResponse} obj Optional instance to populate.
   * @return {module:model/GetRawTransactionHexResponse} The populated <code>GetRawTransactionHexResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRawTransactionHexResponse();
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
GetRawTransactionHexResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
GetRawTransactionHexResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetRawTransactionHexResponse.prototype.msg = undefined;

