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
 * The RequestsConvertToPSBTRequest model module.
 * @module model/RequestsConvertToPSBTRequest
 * @version 1.0.19
 */
export default class RequestsConvertToPSBTRequest {
  /**
   * Constructs a new <code>RequestsConvertToPSBTRequest</code>.
   * @alias module:model/RequestsConvertToPSBTRequest
   * @class
   * @param hexstring {String} The hex string of a raw transaction
   */
  constructor(hexstring) {
    this.hexstring = hexstring;
  }

  /**
   * Constructs a <code>RequestsConvertToPSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsConvertToPSBTRequest} obj Optional instance to populate.
   * @return {module:model/RequestsConvertToPSBTRequest} The populated <code>RequestsConvertToPSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsConvertToPSBTRequest();
      if (data.hasOwnProperty('hexstring'))
        obj.hexstring = ApiClient.convertToType(data['hexstring'], 'String');
      if (data.hasOwnProperty('is_witness'))
        obj.isWitness = ApiClient.convertToType(data['is_witness'], 'Boolean');
      if (data.hasOwnProperty('permit_sigdata'))
        obj.permitSigdata = ApiClient.convertToType(data['permit_sigdata'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The hex string of a raw transaction
 * @member {String} hexstring
 */
RequestsConvertToPSBTRequest.prototype.hexstring = undefined;

/**
 * Whether the transaction hex is a serialized witness transaction. If not provided, heuristic tests will be used in decoding. If true, only witness deserialization will be tried. If false, only non-witness deserialization will be tried. This boolean should reflect whether the transaction has inputs (e.g. fully valid, or on-chain transactions), if known by the caller. Optional, defaults to heuristic tests if not provided.
 * @member {Boolean} isWitness
 */
RequestsConvertToPSBTRequest.prototype.isWitness = undefined;

/**
 * If true, any signatures in the input will be discarded and conversion will continue. If false, RPC will fail if any signatures are present. Optional, defaults to false if not provided.
 * @member {Boolean} permitSigdata
 */
RequestsConvertToPSBTRequest.prototype.permitSigdata = undefined;
