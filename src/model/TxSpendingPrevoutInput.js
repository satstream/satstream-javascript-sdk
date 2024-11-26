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
 * The TxSpendingPrevoutInput model module.
 * @module model/TxSpendingPrevoutInput
 * @version 1.0.23
 */
export default class TxSpendingPrevoutInput {
  /**
   * Constructs a new <code>TxSpendingPrevoutInput</code>.
   * @alias module:model/TxSpendingPrevoutInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TxSpendingPrevoutInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TxSpendingPrevoutInput} obj Optional instance to populate.
   * @return {module:model/TxSpendingPrevoutInput} The populated <code>TxSpendingPrevoutInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TxSpendingPrevoutInput();
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * The transaction id
 * @member {String} txid
 */
TxSpendingPrevoutInput.prototype.txid = undefined;

/**
 * The output number
 * @member {Number} vout
 */
TxSpendingPrevoutInput.prototype.vout = undefined;

