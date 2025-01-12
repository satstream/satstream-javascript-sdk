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
 * The TransactionVerifyTxOutProofRequest model module.
 * @module model/TransactionVerifyTxOutProofRequest
 * @version 1.0.34
 */
export default class TransactionVerifyTxOutProofRequest {
  /**
   * Constructs a new <code>TransactionVerifyTxOutProofRequest</code>.
   * @alias module:model/TransactionVerifyTxOutProofRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionVerifyTxOutProofRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionVerifyTxOutProofRequest} obj Optional instance to populate.
   * @return {module:model/TransactionVerifyTxOutProofRequest} The populated <code>TransactionVerifyTxOutProofRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionVerifyTxOutProofRequest();
      if (data.hasOwnProperty('proof'))
        obj.proof = ApiClient.convertToType(data['proof'], 'String');
    }
    return obj;
  }
}

/**
 * The hex-encoded proof generated by gettxoutproof
 * @member {String} proof
 */
TransactionVerifyTxOutProofRequest.prototype.proof = undefined;

