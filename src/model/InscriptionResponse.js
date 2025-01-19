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
 * The InscriptionResponse model module.
 * @module model/InscriptionResponse
 * @version 1.0.43
 */
export default class InscriptionResponse {
  /**
   * Constructs a new <code>InscriptionResponse</code>.
   * @alias module:model/InscriptionResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InscriptionResponse} obj Optional instance to populate.
   * @return {module:model/InscriptionResponse} The populated <code>InscriptionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InscriptionResponse();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('charms'))
        obj.charms = ApiClient.convertToType(data['charms'], ['String']);
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], ['String']);
      if (data.hasOwnProperty('content_length'))
        obj.contentLength = ApiClient.convertToType(data['content_length'], 'Number');
      if (data.hasOwnProperty('content_type'))
        obj.contentType = ApiClient.convertToType(data['content_type'], 'String');
      if (data.hasOwnProperty('effective_content_type'))
        obj.effectiveContentType = ApiClient.convertToType(data['effective_content_type'], 'String');
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('parents'))
        obj.parents = ApiClient.convertToType(data['parents'], ['String']);
      if (data.hasOwnProperty('previous'))
        obj.previous = ApiClient.convertToType(data['previous'], 'String');
      if (data.hasOwnProperty('rune'))
        obj.rune = ApiClient.convertToType(data['rune'], 'String');
      if (data.hasOwnProperty('sat'))
        obj.sat = ApiClient.convertToType(data['sat'], 'Number');
      if (data.hasOwnProperty('satpoint'))
        obj.satpoint = ApiClient.convertToType(data['satpoint'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Number');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
InscriptionResponse.prototype.address = undefined;

/**
 * @member {Array.<String>} charms
 */
InscriptionResponse.prototype.charms = undefined;

/**
 * @member {Array.<String>} children
 */
InscriptionResponse.prototype.children = undefined;

/**
 * @member {Number} contentLength
 */
InscriptionResponse.prototype.contentLength = undefined;

/**
 * @member {String} contentType
 */
InscriptionResponse.prototype.contentType = undefined;

/**
 * @member {String} effectiveContentType
 */
InscriptionResponse.prototype.effectiveContentType = undefined;

/**
 * @member {Number} fee
 */
InscriptionResponse.prototype.fee = undefined;

/**
 * @member {Number} height
 */
InscriptionResponse.prototype.height = undefined;

/**
 * @member {String} id
 */
InscriptionResponse.prototype.id = undefined;

/**
 * @member {String} next
 */
InscriptionResponse.prototype.next = undefined;

/**
 * @member {Number} _number
 */
InscriptionResponse.prototype._number = undefined;

/**
 * @member {Array.<String>} parents
 */
InscriptionResponse.prototype.parents = undefined;

/**
 * @member {String} previous
 */
InscriptionResponse.prototype.previous = undefined;

/**
 * @member {String} rune
 */
InscriptionResponse.prototype.rune = undefined;

/**
 * @member {Number} sat
 */
InscriptionResponse.prototype.sat = undefined;

/**
 * @member {String} satpoint
 */
InscriptionResponse.prototype.satpoint = undefined;

/**
 * @member {Number} timestamp
 */
InscriptionResponse.prototype.timestamp = undefined;

/**
 * @member {Number} value
 */
InscriptionResponse.prototype.value = undefined;

