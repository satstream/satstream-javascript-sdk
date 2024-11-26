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
 * The GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput model module.
 * @module model/GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput
 * @version 1.0.19
 */
export default class GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput</code>.
   * @alias module:model/GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput} The populated <code>GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput();
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }
}

/**
 * The transaction id
 * @member {String} txid
 */
GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput.prototype.txid = undefined;

/**
 * The output number
 * @member {Number} vout
 */
GithubComSatstreamSsUtilsBitcoinCliTxSpendingPrevoutInput.prototype.vout = undefined;

