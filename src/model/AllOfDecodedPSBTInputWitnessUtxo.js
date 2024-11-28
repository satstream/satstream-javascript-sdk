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
import PSBTWitnessUtxo from './PSBTWitnessUtxo';

/**
 * The AllOfDecodedPSBTInputWitnessUtxo model module.
 * @module model/AllOfDecodedPSBTInputWitnessUtxo
 * @version 1.0.26
 */
export default class AllOfDecodedPSBTInputWitnessUtxo extends PSBTWitnessUtxo {
  /**
   * Constructs a new <code>AllOfDecodedPSBTInputWitnessUtxo</code>.
   * Transaction output for witness UTXOs
   * @alias module:model/AllOfDecodedPSBTInputWitnessUtxo
   * @class
   * @extends module:model/PSBTWitnessUtxo
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfDecodedPSBTInputWitnessUtxo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfDecodedPSBTInputWitnessUtxo} obj Optional instance to populate.
   * @return {module:model/AllOfDecodedPSBTInputWitnessUtxo} The populated <code>AllOfDecodedPSBTInputWitnessUtxo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfDecodedPSBTInputWitnessUtxo();
      PSBTWitnessUtxo.constructFromObject(data, obj);
    }
    return obj;
  }
}
