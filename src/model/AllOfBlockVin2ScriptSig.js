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
import ScriptSig from './ScriptSig';

/**
 * The AllOfBlockVin2ScriptSig model module.
 * @module model/AllOfBlockVin2ScriptSig
 * @version 1.0.43
 */
export default class AllOfBlockVin2ScriptSig extends ScriptSig {
  /**
   * Constructs a new <code>AllOfBlockVin2ScriptSig</code>.
   * The script signature
   * @alias module:model/AllOfBlockVin2ScriptSig
   * @class
   * @extends module:model/ScriptSig
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfBlockVin2ScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfBlockVin2ScriptSig} obj Optional instance to populate.
   * @return {module:model/AllOfBlockVin2ScriptSig} The populated <code>AllOfBlockVin2ScriptSig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfBlockVin2ScriptSig();
      ScriptSig.constructFromObject(data, obj);
    }
    return obj;
  }
}
