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
 * The RequestsCreatePSBTInput model module.
 * @module model/RequestsCreatePSBTInput
 * @version 1.0.22
 */
export default class RequestsCreatePSBTInput {
  /**
   * Constructs a new <code>RequestsCreatePSBTInput</code>.
   * @alias module:model/RequestsCreatePSBTInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsCreatePSBTInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsCreatePSBTInput} obj Optional instance to populate.
   * @return {module:model/RequestsCreatePSBTInput} The populated <code>RequestsCreatePSBTInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsCreatePSBTInput();
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
RequestsCreatePSBTInput.prototype.sequence = undefined;

/**
 * The transaction id of the output to spend
 * @member {String} txid
 */
RequestsCreatePSBTInput.prototype.txid = undefined;

/**
 * The output index number (vout) of the output to spend
 * @member {Number} vout
 */
RequestsCreatePSBTInput.prototype.vout = undefined;

