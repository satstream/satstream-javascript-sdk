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

/**
 * The GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData model module.
 * @module model/GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData} The populated <code>GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData();
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], ['Number']);
      if (data.hasOwnProperty('content_encoding'))
        obj.contentEncoding = ApiClient.convertToType(data['content_encoding'], 'String');
      if (data.hasOwnProperty('content_type'))
        obj.contentType = ApiClient.convertToType(data['content_type'], ['Number']);
      if (data.hasOwnProperty('delegate'))
        obj.delegate = ApiClient.convertToType(data['delegate'], 'String');
      if (data.hasOwnProperty('duplicate_field'))
        obj.duplicateField = ApiClient.convertToType(data['duplicate_field'], 'Boolean');
      if (data.hasOwnProperty('incomplete_field'))
        obj.incompleteField = ApiClient.convertToType(data['incomplete_field'], 'Boolean');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], 'String');
      if (data.hasOwnProperty('metaprotocol'))
        obj.metaprotocol = ApiClient.convertToType(data['metaprotocol'], 'String');
      if (data.hasOwnProperty('parents'))
        obj.parents = ApiClient.convertToType(data['parents'], ['String']);
      if (data.hasOwnProperty('pointer'))
        obj.pointer = ApiClient.convertToType(data['pointer'], 'String');
      if (data.hasOwnProperty('rune'))
        obj.rune = ApiClient.convertToType(data['rune'], 'String');
      if (data.hasOwnProperty('unrecognized_even_field'))
        obj.unrecognizedEvenField = ApiClient.convertToType(data['unrecognized_even_field'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Array.<Number>} body
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.body = undefined;

/**
 * @member {String} contentEncoding
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.contentEncoding = undefined;

/**
 * @member {Array.<Number>} contentType
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.contentType = undefined;

/**
 * @member {String} delegate
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.delegate = undefined;

/**
 * @member {Boolean} duplicateField
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.duplicateField = undefined;

/**
 * @member {Boolean} incompleteField
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.incompleteField = undefined;

/**
 * @member {String} metadata
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.metadata = undefined;

/**
 * @member {String} metaprotocol
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.metaprotocol = undefined;

/**
 * @member {Array.<String>} parents
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.parents = undefined;

/**
 * @member {String} pointer
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.pointer = undefined;

/**
 * @member {String} rune
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.rune = undefined;

/**
 * @member {Boolean} unrecognizedEvenField
 */
GithubComSatstreamSsUtilsOrdServerResponsesInscriptionData.prototype.unrecognizedEvenField = undefined;
