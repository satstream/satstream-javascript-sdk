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
 * The GetTxOutProofResponse model module.
 * @module model/GetTxOutProofResponse
 * @version 1.0.44
 */
export default class GetTxOutProofResponse {
  /**
   * Constructs a new <code>GetTxOutProofResponse</code>.
   * @alias module:model/GetTxOutProofResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetTxOutProofResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTxOutProofResponse} obj Optional instance to populate.
   * @return {module:model/GetTxOutProofResponse} The populated <code>GetTxOutProofResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetTxOutProofResponse();
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
GetTxOutProofResponse.prototype.code = undefined;

/**
 * @member {String} data
 */
GetTxOutProofResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetTxOutProofResponse.prototype.msg = undefined;

