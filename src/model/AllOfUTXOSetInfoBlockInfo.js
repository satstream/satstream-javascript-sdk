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
import UTXOBlockInfo from './UTXOBlockInfo';

/**
 * The AllOfUTXOSetInfoBlockInfo model module.
 * @module model/AllOfUTXOSetInfoBlockInfo
 * @version 1.0.22
 */
export default class AllOfUTXOSetInfoBlockInfo extends UTXOBlockInfo {
  /**
   * Constructs a new <code>AllOfUTXOSetInfoBlockInfo</code>.
   * Info on amounts in the block at this height
   * @alias module:model/AllOfUTXOSetInfoBlockInfo
   * @class
   * @extends module:model/UTXOBlockInfo
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfUTXOSetInfoBlockInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfUTXOSetInfoBlockInfo} obj Optional instance to populate.
   * @return {module:model/AllOfUTXOSetInfoBlockInfo} The populated <code>AllOfUTXOSetInfoBlockInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfUTXOSetInfoBlockInfo();
      UTXOBlockInfo.constructFromObject(data, obj);
    }
    return obj;
  }
}
