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
 * The UTXOSetInfo model module.
 * @module model/UTXOSetInfo
 * @version 1.0.44
 */
export default class UTXOSetInfo {
  /**
   * Constructs a new <code>UTXOSetInfo</code>.
   * @alias module:model/UTXOSetInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UTXOSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UTXOSetInfo} obj Optional instance to populate.
   * @return {module:model/UTXOSetInfo} The populated <code>UTXOSetInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UTXOSetInfo();
      if (data.hasOwnProperty('bestblock'))
        obj.bestblock = ApiClient.convertToType(data['bestblock'], 'String');
      if (data.hasOwnProperty('block_info'))
        obj.blockInfo = ApiClient.convertToType(data['block_info'], Object);
      if (data.hasOwnProperty('bogosize'))
        obj.bogosize = ApiClient.convertToType(data['bogosize'], 'Number');
      if (data.hasOwnProperty('disk_size'))
        obj.diskSize = ApiClient.convertToType(data['disk_size'], 'Number');
      if (data.hasOwnProperty('hash_serialized_2'))
        obj.hashSerialized2 = ApiClient.convertToType(data['hash_serialized_2'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('muhash'))
        obj.muhash = ApiClient.convertToType(data['muhash'], 'String');
      if (data.hasOwnProperty('total_amount'))
        obj.totalAmount = ApiClient.convertToType(data['total_amount'], 'Number');
      if (data.hasOwnProperty('total_unspendable_amount'))
        obj.totalUnspendableAmount = ApiClient.convertToType(data['total_unspendable_amount'], 'Number');
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], 'Number');
      if (data.hasOwnProperty('txouts'))
        obj.txouts = ApiClient.convertToType(data['txouts'], 'Number');
    }
    return obj;
  }
}

/**
 * The hash of the block at which these statistics are calculated
 * @member {String} bestblock
 */
UTXOSetInfo.prototype.bestblock = undefined;

/**
 * Info on amounts in the block at this height
 * @member {Object} blockInfo
 */
UTXOSetInfo.prototype.blockInfo = undefined;

/**
 * Database-independent metric indicating the UTXO set size
 * @member {Number} bogosize
 */
UTXOSetInfo.prototype.bogosize = undefined;

/**
 * The estimated size of the chainstate on disk
 * @member {Number} diskSize
 */
UTXOSetInfo.prototype.diskSize = undefined;

/**
 * The serialized hash (only for hash_serialized_2)
 * @member {String} hashSerialized2
 */
UTXOSetInfo.prototype.hashSerialized2 = undefined;

/**
 * The block height of the returned statistics
 * @member {Number} height
 */
UTXOSetInfo.prototype.height = undefined;

/**
 * The serialized hash (only for muhash)
 * @member {String} muhash
 */
UTXOSetInfo.prototype.muhash = undefined;

/**
 * The total amount of coins in the UTXO set
 * @member {Number} totalAmount
 */
UTXOSetInfo.prototype.totalAmount = undefined;

/**
 * Total amount permanently excluded from UTXO set
 * @member {Number} totalUnspendableAmount
 */
UTXOSetInfo.prototype.totalUnspendableAmount = undefined;

/**
 * The number of transactions with unspent outputs
 * @member {Number} transactions
 */
UTXOSetInfo.prototype.transactions = undefined;

/**
 * The number of unspent transaction outputs
 * @member {Number} txouts
 */
UTXOSetInfo.prototype.txouts = undefined;

