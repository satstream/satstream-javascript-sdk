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
import SegwitDetails from './SegwitDetails';

/**
 * The AllOfDecodedScriptSegwit model module.
 * @module model/AllOfDecodedScriptSegwit
 * @version 1.0.45
 */
export default class AllOfDecodedScriptSegwit extends SegwitDetails {
  /**
   * Constructs a new <code>AllOfDecodedScriptSegwit</code>.
   * Witness script details
   * @alias module:model/AllOfDecodedScriptSegwit
   * @class
   * @extends module:model/SegwitDetails
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedScriptSegwit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedScriptSegwit} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedScriptSegwit} The populated <code>AllOfDecodedScriptSegwit</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedScriptSegwit();
      SegwitDetails.constructFromObject(data, obj);
    }
    return obj;
  }
}
