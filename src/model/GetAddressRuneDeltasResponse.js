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
import AddressRuneDelta from './AddressRuneDelta';

/**
 * The GetAddressRuneDeltasResponse model module.
 * @module model/GetAddressRuneDeltasResponse
 * @version 1.0.45
 */
export default class GetAddressRuneDeltasResponse {
  /**
   * Constructs a new <code>GetAddressRuneDeltasResponse</code>.
   * @alias module:model/GetAddressRuneDeltasResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAddressRuneDeltasResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressRuneDeltasResponse} obj Optional instance to populate.
   * @return {module:model/GetAddressRuneDeltasResponse} The populated <code>GetAddressRuneDeltasResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAddressRuneDeltasResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [AddressRuneDelta]);
      if (data.hasOwnProperty('has_more'))
        obj.hasMore = ApiClient.convertToType(data['has_more'], 'Boolean');
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetAddressRuneDeltasResponse.prototype.code = undefined;

/**
 * @member {Array.<module:model/AddressRuneDelta>} data
 */
GetAddressRuneDeltasResponse.prototype.data = undefined;

/**
 * @member {Boolean} hasMore
 */
GetAddressRuneDeltasResponse.prototype.hasMore = undefined;

/**
 * @member {String} msg
 */
GetAddressRuneDeltasResponse.prototype.msg = undefined;

