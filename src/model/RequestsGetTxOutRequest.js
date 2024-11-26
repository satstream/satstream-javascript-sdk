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
 * The RequestsGetTxOutRequest model module.
 * @module model/RequestsGetTxOutRequest
 * @version 1.0.19
 */
export default class RequestsGetTxOutRequest {
  /**
   * Constructs a new <code>RequestsGetTxOutRequest</code>.
   * @alias module:model/RequestsGetTxOutRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsGetTxOutRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsGetTxOutRequest} obj Optional instance to populate.
   * @return {module:model/RequestsGetTxOutRequest} The populated <code>RequestsGetTxOutRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsGetTxOutRequest();
      if (data.hasOwnProperty('include_mempool'))
        obj.includeMempool = ApiClient.convertToType(data['include_mempool'], 'Boolean');
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
    }
    return obj;
  }
}

/**
 * Optional: Whether to include the mempool (default=true)
 * @member {Boolean} includeMempool
 */
RequestsGetTxOutRequest.prototype.includeMempool = undefined;

/**
 * Required: vout number
 * @member {Number} n
 */
RequestsGetTxOutRequest.prototype.n = undefined;

/**
 * Required: The transaction id
 * @member {String} txid
 */
RequestsGetTxOutRequest.prototype.txid = undefined;

