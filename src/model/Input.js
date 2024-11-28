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
 * The Input model module.
 * @module model/Input
 * @version 1.0.32
 */
export default class Input {
  /**
   * Constructs a new <code>Input</code>.
   * @alias module:model/Input
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Input</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Input} obj Optional instance to populate.
   * @return {module:model/Input} The populated <code>Input</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Input();
      if (data.hasOwnProperty('previous_output'))
        obj.previousOutput = ApiClient.convertToType(data['previous_output'], 'String');
      if (data.hasOwnProperty('script_sig'))
        obj.scriptSig = ApiClient.convertToType(data['script_sig'], 'String');
      if (data.hasOwnProperty('sequence'))
        obj.sequence = ApiClient.convertToType(data['sequence'], 'Number');
      if (data.hasOwnProperty('witness'))
        obj.witness = ApiClient.convertToType(data['witness'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} previousOutput
 */
Input.prototype.previousOutput = undefined;

/**
 * @member {String} scriptSig
 */
Input.prototype.scriptSig = undefined;

/**
 * @member {Number} sequence
 */
Input.prototype.sequence = undefined;

/**
 * @member {Array.<String>} witness
 */
Input.prototype.witness = undefined;

