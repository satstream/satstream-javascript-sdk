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
import TransactionDetails from './TransactionDetails';

/**
 * The TransactionResponse model module.
 * @module model/TransactionResponse
 * @version 1.0.22
 */
export default class TransactionResponse {
  /**
   * Constructs a new <code>TransactionResponse</code>.
   * @alias module:model/TransactionResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionResponse} obj Optional instance to populate.
   * @return {module:model/TransactionResponse} The populated <code>TransactionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionResponse();
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
      if (data.hasOwnProperty('etching'))
        obj.etching = ApiClient.convertToType(data['etching'], 'String');
      if (data.hasOwnProperty('inscription_count'))
        obj.inscriptionCount = ApiClient.convertToType(data['inscription_count'], 'Number');
      if (data.hasOwnProperty('transaction'))
        obj.transaction = TransactionDetails.constructFromObject(data['transaction']);
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} chain
 */
TransactionResponse.prototype.chain = undefined;

/**
 * @member {String} etching
 */
TransactionResponse.prototype.etching = undefined;

/**
 * @member {Number} inscriptionCount
 */
TransactionResponse.prototype.inscriptionCount = undefined;

/**
 * @member {module:model/TransactionDetails} transaction
 */
TransactionResponse.prototype.transaction = undefined;

/**
 * @member {String} txid
 */
TransactionResponse.prototype.txid = undefined;

