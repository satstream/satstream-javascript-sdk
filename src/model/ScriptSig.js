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
 * The ScriptSig model module.
 * @module model/ScriptSig
 * @version 1.0.26
 */
export default class ScriptSig {
  /**
   * Constructs a new <code>ScriptSig</code>.
   * @alias module:model/ScriptSig
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScriptSig} obj Optional instance to populate.
   * @return {module:model/ScriptSig} The populated <code>ScriptSig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ScriptSig();
      if (data.hasOwnProperty('asm'))
        obj.asm = ApiClient.convertToType(data['asm'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} asm
 */
ScriptSig.prototype.asm = undefined;

/**
 * @member {String} hex
 */
ScriptSig.prototype.hex = undefined;

