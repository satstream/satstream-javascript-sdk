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
import ScriptPubKey from './ScriptPubKey';

/**
 * The Vout model module.
 * @module model/Vout
 * @version 1.0.39
 */
export default class Vout {
  /**
   * Constructs a new <code>Vout</code>.
   * @alias module:model/Vout
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Vout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vout} obj Optional instance to populate.
   * @return {module:model/Vout} The populated <code>Vout</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Vout();
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = ScriptPubKey.constructFromObject(data['scriptPubKey']);
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} n
 */
Vout.prototype.n = undefined;

/**
 * @member {module:model/ScriptPubKey} scriptPubKey
 */
Vout.prototype.scriptPubKey = undefined;

/**
 * @member {Number} value
 */
Vout.prototype.value = undefined;

