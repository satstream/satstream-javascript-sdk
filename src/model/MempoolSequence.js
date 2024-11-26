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
 * The MempoolSequence model module.
 * @module model/MempoolSequence
 * @version 1.0.20
 */
export default class MempoolSequence {
  /**
   * Constructs a new <code>MempoolSequence</code>.
   * @alias module:model/MempoolSequence
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MempoolSequence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MempoolSequence} obj Optional instance to populate.
   * @return {module:model/MempoolSequence} The populated <code>MempoolSequence</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MempoolSequence();
      if (data.hasOwnProperty('mempool_sequence'))
        obj.mempoolSequence = ApiClient.convertToType(data['mempool_sequence'], 'Number');
      if (data.hasOwnProperty('txids'))
        obj.txids = ApiClient.convertToType(data['txids'], ['String']);
    }
    return obj;
  }
}

/**
 * The mempool sequence value
 * @member {Number} mempoolSequence
 */
MempoolSequence.prototype.mempoolSequence = undefined;

/**
 * The transaction ids
 * @member {Array.<String>} txids
 */
MempoolSequence.prototype.txids = undefined;

