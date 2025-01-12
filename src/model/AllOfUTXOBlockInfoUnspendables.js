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
import UTXOUnspendables from './UTXOUnspendables';

/**
 * The AllOfUTXOBlockInfoUnspendables model module.
 * @module model/AllOfUTXOBlockInfoUnspendables
 * @version 1.0.34
 */
export default class AllOfUTXOBlockInfoUnspendables extends UTXOUnspendables {
  /**
   * Constructs a new <code>AllOfUTXOBlockInfoUnspendables</code>.
   * Detailed view of unspendable categories
   * @alias module:model/AllOfUTXOBlockInfoUnspendables
   * @class
   * @extends module:model/UTXOUnspendables
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfUTXOBlockInfoUnspendables</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfUTXOBlockInfoUnspendables} obj Optional instance to populate.
   * @return {module:model/AllOfUTXOBlockInfoUnspendables} The populated <code>AllOfUTXOBlockInfoUnspendables</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfUTXOBlockInfoUnspendables();
      UTXOUnspendables.constructFromObject(data, obj);
    }
    return obj;
  }
}
