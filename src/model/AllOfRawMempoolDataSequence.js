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
import MempoolSequence from './MempoolSequence';

/**
 * The AllOfRawMempoolDataSequence model module.
 * @module model/AllOfRawMempoolDataSequence
 * @version 1.0.43
 */
export default class AllOfRawMempoolDataSequence extends MempoolSequence {
  /**
   * Constructs a new <code>AllOfRawMempoolDataSequence</code>.
   * Only if mempool_sequence is true
   * @alias module:model/AllOfRawMempoolDataSequence
   * @class
   * @extends module:model/MempoolSequence
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfRawMempoolDataSequence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfRawMempoolDataSequence} obj Optional instance to populate.
   * @return {module:model/AllOfRawMempoolDataSequence} The populated <code>AllOfRawMempoolDataSequence</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfRawMempoolDataSequence();
      MempoolSequence.constructFromObject(data, obj);
    }
    return obj;
  }
}
