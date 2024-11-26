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
import GithubComSatstreamSsUtilsOrdServerResponsesDuration from './GithubComSatstreamSsUtilsOrdServerResponsesDuration';

/**
 * The GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse();
      if (data.hasOwnProperty('address_index'))
        obj.addressIndex = ApiClient.convertToType(data['address_index'], 'Boolean');
      if (data.hasOwnProperty('blessed_inscriptions'))
        obj.blessedInscriptions = ApiClient.convertToType(data['blessed_inscriptions'], 'Number');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
      if (data.hasOwnProperty('cursed_inscriptions'))
        obj.cursedInscriptions = ApiClient.convertToType(data['cursed_inscriptions'], 'Number');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('initial_sync_time'))
        obj.initialSyncTime = GithubComSatstreamSsUtilsOrdServerResponsesDuration.constructFromObject(data['initial_sync_time']);
      if (data.hasOwnProperty('inscriptions'))
        obj.inscriptions = ApiClient.convertToType(data['inscriptions'], 'Number');
      if (data.hasOwnProperty('lost_sats'))
        obj.lostSats = ApiClient.convertToType(data['lost_sats'], 'Number');
      if (data.hasOwnProperty('minimum_rune_for_next_block'))
        obj.minimumRuneForNextBlock = ApiClient.convertToType(data['minimum_rune_for_next_block'], 'String');
      if (data.hasOwnProperty('rune_index'))
        obj.runeIndex = ApiClient.convertToType(data['rune_index'], 'Boolean');
      if (data.hasOwnProperty('runes'))
        obj.runes = ApiClient.convertToType(data['runes'], 'Number');
      if (data.hasOwnProperty('sat_index'))
        obj.satIndex = ApiClient.convertToType(data['sat_index'], 'Boolean');
      if (data.hasOwnProperty('started'))
        obj.started = ApiClient.convertToType(data['started'], 'String');
      if (data.hasOwnProperty('transaction_index'))
        obj.transactionIndex = ApiClient.convertToType(data['transaction_index'], 'Boolean');
      if (data.hasOwnProperty('unrecoverably_reorged'))
        obj.unrecoverablyReorged = ApiClient.convertToType(data['unrecoverably_reorged'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = GithubComSatstreamSsUtilsOrdServerResponsesDuration.constructFromObject(data['uptime']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} addressIndex
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.addressIndex = undefined;

/**
 * @member {Number} blessedInscriptions
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.blessedInscriptions = undefined;

/**
 * @member {String} chain
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.chain = undefined;

/**
 * @member {Number} cursedInscriptions
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.cursedInscriptions = undefined;

/**
 * @member {Number} height
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.height = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesDuration} initialSyncTime
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.initialSyncTime = undefined;

/**
 * @member {Number} inscriptions
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.inscriptions = undefined;

/**
 * @member {Number} lostSats
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.lostSats = undefined;

/**
 * @member {String} minimumRuneForNextBlock
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.minimumRuneForNextBlock = undefined;

/**
 * @member {Boolean} runeIndex
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.runeIndex = undefined;

/**
 * @member {Number} runes
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.runes = undefined;

/**
 * @member {Boolean} satIndex
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.satIndex = undefined;

/**
 * @member {String} started
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.started = undefined;

/**
 * @member {Boolean} transactionIndex
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.transactionIndex = undefined;

/**
 * @member {Boolean} unrecoverablyReorged
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.unrecoverablyReorged = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdServerResponsesDuration} uptime
 */
GithubComSatstreamSsUtilsOrdServerResponsesStatusResponse.prototype.uptime = undefined;
