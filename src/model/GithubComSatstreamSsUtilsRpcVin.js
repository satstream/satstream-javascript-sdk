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
import GithubComSatstreamSsUtilsRpcPrevOut from './GithubComSatstreamSsUtilsRpcPrevOut';
import GithubComSatstreamSsUtilsRpcScriptSig from './GithubComSatstreamSsUtilsRpcScriptSig';

/**
 * The GithubComSatstreamSsUtilsRpcVin model module.
 * @module model/GithubComSatstreamSsUtilsRpcVin
 * @version 1.0.13
 */
export default class GithubComSatstreamSsUtilsRpcVin {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsRpcVin</code>.
   * @alias module:model/GithubComSatstreamSsUtilsRpcVin
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsRpcVin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsRpcVin} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsRpcVin} The populated <code>GithubComSatstreamSsUtilsRpcVin</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsRpcVin();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'String');
      if (data.hasOwnProperty('prevout'))
        obj.prevout = GithubComSatstreamSsUtilsRpcPrevOut.constructFromObject(data['prevout']);
      if (data.hasOwnProperty('scriptSig'))
        obj.scriptSig = GithubComSatstreamSsUtilsRpcScriptSig.constructFromObject(data['scriptSig']);
      if (data.hasOwnProperty('sequence'))
        obj.sequence = ApiClient.convertToType(data['sequence'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('txinwitness'))
        obj.txinwitness = ApiClient.convertToType(data['txinwitness'], ['String']);
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} coinbase
 */
GithubComSatstreamSsUtilsRpcVin.prototype.coinbase = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsRpcPrevOut} prevout
 */
GithubComSatstreamSsUtilsRpcVin.prototype.prevout = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsRpcScriptSig} scriptSig
 */
GithubComSatstreamSsUtilsRpcVin.prototype.scriptSig = undefined;

/**
 * @member {Number} sequence
 */
GithubComSatstreamSsUtilsRpcVin.prototype.sequence = undefined;

/**
 * @member {String} txid
 */
GithubComSatstreamSsUtilsRpcVin.prototype.txid = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
GithubComSatstreamSsUtilsRpcVin.prototype.txinwitness = undefined;

/**
 * @member {Number} vout
 */
GithubComSatstreamSsUtilsRpcVin.prototype.vout = undefined;

