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
import OutputResponse from './OutputResponse';

/**
 * The GetAddressUTXOsResponse model module.
 * @module model/GetAddressUTXOsResponse
 * @version 1.0.45
 */
export default class GetAddressUTXOsResponse {
  /**
   * Constructs a new <code>GetAddressUTXOsResponse</code>.
   * @alias module:model/GetAddressUTXOsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAddressUTXOsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressUTXOsResponse} obj Optional instance to populate.
   * @return {module:model/GetAddressUTXOsResponse} The populated <code>GetAddressUTXOsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAddressUTXOsResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OutputResponse]);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetAddressUTXOsResponse.prototype.code = undefined;

/**
 * @member {Array.<module:model/OutputResponse>} data
 */
GetAddressUTXOsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetAddressUTXOsResponse.prototype.msg = undefined;

