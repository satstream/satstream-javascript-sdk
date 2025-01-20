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
 * The SatoshiResponse model module.
 * @module model/SatoshiResponse
 * @version 1.0.45
 */
export default class SatoshiResponse {
  /**
   * Constructs a new <code>SatoshiResponse</code>.
   * @alias module:model/SatoshiResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SatoshiResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SatoshiResponse} obj Optional instance to populate.
   * @return {module:model/SatoshiResponse} The populated <code>SatoshiResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SatoshiResponse();
      if (data.hasOwnProperty('block'))
        obj.block = ApiClient.convertToType(data['block'], 'Number');
      if (data.hasOwnProperty('charms'))
        obj.charms = ApiClient.convertToType(data['charms'], ['String']);
      if (data.hasOwnProperty('cycle'))
        obj.cycle = ApiClient.convertToType(data['cycle'], 'Number');
      if (data.hasOwnProperty('decimal'))
        obj.decimal = ApiClient.convertToType(data['decimal'], 'String');
      if (data.hasOwnProperty('degree'))
        obj.degree = ApiClient.convertToType(data['degree'], 'String');
      if (data.hasOwnProperty('epoch'))
        obj.epoch = ApiClient.convertToType(data['epoch'], 'Number');
      if (data.hasOwnProperty('inscriptions'))
        obj.inscriptions = ApiClient.convertToType(data['inscriptions'], ['String']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('percentile'))
        obj.percentile = ApiClient.convertToType(data['percentile'], 'String');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('rarity'))
        obj.rarity = ApiClient.convertToType(data['rarity'], 'String');
      if (data.hasOwnProperty('satpoint'))
        obj.satpoint = ApiClient.convertToType(data['satpoint'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} block
 */
SatoshiResponse.prototype.block = undefined;

/**
 * @member {Array.<String>} charms
 */
SatoshiResponse.prototype.charms = undefined;

/**
 * @member {Number} cycle
 */
SatoshiResponse.prototype.cycle = undefined;

/**
 * @member {String} decimal
 */
SatoshiResponse.prototype.decimal = undefined;

/**
 * @member {String} degree
 */
SatoshiResponse.prototype.degree = undefined;

/**
 * @member {Number} epoch
 */
SatoshiResponse.prototype.epoch = undefined;

/**
 * @member {Array.<String>} inscriptions
 */
SatoshiResponse.prototype.inscriptions = undefined;

/**
 * @member {String} name
 */
SatoshiResponse.prototype.name = undefined;

/**
 * @member {Number} _number
 */
SatoshiResponse.prototype._number = undefined;

/**
 * @member {Number} offset
 */
SatoshiResponse.prototype.offset = undefined;

/**
 * @member {String} percentile
 */
SatoshiResponse.prototype.percentile = undefined;

/**
 * @member {Number} period
 */
SatoshiResponse.prototype.period = undefined;

/**
 * @member {String} rarity
 */
SatoshiResponse.prototype.rarity = undefined;

/**
 * @member {String} satpoint
 */
SatoshiResponse.prototype.satpoint = undefined;

/**
 * @member {Number} timestamp
 */
SatoshiResponse.prototype.timestamp = undefined;

