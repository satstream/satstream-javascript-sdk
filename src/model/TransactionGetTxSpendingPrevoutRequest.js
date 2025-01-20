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
import TxSpendingPrevoutInput from './TxSpendingPrevoutInput';

/**
 * The TransactionGetTxSpendingPrevoutRequest model module.
 * @module model/TransactionGetTxSpendingPrevoutRequest
 * @version 1.0.44
 */
export default class TransactionGetTxSpendingPrevoutRequest {
  /**
   * Constructs a new <code>TransactionGetTxSpendingPrevoutRequest</code>.
   * @alias module:model/TransactionGetTxSpendingPrevoutRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionGetTxSpendingPrevoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionGetTxSpendingPrevoutRequest} obj Optional instance to populate.
   * @return {module:model/TransactionGetTxSpendingPrevoutRequest} The populated <code>TransactionGetTxSpendingPrevoutRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionGetTxSpendingPrevoutRequest();
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], [TxSpendingPrevoutInput]);
    }
    return obj;
  }
}

/**
 * The transaction outputs to check
 * @member {Array.<module:model/TxSpendingPrevoutInput>} outputs
 */
TransactionGetTxSpendingPrevoutRequest.prototype.outputs = undefined;

