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
import TxOut from './TxOut';

/**
 * The GetTxOutResponse model module.
 * @module model/GetTxOutResponse
 * @version 1.0.32
 */
export default class GetTxOutResponse {
  /**
   * Constructs a new <code>GetTxOutResponse</code>.
   * @alias module:model/GetTxOutResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetTxOutResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTxOutResponse} obj Optional instance to populate.
   * @return {module:model/GetTxOutResponse} The populated <code>GetTxOutResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetTxOutResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = TxOut.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetTxOutResponse.prototype.code = undefined;

/**
 * @member {module:model/TxOut} data
 */
GetTxOutResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetTxOutResponse.prototype.msg = undefined;
