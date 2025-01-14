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
import RawTx2 from './RawTx2';

/**
 * The GetRawTransactionPrevoutResponse model module.
 * @module model/GetRawTransactionPrevoutResponse
 * @version 1.0.36
 */
export default class GetRawTransactionPrevoutResponse {
  /**
   * Constructs a new <code>GetRawTransactionPrevoutResponse</code>.
   * @alias module:model/GetRawTransactionPrevoutResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRawTransactionPrevoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRawTransactionPrevoutResponse} obj Optional instance to populate.
   * @return {module:model/GetRawTransactionPrevoutResponse} The populated <code>GetRawTransactionPrevoutResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRawTransactionPrevoutResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = RawTx2.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetRawTransactionPrevoutResponse.prototype.code = undefined;

/**
 * @member {module:model/RawTx2} data
 */
GetRawTransactionPrevoutResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetRawTransactionPrevoutResponse.prototype.msg = undefined;

