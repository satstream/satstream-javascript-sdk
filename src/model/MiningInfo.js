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
 * The MiningInfo model module.
 * @module model/MiningInfo
 * @version 1.0.22
 */
export default class MiningInfo {
  /**
   * Constructs a new <code>MiningInfo</code>.
   * @alias module:model/MiningInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MiningInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MiningInfo} obj Optional instance to populate.
   * @return {module:model/MiningInfo} The populated <code>MiningInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MiningInfo();
      if (data.hasOwnProperty('blocks'))
        obj.blocks = ApiClient.convertToType(data['blocks'], 'Number');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
      if (data.hasOwnProperty('currentblocktx'))
        obj.currentblocktx = ApiClient.convertToType(data['currentblocktx'], 'Number');
      if (data.hasOwnProperty('currentblockweight'))
        obj.currentblockweight = ApiClient.convertToType(data['currentblockweight'], 'Number');
      if (data.hasOwnProperty('difficulty'))
        obj.difficulty = ApiClient.convertToType(data['difficulty'], 'Number');
      if (data.hasOwnProperty('networkhashps'))
        obj.networkhashps = ApiClient.convertToType(data['networkhashps'], 'Number');
      if (data.hasOwnProperty('pooledtx'))
        obj.pooledtx = ApiClient.convertToType(data['pooledtx'], 'Number');
      if (data.hasOwnProperty('warnings'))
        obj.warnings = ApiClient.convertToType(data['warnings'], 'String');
    }
    return obj;
  }
}

/**
 * The current block
 * @member {Number} blocks
 */
MiningInfo.prototype.blocks = undefined;

/**
 * Current network name
 * @member {String} chain
 */
MiningInfo.prototype.chain = undefined;

/**
 * The number of block transactions of the last assembled block
 * @member {Number} currentblocktx
 */
MiningInfo.prototype.currentblocktx = undefined;

/**
 * The block weight of the last assembled block
 * @member {Number} currentblockweight
 */
MiningInfo.prototype.currentblockweight = undefined;

/**
 * The current difficulty
 * @member {Number} difficulty
 */
MiningInfo.prototype.difficulty = undefined;

/**
 * The network hashes per second
 * @member {Number} networkhashps
 */
MiningInfo.prototype.networkhashps = undefined;

/**
 * The size of the mempool
 * @member {Number} pooledtx
 */
MiningInfo.prototype.pooledtx = undefined;

/**
 * Any network and blockchain warnings
 * @member {String} warnings
 */
MiningInfo.prototype.warnings = undefined;

