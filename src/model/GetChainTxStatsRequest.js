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
 * The GetChainTxStatsRequest model module.
 * @module model/GetChainTxStatsRequest
 * @version 1.0.32
 */
export default class GetChainTxStatsRequest {
  /**
   * Constructs a new <code>GetChainTxStatsRequest</code>.
   * @alias module:model/GetChainTxStatsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetChainTxStatsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetChainTxStatsRequest} obj Optional instance to populate.
   * @return {module:model/GetChainTxStatsRequest} The populated <code>GetChainTxStatsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetChainTxStatsRequest();
      if (data.hasOwnProperty('blockhash'))
        obj.blockhash = ApiClient.convertToType(data['blockhash'], 'String');
      if (data.hasOwnProperty('nblocks'))
        obj.nblocks = ApiClient.convertToType(data['nblocks'], 'Number');
    }
    return obj;
  }
}

/**
 * Optional: The hash of the block that ends the window
 * @member {String} blockhash
 */
GetChainTxStatsRequest.prototype.blockhash = undefined;

/**
 * Optional: Size of the window in number of blocks
 * @member {Number} nblocks
 */
GetChainTxStatsRequest.prototype.nblocks = undefined;

