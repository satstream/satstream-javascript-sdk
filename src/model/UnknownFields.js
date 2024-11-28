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
 * The UnknownFields model module.
 * @module model/UnknownFields
 * @version 1.0.32
 */
export default class UnknownFields {
  /**
   * Constructs a new <code>UnknownFields</code>.
   * @alias module:model/UnknownFields
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UnknownFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnknownFields} obj Optional instance to populate.
   * @return {module:model/UnknownFields} The populated <code>UnknownFields</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UnknownFields();
      if (data.hasOwnProperty('fields'))
        obj.fields = ApiClient.convertToType(data['fields'], {'String': 'String'});
    }
    return obj;
  }
}

/**
 * Map of unknown field names to their values
 * @member {Object.<String, String>} fields
 */
UnknownFields.prototype.fields = undefined;

