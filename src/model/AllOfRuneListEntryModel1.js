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
import RuneEntry from './RuneEntry';
import RuneTerms from './RuneTerms';

/**
 * The AllOfRuneListEntryModel1 model module.
 * @module model/AllOfRuneListEntryModel1
 * @version 1.0.23
 */
export default class AllOfRuneListEntryModel1 extends RuneEntry {
  /**
   * Constructs a new <code>AllOfRuneListEntryModel1</code>.
   * The second element is the entry data
   * @alias module:model/AllOfRuneListEntryModel1
   * @class
   * @extends module:model/RuneEntry
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfRuneListEntryModel1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfRuneListEntryModel1} obj Optional instance to populate.
   * @return {module:model/AllOfRuneListEntryModel1} The populated <code>AllOfRuneListEntryModel1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfRuneListEntryModel1();
      RuneEntry.constructFromObject(data, obj);
    }
    return obj;
  }
}
