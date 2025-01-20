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
import GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails from './GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails';

/**
 * The OutputResponse model module.
 * @module model/OutputResponse
 * @version 1.0.45
 */
export default class OutputResponse {
  /**
   * Constructs a new <code>OutputResponse</code>.
   * @alias module:model/OutputResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OutputResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OutputResponse} obj Optional instance to populate.
   * @return {module:model/OutputResponse} The populated <code>OutputResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OutputResponse();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('indexed'))
        obj.indexed = ApiClient.convertToType(data['indexed'], 'Boolean');
      if (data.hasOwnProperty('inscriptions'))
        obj.inscriptions = ApiClient.convertToType(data['inscriptions'], ['String']);
      if (data.hasOwnProperty('outpoint'))
        obj.outpoint = ApiClient.convertToType(data['outpoint'], 'String');
      if (data.hasOwnProperty('runes'))
        obj.runes = ApiClient.convertToType(data['runes'], {'String': GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails});
      if (data.hasOwnProperty('sat_ranges'))
        obj.satRanges = ApiClient.convertToType(data['sat_ranges'], [['Number']]);
      if (data.hasOwnProperty('script_pubkey'))
        obj.scriptPubkey = ApiClient.convertToType(data['script_pubkey'], 'String');
      if (data.hasOwnProperty('spent'))
        obj.spent = ApiClient.convertToType(data['spent'], 'Boolean');
      if (data.hasOwnProperty('transaction'))
        obj.transaction = ApiClient.convertToType(data['transaction'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
OutputResponse.prototype.address = undefined;

/**
 * @member {Boolean} indexed
 */
OutputResponse.prototype.indexed = undefined;

/**
 * @member {Array.<String>} inscriptions
 */
OutputResponse.prototype.inscriptions = undefined;

/**
 * @member {String} outpoint
 */
OutputResponse.prototype.outpoint = undefined;

/**
 * @member {Object.<String, module:model/GithubComSatstreamSsUtilsOrdServerResponsesRuneDetails>} runes
 */
OutputResponse.prototype.runes = undefined;

/**
 * @member {Array.<Array.<Number>>} satRanges
 */
OutputResponse.prototype.satRanges = undefined;

/**
 * @member {String} scriptPubkey
 */
OutputResponse.prototype.scriptPubkey = undefined;

/**
 * @member {Boolean} spent
 */
OutputResponse.prototype.spent = undefined;

/**
 * @member {String} transaction
 */
OutputResponse.prototype.transaction = undefined;

/**
 * @member {Number} value
 */
OutputResponse.prototype.value = undefined;

