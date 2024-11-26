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
 * The RequestsTestMempoolAcceptRequest model module.
 * @module model/RequestsTestMempoolAcceptRequest
 * @version 1.0.21
 */
export default class RequestsTestMempoolAcceptRequest {
  /**
   * Constructs a new <code>RequestsTestMempoolAcceptRequest</code>.
   * @alias module:model/RequestsTestMempoolAcceptRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsTestMempoolAcceptRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsTestMempoolAcceptRequest} obj Optional instance to populate.
   * @return {module:model/RequestsTestMempoolAcceptRequest} The populated <code>RequestsTestMempoolAcceptRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsTestMempoolAcceptRequest();
      if (data.hasOwnProperty('max_fee_rate'))
        obj.maxFeeRate = ApiClient.convertToType(data['max_fee_rate'], 'Number');
      if (data.hasOwnProperty('raw_txs'))
        obj.rawTxs = ApiClient.convertToType(data['raw_txs'], ['String']);
    }
    return obj;
  }
}

/**
 * Optional: Reject transactions whose fee rate is higher than this value (BTC/kvB)
 * @member {Number} maxFeeRate
 */
RequestsTestMempoolAcceptRequest.prototype.maxFeeRate = undefined;

/**
 * Array of hex-encoded raw transactions
 * @member {Array.<String>} rawTxs
 */
RequestsTestMempoolAcceptRequest.prototype.rawTxs = undefined;

