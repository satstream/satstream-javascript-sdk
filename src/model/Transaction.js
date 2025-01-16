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
import Input from './Input';
import Output from './Output';

/**
 * The Transaction model module.
 * @module model/Transaction
 * @version 1.0.38
 */
export default class Transaction {
  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Transaction();
      if (data.hasOwnProperty('input'))
        obj.input = ApiClient.convertToType(data['input'], [Input]);
      if (data.hasOwnProperty('lock_time'))
        obj.lockTime = ApiClient.convertToType(data['lock_time'], 'Number');
      if (data.hasOwnProperty('output'))
        obj.output = ApiClient.convertToType(data['output'], [Output]);
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Input>} input
 */
Transaction.prototype.input = undefined;

/**
 * @member {Number} lockTime
 */
Transaction.prototype.lockTime = undefined;

/**
 * @member {Array.<module:model/Output>} output
 */
Transaction.prototype.output = undefined;

/**
 * @member {Number} version
 */
Transaction.prototype.version = undefined;

