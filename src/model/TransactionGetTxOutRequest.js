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
 * The TransactionGetTxOutRequest model module.
 * @module model/TransactionGetTxOutRequest
 * @version 1.0.45
 */
export default class TransactionGetTxOutRequest {
  /**
   * Constructs a new <code>TransactionGetTxOutRequest</code>.
   * @alias module:model/TransactionGetTxOutRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionGetTxOutRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionGetTxOutRequest} obj Optional instance to populate.
   * @return {module:model/TransactionGetTxOutRequest} The populated <code>TransactionGetTxOutRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionGetTxOutRequest();
      if (data.hasOwnProperty('include_mempool'))
        obj.includeMempool = ApiClient.convertToType(data['include_mempool'], 'Boolean');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * Optional: Whether to include the mempool (default=true)
 * @member {Boolean} includeMempool
 */
TransactionGetTxOutRequest.prototype.includeMempool = undefined;

/**
 * Required: The transaction id
 * @member {String} txid
 */
TransactionGetTxOutRequest.prototype.txid = undefined;

/**
 * Required: vout number
 * @member {Number} vout
 */
TransactionGetTxOutRequest.prototype.vout = undefined;

