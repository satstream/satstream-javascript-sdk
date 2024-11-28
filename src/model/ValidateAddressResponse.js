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
import ValidateAddressResult from './ValidateAddressResult';

/**
 * The ValidateAddressResponse model module.
 * @module model/ValidateAddressResponse
 * @version 1.0.32
 */
export default class ValidateAddressResponse {
  /**
   * Constructs a new <code>ValidateAddressResponse</code>.
   * @alias module:model/ValidateAddressResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ValidateAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateAddressResponse} obj Optional instance to populate.
   * @return {module:model/ValidateAddressResponse} The populated <code>ValidateAddressResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ValidateAddressResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ValidateAddressResult.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ValidateAddressResponse.prototype.code = undefined;

/**
 * @member {module:model/ValidateAddressResult} data
 */
ValidateAddressResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
ValidateAddressResponse.prototype.msg = undefined;
