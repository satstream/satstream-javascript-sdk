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
import BlockVin2 from './BlockVin2';
import Vout from './Vout';

/**
 * The BtcTx2 model module.
 * @module model/BtcTx2
 * @version 1.0.39
 */
export default class BtcTx2 {
  /**
   * Constructs a new <code>BtcTx2</code>.
   * @alias module:model/BtcTx2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BtcTx2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BtcTx2} obj Optional instance to populate.
   * @return {module:model/BtcTx2} The populated <code>BtcTx2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BtcTx2();
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
      if (data.hasOwnProperty('locktime'))
        obj.locktime = ApiClient.convertToType(data['locktime'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('vin'))
        obj.vin = ApiClient.convertToType(data['vin'], [BlockVin2]);
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
 * @member {Number} fee
 */
BtcTx2.prototype.fee = undefined;

/**
 * @member {String} hash
 */
BtcTx2.prototype.hash = undefined;

/**
 * @member {String} hex
 */
BtcTx2.prototype.hex = undefined;

/**
 * @member {Number} locktime
 */
BtcTx2.prototype.locktime = undefined;

/**
 * @member {Number} size
 */
BtcTx2.prototype.size = undefined;

/**
 * @member {String} txid
 */
BtcTx2.prototype.txid = undefined;

/**
 * @member {Number} version
 */
BtcTx2.prototype.version = undefined;

/**
 * @member {Array.<module:model/BlockVin2>} vin
 */
BtcTx2.prototype.vin = undefined;

/**
 * @member {Array.<module:model/Vout>} vout
 */
BtcTx2.prototype.vout = undefined;

/**
 * @member {Number} vsize
 */
BtcTx2.prototype.vsize = undefined;

/**
 * @member {Number} weight
 */
BtcTx2.prototype.weight = undefined;

