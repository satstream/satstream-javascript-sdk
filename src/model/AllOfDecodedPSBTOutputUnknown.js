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
import UnknownFields from './UnknownFields';

/**
 * The AllOfDecodedPSBTOutputUnknown model module.
 * @module model/AllOfDecodedPSBTOutputUnknown
 * @version 1.0.32
 */
export default class AllOfDecodedPSBTOutputUnknown extends UnknownFields {
  /**
   * Constructs a new <code>AllOfDecodedPSBTOutputUnknown</code>.
   * Unknown fields
   * @alias module:model/AllOfDecodedPSBTOutputUnknown
   * @class
   * @extends module:model/UnknownFields
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTOutputUnknown</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTOutputUnknown} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTOutputUnknown} The populated <code>AllOfDecodedPSBTOutputUnknown</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTOutputUnknown();
      UnknownFields.constructFromObject(data, obj);
    }
    return obj;
  }
}