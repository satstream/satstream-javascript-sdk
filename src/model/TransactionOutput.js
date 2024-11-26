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
 * The TransactionOutput model module.
 * @module model/TransactionOutput
 * @version 1.0.23
 */
export default class TransactionOutput {
  /**
   * Constructs a new <code>TransactionOutput</code>.
   * @alias module:model/TransactionOutput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionOutput} obj Optional instance to populate.
   * @return {module:model/TransactionOutput} The populated <code>TransactionOutput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionOutput();
      if (data.hasOwnProperty('script_pubkey'))
        obj.scriptPubkey = ApiClient.convertToType(data['script_pubkey'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} scriptPubkey
 */
TransactionOutput.prototype.scriptPubkey = undefined;

/**
 * @member {Number} value
 */
TransactionOutput.prototype.value = undefined;

