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
 * The TransactionConvertToPSBTRequest model module.
 * @module model/TransactionConvertToPSBTRequest
 * @version 1.0.38
 */
export default class TransactionConvertToPSBTRequest {
  /**
   * Constructs a new <code>TransactionConvertToPSBTRequest</code>.
   * @alias module:model/TransactionConvertToPSBTRequest
   * @class
   * @param hexstring {String} The hex string of a raw transaction
   */
  constructor(hexstring) {
    this.hexstring = hexstring;
  }

  /**
   * Constructs a <code>TransactionConvertToPSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionConvertToPSBTRequest} obj Optional instance to populate.
   * @return {module:model/TransactionConvertToPSBTRequest} The populated <code>TransactionConvertToPSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionConvertToPSBTRequest();
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
TransactionConvertToPSBTRequest.prototype.hexstring = undefined;

/**
 * Whether the transaction hex is a serialized witness transaction. If not provided, heuristic tests will be used in decoding. If true, only witness deserialization will be tried. If false, only non-witness deserialization will be tried. This boolean should reflect whether the transaction has inputs (e.g. fully valid, or on-chain transactions), if known by the caller. Optional, defaults to heuristic tests if not provided.
 * @member {Boolean} isWitness
 */
TransactionConvertToPSBTRequest.prototype.isWitness = undefined;

/**
 * If true, any signatures in the input will be discarded and conversion will continue. If false, RPC will fail if any signatures are present. Optional, defaults to false if not provided.
 * @member {Boolean} permitSigdata
 */
TransactionConvertToPSBTRequest.prototype.permitSigdata = undefined;

