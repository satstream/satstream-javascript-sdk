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
import GithubComSatstreamSsUtilsBitcoinCliBlockVin3 from './GithubComSatstreamSsUtilsBitcoinCliBlockVin3';
import GithubComSatstreamSsUtilsBitcoinCliVout from './GithubComSatstreamSsUtilsBitcoinCliVout';

/**
 * The GithubComSatstreamSsUtilsBitcoinCliBtcTx3 model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliBtcTx3
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliBtcTx3 {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliBtcTx3</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliBtcTx3
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliBtcTx3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliBtcTx3} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliBtcTx3} The populated <code>GithubComSatstreamSsUtilsBitcoinCliBtcTx3</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliBtcTx3();
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
        obj.vin = ApiClient.convertToType(data['vin'], [GithubComSatstreamSsUtilsBitcoinCliBlockVin3]);
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], [GithubComSatstreamSsUtilsBitcoinCliVout]);
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
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.fee = undefined;

/**
 * @member {String} hash
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.hash = undefined;

/**
 * @member {String} hex
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.hex = undefined;

/**
 * @member {Number} locktime
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.locktime = undefined;

/**
 * @member {Number} size
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.size = undefined;

/**
 * @member {String} txid
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.txid = undefined;

/**
 * @member {Number} version
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.version = undefined;

/**
 * @member {Array.<module:model/GithubComSatstreamSsUtilsBitcoinCliBlockVin3>} vin
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.vin = undefined;

/**
 * @member {Array.<module:model/GithubComSatstreamSsUtilsBitcoinCliVout>} vout
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.vout = undefined;

/**
 * @member {Number} vsize
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.vsize = undefined;

/**
 * @member {Number} weight
 */
GithubComSatstreamSsUtilsBitcoinCliBtcTx3.prototype.weight = undefined;
