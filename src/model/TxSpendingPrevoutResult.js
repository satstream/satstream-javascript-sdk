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
 * The TxSpendingPrevoutResult model module.
 * @module model/TxSpendingPrevoutResult
 * @version 1.0.32
 */
export default class TxSpendingPrevoutResult {
  /**
   * Constructs a new <code>TxSpendingPrevoutResult</code>.
   * @alias module:model/TxSpendingPrevoutResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TxSpendingPrevoutResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TxSpendingPrevoutResult} obj Optional instance to populate.
   * @return {module:model/TxSpendingPrevoutResult} The populated <code>TxSpendingPrevoutResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TxSpendingPrevoutResult();
      if (data.hasOwnProperty('spendingtxid'))
        obj.spendingtxid = ApiClient.convertToType(data['spendingtxid'], 'String');
      if (data.hasOwnProperty('spent'))
        obj.spent = ApiClient.convertToType(data['spent'], 'Boolean');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * The transaction id of the mempool transaction spending this output
 * @member {String} spendingtxid
 */
TxSpendingPrevoutResult.prototype.spendingtxid = undefined;

/**
 * Whether the output is spent
 * @member {Boolean} spent
 */
TxSpendingPrevoutResult.prototype.spent = undefined;

/**
 * The transaction id of the checked output
 * @member {String} txid
 */
TxSpendingPrevoutResult.prototype.txid = undefined;

/**
 * The vout value of the checked output
 * @member {Number} vout
 */
TxSpendingPrevoutResult.prototype.vout = undefined;

