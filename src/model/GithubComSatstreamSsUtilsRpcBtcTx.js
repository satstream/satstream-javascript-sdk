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
import GithubComSatstreamSsUtilsRpcVin from './GithubComSatstreamSsUtilsRpcVin';
import GithubComSatstreamSsUtilsRpcVout from './GithubComSatstreamSsUtilsRpcVout';

/**
 * The GithubComSatstreamSsUtilsRpcBtcTx model module.
 * @module model/GithubComSatstreamSsUtilsRpcBtcTx
 * @version 1.0.13
 */
export default class GithubComSatstreamSsUtilsRpcBtcTx {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsRpcBtcTx</code>.
   * @alias module:model/GithubComSatstreamSsUtilsRpcBtcTx
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsRpcBtcTx</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsRpcBtcTx} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsRpcBtcTx} The populated <code>GithubComSatstreamSsUtilsRpcBtcTx</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsRpcBtcTx();
      if (data.hasOwnProperty('blockheight'))
        obj.blockheight = ApiClient.convertToType(data['blockheight'], 'Number');
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('locktime'))
        obj.locktime = ApiClient.convertToType(data['locktime'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('vin'))
        obj.vin = ApiClient.convertToType(data['vin'], [GithubComSatstreamSsUtilsRpcVin]);
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], [GithubComSatstreamSsUtilsRpcVout]);
      if (data.hasOwnProperty('vsize'))
        obj.vsize = ApiClient.convertToType(data['vsize'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} blockheight
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.blockheight = undefined;

/**
 * @member {Number} fee
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.fee = undefined;

/**
 * @member {String} hash
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.hash = undefined;

/**
 * @member {String} hex
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.hex = undefined;

/**
 * @member {Number} index
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.index = undefined;

/**
 * @member {Number} locktime
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.locktime = undefined;

/**
 * @member {Number} size
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.size = undefined;

/**
 * @member {String} txid
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.txid = undefined;

/**
 * @member {Number} version
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.version = undefined;

/**
 * Vin will be stored in a separate collection in the DB
 * @member {Array.<module:model/GithubComSatstreamSsUtilsRpcVin>} vin
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.vin = undefined;

/**
 * Vout will be stored in a separate collection in the DB
 * @member {Array.<module:model/GithubComSatstreamSsUtilsRpcVout>} vout
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.vout = undefined;

/**
 * @member {Number} vsize
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.vsize = undefined;

/**
 * @member {Number} weight
 */
GithubComSatstreamSsUtilsRpcBtcTx.prototype.weight = undefined;

