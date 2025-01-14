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
import PrevOut from './PrevOut';
import ScriptPubKey from './ScriptPubKey';

/**
 * The AllOfBlockVin3Prevout model module.
 * @module model/AllOfBlockVin3Prevout
 * @version 1.0.37
 */
export default class AllOfBlockVin3Prevout extends PrevOut {
  /**
   * Constructs a new <code>AllOfBlockVin3Prevout</code>.
   * Detailed previous output
   * @alias module:model/AllOfBlockVin3Prevout
   * @class
   * @extends module:model/PrevOut
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfBlockVin3Prevout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfBlockVin3Prevout} obj Optional instance to populate.
   * @return {module:model/AllOfBlockVin3Prevout} The populated <code>AllOfBlockVin3Prevout</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfBlockVin3Prevout();
      PrevOut.constructFromObject(data, obj);
    }
    return obj;
  }
}
