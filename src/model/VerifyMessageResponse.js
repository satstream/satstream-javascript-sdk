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

/**
 * The VerifyMessageResponse model module.
 * @module model/VerifyMessageResponse
 * @version 1.0.23
 */
export default class VerifyMessageResponse {
  /**
   * Constructs a new <code>VerifyMessageResponse</code>.
   * @alias module:model/VerifyMessageResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VerifyMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerifyMessageResponse} obj Optional instance to populate.
   * @return {module:model/VerifyMessageResponse} The populated <code>VerifyMessageResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VerifyMessageResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'Boolean');
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
VerifyMessageResponse.prototype.code = undefined;

/**
 * @member {Boolean} data
 */
VerifyMessageResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
VerifyMessageResponse.prototype.msg = undefined;

