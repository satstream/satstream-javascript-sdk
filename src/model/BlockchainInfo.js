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
 * The BlockchainInfo model module.
 * @module model/BlockchainInfo
 * @version 1.0.36
 */
export default class BlockchainInfo {
  /**
   * Constructs a new <code>BlockchainInfo</code>.
   * @alias module:model/BlockchainInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BlockchainInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlockchainInfo} obj Optional instance to populate.
   * @return {module:model/BlockchainInfo} The populated <code>BlockchainInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BlockchainInfo();
      if (data.hasOwnProperty('bestblockhash'))
        obj.bestblockhash = ApiClient.convertToType(data['bestblockhash'], 'String');
      if (data.hasOwnProperty('blocks'))
        obj.blocks = ApiClient.convertToType(data['blocks'], 'Number');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
      if (data.hasOwnProperty('chainwork'))
        obj.chainwork = ApiClient.convertToType(data['chainwork'], 'String');
      if (data.hasOwnProperty('difficulty'))
        obj.difficulty = ApiClient.convertToType(data['difficulty'], 'Number');
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], 'Number');
      if (data.hasOwnProperty('mediantime'))
        obj.mediantime = ApiClient.convertToType(data['mediantime'], 'Number');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
    }
    return obj;
  }
}

/**
 * The hash of the currently best block
 * @member {String} bestblockhash
 */
BlockchainInfo.prototype.bestblockhash = undefined;

/**
 * The height of the most-work fully-validated chain
 * @member {Number} blocks
 */
BlockchainInfo.prototype.blocks = undefined;

/**
 * Current network name (main, test, signet, regtest)
 * @member {String} chain
 */
BlockchainInfo.prototype.chain = undefined;

/**
 * Total amount of work in active chain, in hexadecimal
 * @member {String} chainwork
 */
BlockchainInfo.prototype.chainwork = undefined;

/**
 * The current difficulty
 * @member {Number} difficulty
 */
BlockchainInfo.prototype.difficulty = undefined;

/**
 * The current number of headers we have validated
 * @member {Number} headers
 */
BlockchainInfo.prototype.headers = undefined;

/**
 * The median block time expressed in UNIX epoch time
 * @member {Number} mediantime
 */
BlockchainInfo.prototype.mediantime = undefined;

/**
 * The block time expressed in UNIX epoch time
 * @member {Number} time
 */
BlockchainInfo.prototype.time = undefined;

