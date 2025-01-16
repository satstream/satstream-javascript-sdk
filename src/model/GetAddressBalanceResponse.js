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
import GetAddressBalanceResponseData from './GetAddressBalanceResponseData';

/**
 * The GetAddressBalanceResponse model module.
 * @module model/GetAddressBalanceResponse
 * @version 1.0.39
 */
export default class GetAddressBalanceResponse {
  /**
   * Constructs a new <code>GetAddressBalanceResponse</code>.
   * @alias module:model/GetAddressBalanceResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAddressBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressBalanceResponse} obj Optional instance to populate.
   * @return {module:model/GetAddressBalanceResponse} The populated <code>GetAddressBalanceResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAddressBalanceResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GetAddressBalanceResponseData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetAddressBalanceResponse.prototype.code = undefined;

/**
 * @member {module:model/GetAddressBalanceResponseData} data
 */
GetAddressBalanceResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetAddressBalanceResponse.prototype.msg = undefined;

