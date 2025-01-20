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
 * The MempoolInfo model module.
 * @module model/MempoolInfo
 * @version 1.0.45
 */
export default class MempoolInfo {
  /**
   * Constructs a new <code>MempoolInfo</code>.
   * @alias module:model/MempoolInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MempoolInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MempoolInfo} obj Optional instance to populate.
   * @return {module:model/MempoolInfo} The populated <code>MempoolInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MempoolInfo();
      if (data.hasOwnProperty('bytes'))
        obj.bytes = ApiClient.convertToType(data['bytes'], 'Number');
      if (data.hasOwnProperty('fullrbf'))
        obj.fullrbf = ApiClient.convertToType(data['fullrbf'], 'Boolean');
      if (data.hasOwnProperty('incrementalrelayfee'))
        obj.incrementalrelayfee = ApiClient.convertToType(data['incrementalrelayfee'], 'Number');
      if (data.hasOwnProperty('loaded'))
        obj.loaded = ApiClient.convertToType(data['loaded'], 'Boolean');
      if (data.hasOwnProperty('maxmempool'))
        obj.maxmempool = ApiClient.convertToType(data['maxmempool'], 'Number');
      if (data.hasOwnProperty('mempoolminfee'))
        obj.mempoolminfee = ApiClient.convertToType(data['mempoolminfee'], 'Number');
      if (data.hasOwnProperty('minrelaytxfee'))
        obj.minrelaytxfee = ApiClient.convertToType(data['minrelaytxfee'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('total_fee'))
        obj.totalFee = ApiClient.convertToType(data['total_fee'], 'Number');
      if (data.hasOwnProperty('unbroadcastcount'))
        obj.unbroadcastcount = ApiClient.convertToType(data['unbroadcastcount'], 'Number');
      if (data.hasOwnProperty('usage'))
        obj.usage = ApiClient.convertToType(data['usage'], 'Number');
    }
    return obj;
  }
}

/**
 * Sum of all virtual transaction sizes
 * @member {Number} bytes
 */
MempoolInfo.prototype.bytes = undefined;

/**
 * True if mempool accepts RBF without signaling inspection
 * @member {Boolean} fullrbf
 */
MempoolInfo.prototype.fullrbf = undefined;

/**
 * Minimum fee rate increment for mempool limiting
 * @member {Number} incrementalrelayfee
 */
MempoolInfo.prototype.incrementalrelayfee = undefined;

/**
 * True if the mempool is fully loaded
 * @member {Boolean} loaded
 */
MempoolInfo.prototype.loaded = undefined;

/**
 * Maximum memory usage for the mempool
 * @member {Number} maxmempool
 */
MempoolInfo.prototype.maxmempool = undefined;

/**
 * Minimum fee rate in BTC/kvB for tx to be accepted
 * @member {Number} mempoolminfee
 */
MempoolInfo.prototype.mempoolminfee = undefined;

/**
 * Current minimum relay fee for transactions
 * @member {Number} minrelaytxfee
 */
MempoolInfo.prototype.minrelaytxfee = undefined;

/**
 * Current tx count
 * @member {Number} size
 */
MempoolInfo.prototype.size = undefined;

/**
 * Total fees for the mempool in BTC
 * @member {Number} totalFee
 */
MempoolInfo.prototype.totalFee = undefined;

/**
 * Number of unbroadcast transactions
 * @member {Number} unbroadcastcount
 */
MempoolInfo.prototype.unbroadcastcount = undefined;

/**
 * Total memory usage for the mempool
 * @member {Number} usage
 */
MempoolInfo.prototype.usage = undefined;

