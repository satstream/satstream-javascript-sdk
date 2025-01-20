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
 * The CreatePSBTInput model module.
 * @module model/CreatePSBTInput
 * @version 1.0.44
 */
export default class CreatePSBTInput {
  /**
   * Constructs a new <code>CreatePSBTInput</code>.
   * @alias module:model/CreatePSBTInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreatePSBTInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePSBTInput} obj Optional instance to populate.
   * @return {module:model/CreatePSBTInput} The populated <code>CreatePSBTInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePSBTInput();
      if (data.hasOwnProperty('sequence'))
        obj.sequence = ApiClient.convertToType(data['sequence'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * The sequence number to use for the input
 * @member {Number} sequence
 */
CreatePSBTInput.prototype.sequence = undefined;

/**
 * The transaction id of the output to spend
 * @member {String} txid
 */
CreatePSBTInput.prototype.txid = undefined;

/**
 * The output index number (vout) of the output to spend
 * @member {Number} vout
 */
CreatePSBTInput.prototype.vout = undefined;

