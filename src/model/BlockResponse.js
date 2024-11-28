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
import Transaction from './Transaction';

/**
 * The BlockResponse model module.
 * @module model/BlockResponse
 * @version 1.0.32
 */
export default class BlockResponse {
  /**
   * Constructs a new <code>BlockResponse</code>.
   * @alias module:model/BlockResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BlockResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlockResponse} obj Optional instance to populate.
   * @return {module:model/BlockResponse} The populated <code>BlockResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BlockResponse();
      if (data.hasOwnProperty('best_height'))
        obj.bestHeight = ApiClient.convertToType(data['best_height'], 'Number');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('inscriptions'))
        obj.inscriptions = ApiClient.convertToType(data['inscriptions'], ['String']);
      if (data.hasOwnProperty('runes'))
        obj.runes = ApiClient.convertToType(data['runes'], ['String']);
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [Transaction]);
    }
    return obj;
  }
}

/**
 * @member {Number} bestHeight
 */
BlockResponse.prototype.bestHeight = undefined;

/**
 * @member {String} hash
 */
BlockResponse.prototype.hash = undefined;

/**
 * @member {Number} height
 */
BlockResponse.prototype.height = undefined;

/**
 * @member {Array.<String>} inscriptions
 */
BlockResponse.prototype.inscriptions = undefined;

/**
 * @member {Array.<String>} runes
 */
BlockResponse.prototype.runes = undefined;

/**
 * @member {String} target
 */
BlockResponse.prototype.target = undefined;

/**
 * @member {Array.<module:model/Transaction>} transactions
 */
BlockResponse.prototype.transactions = undefined;
