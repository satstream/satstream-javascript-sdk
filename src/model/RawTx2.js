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
import TxVin2 from './TxVin2';
import Vout from './Vout';

/**
 * The RawTx2 model module.
 * @module model/RawTx2
 * @version 1.0.21
 */
export default class RawTx2 {
  /**
   * Constructs a new <code>RawTx2</code>.
   * @alias module:model/RawTx2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RawTx2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RawTx2} obj Optional instance to populate.
   * @return {module:model/RawTx2} The populated <code>RawTx2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RawTx2();
      if (data.hasOwnProperty('blockhash'))
        obj.blockhash = ApiClient.convertToType(data['blockhash'], 'String');
      if (data.hasOwnProperty('blocktime'))
        obj.blocktime = ApiClient.convertToType(data['blocktime'], 'Number');
      if (data.hasOwnProperty('confirmations'))
        obj.confirmations = ApiClient.convertToType(data['confirmations'], 'Number');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
      if (data.hasOwnProperty('locktime'))
        obj.locktime = ApiClient.convertToType(data['locktime'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('vin'))
        obj.vin = ApiClient.convertToType(data['vin'], [TxVin2]);
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], [Vout]);
      if (data.hasOwnProperty('vsize'))
        obj.vsize = ApiClient.convertToType(data['vsize'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} blockhash
 */
RawTx2.prototype.blockhash = undefined;

/**
 * @member {Number} blocktime
 */
RawTx2.prototype.blocktime = undefined;

/**
 * @member {Number} confirmations
 */
RawTx2.prototype.confirmations = undefined;

/**
 * @member {String} hash
 */
RawTx2.prototype.hash = undefined;

/**
 * @member {String} hex
 */
RawTx2.prototype.hex = undefined;

/**
 * @member {Number} locktime
 */
RawTx2.prototype.locktime = undefined;

/**
 * @member {Number} size
 */
RawTx2.prototype.size = undefined;

/**
 * @member {Number} time
 */
RawTx2.prototype.time = undefined;

/**
 * @member {String} txid
 */
RawTx2.prototype.txid = undefined;

/**
 * @member {Number} version
 */
RawTx2.prototype.version = undefined;

/**
 * @member {Array.<module:model/TxVin2>} vin
 */
RawTx2.prototype.vin = undefined;

/**
 * @member {Array.<module:model/Vout>} vout
 */
RawTx2.prototype.vout = undefined;

/**
 * @member {Number} vsize
 */
RawTx2.prototype.vsize = undefined;

/**
 * @member {Number} weight
 */
RawTx2.prototype.weight = undefined;

