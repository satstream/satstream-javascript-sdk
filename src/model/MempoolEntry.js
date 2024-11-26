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
 * The MempoolEntry model module.
 * @module model/MempoolEntry
 * @version 1.0.20
 */
export default class MempoolEntry {
  /**
   * Constructs a new <code>MempoolEntry</code>.
   * @alias module:model/MempoolEntry
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MempoolEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MempoolEntry} obj Optional instance to populate.
   * @return {module:model/MempoolEntry} The populated <code>MempoolEntry</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MempoolEntry();
      if (data.hasOwnProperty('ancestorcount'))
        obj.ancestorcount = ApiClient.convertToType(data['ancestorcount'], 'Number');
      if (data.hasOwnProperty('ancestorsize'))
        obj.ancestorsize = ApiClient.convertToType(data['ancestorsize'], 'Number');
      if (data.hasOwnProperty('bip125-replaceable'))
        obj.bip125Replaceable = ApiClient.convertToType(data['bip125-replaceable'], 'Boolean');
      if (data.hasOwnProperty('depends'))
        obj.depends = ApiClient.convertToType(data['depends'], ['String']);
      if (data.hasOwnProperty('descendantcount'))
        obj.descendantcount = ApiClient.convertToType(data['descendantcount'], 'Number');
      if (data.hasOwnProperty('descendantsize'))
        obj.descendantsize = ApiClient.convertToType(data['descendantsize'], 'Number');
      if (data.hasOwnProperty('fees'))
        obj.fees = ApiClient.convertToType(data['fees'], Object);
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('spentby'))
        obj.spentby = ApiClient.convertToType(data['spentby'], ['String']);
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
      if (data.hasOwnProperty('unbroadcast'))
        obj.unbroadcast = ApiClient.convertToType(data['unbroadcast'], 'Boolean');
      if (data.hasOwnProperty('vsize'))
        obj.vsize = ApiClient.convertToType(data['vsize'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('wtxid'))
        obj.wtxid = ApiClient.convertToType(data['wtxid'], 'String');
    }
    return obj;
  }
}

/**
 * Number of in-mempool ancestor transactions
 * @member {Number} ancestorcount
 */
MempoolEntry.prototype.ancestorcount = undefined;

/**
 * Virtual size of in-mempool ancestors
 * @member {Number} ancestorsize
 */
MempoolEntry.prototype.ancestorsize = undefined;

/**
 * Whether this transaction is replaceable
 * @member {Boolean} bip125Replaceable
 */
MempoolEntry.prototype.bip125Replaceable = undefined;

/**
 * Parent transaction IDs
 * @member {Array.<String>} depends
 */
MempoolEntry.prototype.depends = undefined;

/**
 * Number of in-mempool descendant transactions
 * @member {Number} descendantcount
 */
MempoolEntry.prototype.descendantcount = undefined;

/**
 * Virtual size of in-mempool descendants
 * @member {Number} descendantsize
 */
MempoolEntry.prototype.descendantsize = undefined;

/**
 * Fee information
 * @member {Object} fees
 */
MempoolEntry.prototype.fees = undefined;

/**
 * Block height when transaction entered pool
 * @member {Number} height
 */
MempoolEntry.prototype.height = undefined;

/**
 * Child transaction IDs
 * @member {Array.<String>} spentby
 */
MempoolEntry.prototype.spentby = undefined;

/**
 * Time transaction entered pool
 * @member {Number} time
 */
MempoolEntry.prototype.time = undefined;

/**
 * Whether this transaction is currently unbroadcast
 * @member {Boolean} unbroadcast
 */
MempoolEntry.prototype.unbroadcast = undefined;

/**
 * Virtual transaction size
 * @member {Number} vsize
 */
MempoolEntry.prototype.vsize = undefined;

/**
 * Transaction weight
 * @member {Number} weight
 */
MempoolEntry.prototype.weight = undefined;

/**
 * Hash of serialized transaction with witness data
 * @member {String} wtxid
 */
MempoolEntry.prototype.wtxid = undefined;

