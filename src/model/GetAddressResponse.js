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
import AddressResponse from './AddressResponse';

/**
 * The GetAddressResponse model module.
 * @module model/GetAddressResponse
 * @version 1.0.45
 */
export default class GetAddressResponse {
  /**
   * Constructs a new <code>GetAddressResponse</code>.
   * @alias module:model/GetAddressResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressResponse} obj Optional instance to populate.
   * @return {module:model/GetAddressResponse} The populated <code>GetAddressResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAddressResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = AddressResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetAddressResponse.prototype.code = undefined;

/**
 * @member {module:model/AddressResponse} data
 */
GetAddressResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetAddressResponse.prototype.msg = undefined;

