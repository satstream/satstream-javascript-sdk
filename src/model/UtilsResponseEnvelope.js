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

/**
 * The UtilsResponseEnvelope model module.
 * @module model/UtilsResponseEnvelope
 * @version 1.0.36
 */
export default class UtilsResponseEnvelope {
  /**
   * Constructs a new <code>UtilsResponseEnvelope</code>.
   * @alias module:model/UtilsResponseEnvelope
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UtilsResponseEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UtilsResponseEnvelope} obj Optional instance to populate.
   * @return {module:model/UtilsResponseEnvelope} The populated <code>UtilsResponseEnvelope</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UtilsResponseEnvelope();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
UtilsResponseEnvelope.prototype.code = undefined;

/**
 * @member {Object} data
 */
UtilsResponseEnvelope.prototype.data = undefined;

/**
 * @member {String} msg
 */
UtilsResponseEnvelope.prototype.msg = undefined;

