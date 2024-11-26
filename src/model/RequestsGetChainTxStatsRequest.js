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
 * The RequestsGetChainTxStatsRequest model module.
 * @module model/RequestsGetChainTxStatsRequest
 * @version 1.0.19
 */
export default class RequestsGetChainTxStatsRequest {
  /**
   * Constructs a new <code>RequestsGetChainTxStatsRequest</code>.
   * @alias module:model/RequestsGetChainTxStatsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsGetChainTxStatsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsGetChainTxStatsRequest} obj Optional instance to populate.
   * @return {module:model/RequestsGetChainTxStatsRequest} The populated <code>RequestsGetChainTxStatsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsGetChainTxStatsRequest();
      if (data.hasOwnProperty('blockhash'))
        obj.blockhash = ApiClient.convertToType(data['blockhash'], 'String');
      if (data.hasOwnProperty('nblocks'))
        obj.nblocks = ApiClient.convertToType(data['nblocks'], 'Number');
    }
    return obj;
  }
}

/**
 * Optional: The hash of the block that ends the window (default=chain tip)
 * @member {String} blockhash
 */
RequestsGetChainTxStatsRequest.prototype.blockhash = undefined;

/**
 * Optional: Size of the window in number of blocks (default=one month)
 * @member {Number} nblocks
 */
RequestsGetChainTxStatsRequest.prototype.nblocks = undefined;

