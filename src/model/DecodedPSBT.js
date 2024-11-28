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
import DecodedPSBTInput from './DecodedPSBTInput';
import DecodedPSBTOutput from './DecodedPSBTOutput';

/**
 * The DecodedPSBT model module.
 * @module model/DecodedPSBT
 * @version 1.0.26
 */
export default class DecodedPSBT {
  /**
   * Constructs a new <code>DecodedPSBT</code>.
   * @alias module:model/DecodedPSBT
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodedPSBT</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodedPSBT} obj Optional instance to populate.
   * @return {module:model/DecodedPSBT} The populated <code>DecodedPSBT</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodedPSBT();
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('inputs'))
        obj.inputs = ApiClient.convertToType(data['inputs'], [DecodedPSBTInput]);
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], [DecodedPSBTOutput]);
      if (data.hasOwnProperty('tx'))
        obj.tx = ApiClient.convertToType(data['tx'], Object);
      if (data.hasOwnProperty('unknown'))
        obj.unknown = ApiClient.convertToType(data['unknown'], Object);
    }
    return obj;
  }
}

/**
 * The transaction fee paid if all UTXOs slots are filled
 * @member {Number} fee
 */
DecodedPSBT.prototype.fee = undefined;

/**
 * Array of inputs
 * @member {Array.<module:model/DecodedPSBTInput>} inputs
 */
DecodedPSBT.prototype.inputs = undefined;

/**
 * Array of outputs
 * @member {Array.<module:model/DecodedPSBTOutput>} outputs
 */
DecodedPSBT.prototype.outputs = undefined;

/**
 * The decoded network-serialized unsigned transaction
 * @member {Object} tx
 */
DecodedPSBT.prototype.tx = undefined;

/**
 * The unknown global fields
 * @member {Object} unknown
 */
DecodedPSBT.prototype.unknown = undefined;

