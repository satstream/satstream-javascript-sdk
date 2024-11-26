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
import TxSpendingPrevoutInput from './TxSpendingPrevoutInput';

/**
 * The RequestsGetTxSpendingPrevoutRequest model module.
 * @module model/RequestsGetTxSpendingPrevoutRequest
 * @version 1.0.22
 */
export default class RequestsGetTxSpendingPrevoutRequest {
  /**
   * Constructs a new <code>RequestsGetTxSpendingPrevoutRequest</code>.
   * @alias module:model/RequestsGetTxSpendingPrevoutRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsGetTxSpendingPrevoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsGetTxSpendingPrevoutRequest} obj Optional instance to populate.
   * @return {module:model/RequestsGetTxSpendingPrevoutRequest} The populated <code>RequestsGetTxSpendingPrevoutRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsGetTxSpendingPrevoutRequest();
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
RequestsGetTxSpendingPrevoutRequest.prototype.outputs = undefined;

