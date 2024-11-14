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
 * The ResponsesRuneHolder model module.
 * @module model/ResponsesRuneHolder
 * @version 1.0.0
 */
export default class ResponsesRuneHolder {
  /**
   * Constructs a new <code>ResponsesRuneHolder</code>.
   * @alias module:model/ResponsesRuneHolder
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesRuneHolder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesRuneHolder} obj Optional instance to populate.
   * @return {module:model/ResponsesRuneHolder} The populated <code>ResponsesRuneHolder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesRuneHolder();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
ResponsesRuneHolder.prototype.address = undefined;

/**
 * @member {String} balance
 */
ResponsesRuneHolder.prototype.balance = undefined;

