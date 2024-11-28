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
 * The RuneResponse model module.
 * @module model/RuneResponse
 * @version 1.0.32
 */
export default class RuneResponse {
  /**
   * Constructs a new <code>RuneResponse</code>.
   * @alias module:model/RuneResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RuneResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuneResponse} obj Optional instance to populate.
   * @return {module:model/RuneResponse} The populated <code>RuneResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RuneResponse();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('mintable'))
        obj.mintable = ApiClient.convertToType(data['mintable'], 'Boolean');
      if (data.hasOwnProperty('parent'))
        obj.parent = ApiClient.convertToType(data['parent'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
RuneResponse.prototype.id = undefined;

/**
 * @member {Boolean} mintable
 */
RuneResponse.prototype.mintable = undefined;

/**
 * @member {String} parent
 */
RuneResponse.prototype.parent = undefined;

