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
 * The ChainTxStats model module.
 * @module model/ChainTxStats
 * @version 1.0.22
 */
export default class ChainTxStats {
  /**
   * Constructs a new <code>ChainTxStats</code>.
   * @alias module:model/ChainTxStats
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChainTxStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChainTxStats} obj Optional instance to populate.
   * @return {module:model/ChainTxStats} The populated <code>ChainTxStats</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChainTxStats();
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
      if (data.hasOwnProperty('txcount'))
        obj.txcount = ApiClient.convertToType(data['txcount'], 'Number');
      if (data.hasOwnProperty('txrate'))
        obj.txrate = ApiClient.convertToType(data['txrate'], 'Number');
      if (data.hasOwnProperty('window_block_count'))
        obj.windowBlockCount = ApiClient.convertToType(data['window_block_count'], 'Number');
      if (data.hasOwnProperty('window_final_block_hash'))
        obj.windowFinalBlockHash = ApiClient.convertToType(data['window_final_block_hash'], 'String');
      if (data.hasOwnProperty('window_final_block_height'))
        obj.windowFinalBlockHeight = ApiClient.convertToType(data['window_final_block_height'], 'Number');
      if (data.hasOwnProperty('window_interval'))
        obj.windowInterval = ApiClient.convertToType(data['window_interval'], 'Number');
      if (data.hasOwnProperty('window_tx_count'))
        obj.windowTxCount = ApiClient.convertToType(data['window_tx_count'], 'Number');
    }
    return obj;
  }
}

/**
 * The timestamp for the final block in the window
 * @member {Number} time
 */
ChainTxStats.prototype.time = undefined;

/**
 * The total number of transactions in the chain
 * @member {Number} txcount
 */
ChainTxStats.prototype.txcount = undefined;

/**
 * The average rate of transactions per second
 * @member {Number} txrate
 */
ChainTxStats.prototype.txrate = undefined;

/**
 * Size of the window in number of blocks
 * @member {Number} windowBlockCount
 */
ChainTxStats.prototype.windowBlockCount = undefined;

/**
 * The hash of the final block in the window
 * @member {String} windowFinalBlockHash
 */
ChainTxStats.prototype.windowFinalBlockHash = undefined;

/**
 * The height of the final block in the window
 * @member {Number} windowFinalBlockHeight
 */
ChainTxStats.prototype.windowFinalBlockHeight = undefined;

/**
 * The elapsed time in the window in seconds
 * @member {Number} windowInterval
 */
ChainTxStats.prototype.windowInterval = undefined;

/**
 * The number of transactions in the window
 * @member {Number} windowTxCount
 */
ChainTxStats.prototype.windowTxCount = undefined;

