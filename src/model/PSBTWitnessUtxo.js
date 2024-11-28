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
 * The PSBTWitnessUtxo model module.
 * @module model/PSBTWitnessUtxo
 * @version 1.0.32
 */
export default class PSBTWitnessUtxo {
  /**
   * Constructs a new <code>PSBTWitnessUtxo</code>.
   * @alias module:model/PSBTWitnessUtxo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PSBTWitnessUtxo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PSBTWitnessUtxo} obj Optional instance to populate.
   * @return {module:model/PSBTWitnessUtxo} The populated <code>PSBTWitnessUtxo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PSBTWitnessUtxo();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = ApiClient.convertToType(data['scriptPubKey'], Object);
    }
    return obj;
  }
}

/**
 * The value in BTC
 * @member {Number} amount
 */
PSBTWitnessUtxo.prototype.amount = undefined;

/**
 * The script pub key
 * @member {Object} scriptPubKey
 */
PSBTWitnessUtxo.prototype.scriptPubKey = undefined;

