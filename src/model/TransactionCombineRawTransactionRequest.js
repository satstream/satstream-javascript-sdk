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

/**
 * The TransactionCombineRawTransactionRequest model module.
 * @module model/TransactionCombineRawTransactionRequest
 * @version 1.0.44
 */
export default class TransactionCombineRawTransactionRequest {
  /**
   * Constructs a new <code>TransactionCombineRawTransactionRequest</code>.
   * @alias module:model/TransactionCombineRawTransactionRequest
   * @class
   * @param hexstrings {Array.<String>} 
   */
  constructor(hexstrings) {
    this.hexstrings = hexstrings;
  }

  /**
   * Constructs a <code>TransactionCombineRawTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionCombineRawTransactionRequest} obj Optional instance to populate.
   * @return {module:model/TransactionCombineRawTransactionRequest} The populated <code>TransactionCombineRawTransactionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionCombineRawTransactionRequest();
      if (data.hasOwnProperty('hexstrings'))
        obj.hexstrings = ApiClient.convertToType(data['hexstrings'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} hexstrings
 */
TransactionCombineRawTransactionRequest.prototype.hexstrings = undefined;

