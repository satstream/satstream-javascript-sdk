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
import UnknownFields from './UnknownFields';

/**
 * The AllOfDecodedPSBTUnknown model module.
 * @module model/AllOfDecodedPSBTUnknown
 * @version 1.0.43
 */
export default class AllOfDecodedPSBTUnknown extends UnknownFields {
  /**
   * Constructs a new <code>AllOfDecodedPSBTUnknown</code>.
   * The unknown global fields
   * @alias module:model/AllOfDecodedPSBTUnknown
   * @class
   * @extends module:model/UnknownFields
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTUnknown</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTUnknown} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTUnknown} The populated <code>AllOfDecodedPSBTUnknown</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTUnknown();
      UnknownFields.constructFromObject(data, obj);
    }
    return obj;
  }
}
