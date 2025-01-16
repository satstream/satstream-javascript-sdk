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
 * The StatusResponse model module.
 * @module model/StatusResponse
 * @version 1.0.39
 */
export default class StatusResponse {
  /**
   * Constructs a new <code>StatusResponse</code>.
   * @alias module:model/StatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusResponse} obj Optional instance to populate.
   * @return {module:model/StatusResponse} The populated <code>StatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StatusResponse();
      if (data.hasOwnProperty('blessed_inscriptions'))
        obj.blessedInscriptions = ApiClient.convertToType(data['blessed_inscriptions'], 'Number');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
      if (data.hasOwnProperty('cursed_inscriptions'))
        obj.cursedInscriptions = ApiClient.convertToType(data['cursed_inscriptions'], 'Number');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('inscriptions'))
        obj.inscriptions = ApiClient.convertToType(data['inscriptions'], 'Number');
      if (data.hasOwnProperty('lost_sats'))
        obj.lostSats = ApiClient.convertToType(data['lost_sats'], 'Number');
      if (data.hasOwnProperty('minimum_rune_for_next_block'))
        obj.minimumRuneForNextBlock = ApiClient.convertToType(data['minimum_rune_for_next_block'], 'String');
      if (data.hasOwnProperty('runes'))
        obj.runes = ApiClient.convertToType(data['runes'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} blessedInscriptions
 */
StatusResponse.prototype.blessedInscriptions = undefined;

/**
 * @member {String} chain
 */
StatusResponse.prototype.chain = undefined;

/**
 * @member {Number} cursedInscriptions
 */
StatusResponse.prototype.cursedInscriptions = undefined;

/**
 * @member {Number} height
 */
StatusResponse.prototype.height = undefined;

/**
 * @member {Number} inscriptions
 */
StatusResponse.prototype.inscriptions = undefined;

/**
 * @member {Number} lostSats
 */
StatusResponse.prototype.lostSats = undefined;

/**
 * @member {String} minimumRuneForNextBlock
 */
StatusResponse.prototype.minimumRuneForNextBlock = undefined;

/**
 * @member {Number} runes
 */
StatusResponse.prototype.runes = undefined;

