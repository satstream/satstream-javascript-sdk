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
 * The ScriptPubKey model module.
 * @module model/ScriptPubKey
 * @version 1.0.36
 */
export default class ScriptPubKey {
  /**
   * Constructs a new <code>ScriptPubKey</code>.
   * @alias module:model/ScriptPubKey
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScriptPubKey} obj Optional instance to populate.
   * @return {module:model/ScriptPubKey} The populated <code>ScriptPubKey</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ScriptPubKey();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('asm'))
        obj.asm = ApiClient.convertToType(data['asm'], 'String');
      if (data.hasOwnProperty('desc'))
        obj.desc = ApiClient.convertToType(data['desc'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
ScriptPubKey.prototype.address = undefined;

/**
 * @member {String} asm
 */
ScriptPubKey.prototype.asm = undefined;

/**
 * @member {String} desc
 */
ScriptPubKey.prototype.desc = undefined;

/**
 * @member {String} hex
 */
ScriptPubKey.prototype.hex = undefined;

/**
 * @member {String} type
 */
ScriptPubKey.prototype.type = undefined;

