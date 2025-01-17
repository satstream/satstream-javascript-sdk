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
 * The PrevOut model module.
 * @module model/PrevOut
 * @version 1.0.45
 */
export default class PrevOut {
  /**
   * Constructs a new <code>PrevOut</code>.
   * @alias module:model/PrevOut
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PrevOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrevOut} obj Optional instance to populate.
   * @return {module:model/PrevOut} The populated <code>PrevOut</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PrevOut();
      if (data.hasOwnProperty('generated'))
        obj.generated = ApiClient.convertToType(data['generated'], 'Boolean');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = ScriptPubKey.constructFromObject(data['scriptPubKey']);
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Boolean} generated
 */
PrevOut.prototype.generated = undefined;

/**
 * @member {Number} height
 */
PrevOut.prototype.height = undefined;

/**
 * @member {module:model/ScriptPubKey} scriptPubKey
 */
PrevOut.prototype.scriptPubKey = undefined;

/**
 * @member {Number} value
 */
PrevOut.prototype.value = undefined;

