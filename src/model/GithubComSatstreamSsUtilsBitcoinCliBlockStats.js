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
 * The GithubComSatstreamSsUtilsBitcoinCliBlockStats model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliBlockStats
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliBlockStats {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliBlockStats</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliBlockStats
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliBlockStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliBlockStats} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliBlockStats} The populated <code>GithubComSatstreamSsUtilsBitcoinCliBlockStats</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliBlockStats();
      if (data.hasOwnProperty('avgfee'))
        obj.avgfee = ApiClient.convertToType(data['avgfee'], 'Number');
      if (data.hasOwnProperty('avgfeerate'))
        obj.avgfeerate = ApiClient.convertToType(data['avgfeerate'], 'Number');
      if (data.hasOwnProperty('avgtxsize'))
        obj.avgtxsize = ApiClient.convertToType(data['avgtxsize'], 'Number');
      if (data.hasOwnProperty('blockhash'))
        obj.blockhash = ApiClient.convertToType(data['blockhash'], 'String');
      if (data.hasOwnProperty('feerate_percentiles'))
        obj.feeratePercentiles = ApiClient.convertToType(data['feerate_percentiles'], ['Number']);
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('ins'))
        obj.ins = ApiClient.convertToType(data['ins'], 'Number');
      if (data.hasOwnProperty('maxfee'))
        obj.maxfee = ApiClient.convertToType(data['maxfee'], 'Number');
      if (data.hasOwnProperty('maxfeerate'))
        obj.maxfeerate = ApiClient.convertToType(data['maxfeerate'], 'Number');
      if (data.hasOwnProperty('maxtxsize'))
        obj.maxtxsize = ApiClient.convertToType(data['maxtxsize'], 'Number');
      if (data.hasOwnProperty('medianfee'))
        obj.medianfee = ApiClient.convertToType(data['medianfee'], 'Number');
      if (data.hasOwnProperty('mediantime'))
        obj.mediantime = ApiClient.convertToType(data['mediantime'], 'Number');
      if (data.hasOwnProperty('mediantxsize'))
        obj.mediantxsize = ApiClient.convertToType(data['mediantxsize'], 'Number');
      if (data.hasOwnProperty('minfee'))
        obj.minfee = ApiClient.convertToType(data['minfee'], 'Number');
      if (data.hasOwnProperty('minfeerate'))
        obj.minfeerate = ApiClient.convertToType(data['minfeerate'], 'Number');
      if (data.hasOwnProperty('mintxsize'))
        obj.mintxsize = ApiClient.convertToType(data['mintxsize'], 'Number');
      if (data.hasOwnProperty('outs'))
        obj.outs = ApiClient.convertToType(data['outs'], 'Number');
      if (data.hasOwnProperty('subsidy'))
        obj.subsidy = ApiClient.convertToType(data['subsidy'], 'Number');
      if (data.hasOwnProperty('swtotal_size'))
        obj.swtotalSize = ApiClient.convertToType(data['swtotal_size'], 'Number');
      if (data.hasOwnProperty('swtotal_weight'))
        obj.swtotalWeight = ApiClient.convertToType(data['swtotal_weight'], 'Number');
      if (data.hasOwnProperty('swtxs'))
        obj.swtxs = ApiClient.convertToType(data['swtxs'], 'Number');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
      if (data.hasOwnProperty('total_out'))
        obj.totalOut = ApiClient.convertToType(data['total_out'], 'Number');
      if (data.hasOwnProperty('total_size'))
        obj.totalSize = ApiClient.convertToType(data['total_size'], 'Number');
      if (data.hasOwnProperty('total_weight'))
        obj.totalWeight = ApiClient.convertToType(data['total_weight'], 'Number');
      if (data.hasOwnProperty('totalfee'))
        obj.totalfee = ApiClient.convertToType(data['totalfee'], 'Number');
      if (data.hasOwnProperty('txs'))
        obj.txs = ApiClient.convertToType(data['txs'], 'Number');
      if (data.hasOwnProperty('utxo_increase'))
        obj.utxoIncrease = ApiClient.convertToType(data['utxo_increase'], 'Number');
      if (data.hasOwnProperty('utxo_size_inc'))
        obj.utxoSizeInc = ApiClient.convertToType(data['utxo_size_inc'], 'Number');
    }
    return obj;
  }
}

/**
 * Average fee in the block
 * @member {Number} avgfee
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.avgfee = undefined;

/**
 * Average feerate (in satoshis per virtual byte)
 * @member {Number} avgfeerate
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.avgfeerate = undefined;

/**
 * Average transaction size
 * @member {Number} avgtxsize
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.avgtxsize = undefined;

/**
 * The block hash (to check for potential reorgs)
 * @member {String} blockhash
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.blockhash = undefined;

/**
 * Feerates at the 10th, 25th, 50th, 75th, and 90th percentile
 * @member {Array.<Number>} feeratePercentiles
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.feeratePercentiles = undefined;

/**
 * The height of the block
 * @member {Number} height
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.height = undefined;

/**
 * The number of inputs (excluding coinbase)
 * @member {Number} ins
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.ins = undefined;

/**
 * Maximum fee in the block
 * @member {Number} maxfee
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.maxfee = undefined;

/**
 * Maximum feerate (in satoshis per virtual byte)
 * @member {Number} maxfeerate
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.maxfeerate = undefined;

/**
 * Maximum transaction size
 * @member {Number} maxtxsize
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.maxtxsize = undefined;

/**
 * Truncated median fee in the block
 * @member {Number} medianfee
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.medianfee = undefined;

/**
 * The block median time past
 * @member {Number} mediantime
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.mediantime = undefined;

/**
 * Truncated median transaction size
 * @member {Number} mediantxsize
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.mediantxsize = undefined;

/**
 * Minimum fee in the block
 * @member {Number} minfee
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.minfee = undefined;

/**
 * Minimum feerate (in satoshis per virtual byte)
 * @member {Number} minfeerate
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.minfeerate = undefined;

/**
 * Minimum transaction size
 * @member {Number} mintxsize
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.mintxsize = undefined;

/**
 * The number of outputs
 * @member {Number} outs
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.outs = undefined;

/**
 * The block subsidy
 * @member {Number} subsidy
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.subsidy = undefined;

/**
 * Total size of all segwit transactions
 * @member {Number} swtotalSize
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.swtotalSize = undefined;

/**
 * Total weight of all segwit transactions
 * @member {Number} swtotalWeight
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.swtotalWeight = undefined;

/**
 * The number of segwit transactions
 * @member {Number} swtxs
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.swtxs = undefined;

/**
 * The block time
 * @member {Number} time
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.time = undefined;

/**
 * Total amount in all outputs
 * @member {Number} totalOut
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.totalOut = undefined;

/**
 * Total size of all non-coinbase transactions
 * @member {Number} totalSize
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.totalSize = undefined;

/**
 * Total weight of all non-coinbase transactions
 * @member {Number} totalWeight
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.totalWeight = undefined;

/**
 * The fee total
 * @member {Number} totalfee
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.totalfee = undefined;

/**
 * The number of transactions (excluding coinbase)
 * @member {Number} txs
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.txs = undefined;

/**
 * The increase/decrease in the number of unspent outputs
 * @member {Number} utxoIncrease
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.utxoIncrease = undefined;

/**
 * The increase/decrease in size for the utxo index
 * @member {Number} utxoSizeInc
 */
GithubComSatstreamSsUtilsBitcoinCliBlockStats.prototype.utxoSizeInc = undefined;

