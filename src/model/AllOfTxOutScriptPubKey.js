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
 * The AllOfTxOutScriptPubKey model module.
 * @module model/AllOfTxOutScriptPubKey
 * @version 1.0.37
 */
export default class AllOfTxOutScriptPubKey extends ScriptPubKey {
  /**
   * Constructs a new <code>AllOfTxOutScriptPubKey</code>.
   * The public key script
   * @alias module:model/AllOfTxOutScriptPubKey
   * @class
   * @extends module:model/ScriptPubKey
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfTxOutScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfTxOutScriptPubKey} obj Optional instance to populate.
   * @return {module:model/AllOfTxOutScriptPubKey} The populated <code>AllOfTxOutScriptPubKey</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfTxOutScriptPubKey();
      ScriptPubKey.constructFromObject(data, obj);
    }
    return obj;
  }
}
