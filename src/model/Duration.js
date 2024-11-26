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
 * The Duration model module.
 * @module model/Duration
 * @version 1.0.22
 */
export default class Duration {
  /**
   * Constructs a new <code>Duration</code>.
   * @alias module:model/Duration
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Duration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Duration} obj Optional instance to populate.
   * @return {module:model/Duration} The populated <code>Duration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Duration();
      if (data.hasOwnProperty('nanos'))
        obj.nanos = ApiClient.convertToType(data['nanos'], 'Number');
      if (data.hasOwnProperty('secs'))
        obj.secs = ApiClient.convertToType(data['secs'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} nanos
 */
Duration.prototype.nanos = undefined;

/**
 * @member {Number} secs
 */
Duration.prototype.secs = undefined;

