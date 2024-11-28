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
 * The GithubComSatstreamSsUtilsDatabaseAddressDelta model module.
 * @module model/GithubComSatstreamSsUtilsDatabaseAddressDelta
 * @version 1.0.32
 */
export default class GithubComSatstreamSsUtilsDatabaseAddressDelta {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsDatabaseAddressDelta</code>.
   * @alias module:model/GithubComSatstreamSsUtilsDatabaseAddressDelta
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsDatabaseAddressDelta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsDatabaseAddressDelta} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsDatabaseAddressDelta} The populated <code>GithubComSatstreamSsUtilsDatabaseAddressDelta</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsDatabaseAddressDelta();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('block_height'))
        obj.blockHeight = ApiClient.convertToType(data['block_height'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
GithubComSatstreamSsUtilsDatabaseAddressDelta.prototype.address = undefined;

/**
 * @member {Number} amount
 */
GithubComSatstreamSsUtilsDatabaseAddressDelta.prototype.amount = undefined;

/**
 * @member {Number} blockHeight
 */
GithubComSatstreamSsUtilsDatabaseAddressDelta.prototype.blockHeight = undefined;
