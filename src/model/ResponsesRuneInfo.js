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
import BigInt from './BigInt';
import GithubComSatstreamSsUtilsOrdinalsTerms from './GithubComSatstreamSsUtilsOrdinalsTerms';

/**
 * The ResponsesRuneInfo model module.
 * @module model/ResponsesRuneInfo
 * @version 1.0.17
 */
export default class ResponsesRuneInfo {
  /**
   * Constructs a new <code>ResponsesRuneInfo</code>.
   * @alias module:model/ResponsesRuneInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesRuneInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesRuneInfo} obj Optional instance to populate.
   * @return {module:model/ResponsesRuneInfo} The populated <code>ResponsesRuneInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesRuneInfo();
      if (data.hasOwnProperty('block_height'))
        obj.blockHeight = ApiClient.convertToType(data['block_height'], 'Number');
      if (data.hasOwnProperty('divisibility'))
        obj.divisibility = ApiClient.convertToType(data['divisibility'], 'Number');
      if (data.hasOwnProperty('minted'))
        obj.minted = ApiClient.convertToType(data['minted'], 'String');
      if (data.hasOwnProperty('premine'))
        obj.premine = BigInt.constructFromObject(data['premine']);
      if (data.hasOwnProperty('rune'))
        obj.rune = ApiClient.convertToType(data['rune'], 'String');
      if (data.hasOwnProperty('rune_id'))
        obj.runeId = ApiClient.convertToType(data['rune_id'], 'String');
      if (data.hasOwnProperty('spaced_rune'))
        obj.spacedRune = ApiClient.convertToType(data['spaced_rune'], 'String');
      if (data.hasOwnProperty('spacers'))
        obj.spacers = ApiClient.convertToType(data['spacers'], 'Number');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('terms'))
        obj.terms = GithubComSatstreamSsUtilsOrdinalsTerms.constructFromObject(data['terms']);
      if (data.hasOwnProperty('turbo'))
        obj.turbo = ApiClient.convertToType(data['turbo'], 'Boolean');
      if (data.hasOwnProperty('tx_height'))
        obj.txHeight = ApiClient.convertToType(data['tx_height'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} blockHeight
 */
ResponsesRuneInfo.prototype.blockHeight = undefined;

/**
 * @member {Number} divisibility
 */
ResponsesRuneInfo.prototype.divisibility = undefined;

/**
 * @member {String} minted
 */
ResponsesRuneInfo.prototype.minted = undefined;

/**
 * @member {module:model/BigInt} premine
 */
ResponsesRuneInfo.prototype.premine = undefined;

/**
 * @member {String} rune
 */
ResponsesRuneInfo.prototype.rune = undefined;

/**
 * @member {String} runeId
 */
ResponsesRuneInfo.prototype.runeId = undefined;

/**
 * @member {String} spacedRune
 */
ResponsesRuneInfo.prototype.spacedRune = undefined;

/**
 * @member {Number} spacers
 */
ResponsesRuneInfo.prototype.spacers = undefined;

/**
 * @member {String} symbol
 */
ResponsesRuneInfo.prototype.symbol = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdinalsTerms} terms
 */
ResponsesRuneInfo.prototype.terms = undefined;

/**
 * @member {Boolean} turbo
 */
ResponsesRuneInfo.prototype.turbo = undefined;

/**
 * @member {Number} txHeight
 */
ResponsesRuneInfo.prototype.txHeight = undefined;

/**
 * @member {String} txid
 */
ResponsesRuneInfo.prototype.txid = undefined;

