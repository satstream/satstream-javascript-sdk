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
 * The AddressRuneDelta model module.
 * @module model/AddressRuneDelta
 * @version 1.0.45
 */
export default class AddressRuneDelta {
  /**
   * Constructs a new <code>AddressRuneDelta</code>.
   * @alias module:model/AddressRuneDelta
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddressRuneDelta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressRuneDelta} obj Optional instance to populate.
   * @return {module:model/AddressRuneDelta} The populated <code>AddressRuneDelta</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddressRuneDelta();
      if (data.hasOwnProperty('block_height'))
        obj.blockHeight = ApiClient.convertToType(data['block_height'], 'Number');
      if (data.hasOwnProperty('delta'))
        obj.delta = ApiClient.convertToType(data['delta'], 'String');
      if (data.hasOwnProperty('incoming'))
        obj.incoming = ApiClient.convertToType(data['incoming'], 'String');
      if (data.hasOwnProperty('outgoing'))
        obj.outgoing = ApiClient.convertToType(data['outgoing'], 'String');
      if (data.hasOwnProperty('rune_id'))
        obj.runeId = ApiClient.convertToType(data['rune_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} blockHeight
 */
AddressRuneDelta.prototype.blockHeight = undefined;

/**
 * @member {String} delta
 */
AddressRuneDelta.prototype.delta = undefined;

/**
 * @member {String} incoming
 */
AddressRuneDelta.prototype.incoming = undefined;

/**
 * @member {String} outgoing
 */
AddressRuneDelta.prototype.outgoing = undefined;

/**
 * @member {String} runeId
 */
AddressRuneDelta.prototype.runeId = undefined;

