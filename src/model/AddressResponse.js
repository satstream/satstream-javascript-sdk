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
import RunesBalance from './RunesBalance';

/**
 * The AddressResponse model module.
 * @module model/AddressResponse
 * @version 1.0.21
 */
export default class AddressResponse {
  /**
   * Constructs a new <code>AddressResponse</code>.
   * @alias module:model/AddressResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressResponse} obj Optional instance to populate.
   * @return {module:model/AddressResponse} The populated <code>AddressResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddressResponse();
      if (data.hasOwnProperty('inscriptions'))
        obj.inscriptions = ApiClient.convertToType(data['inscriptions'], ['String']);
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], ['String']);
      if (data.hasOwnProperty('runes_balances'))
        obj.runesBalances = ApiClient.convertToType(data['runes_balances'], [RunesBalance]);
      if (data.hasOwnProperty('sat_balance'))
        obj.satBalance = ApiClient.convertToType(data['sat_balance'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} inscriptions
 */
AddressResponse.prototype.inscriptions = undefined;

/**
 * @member {Array.<String>} outputs
 */
AddressResponse.prototype.outputs = undefined;

/**
 * @member {Array.<module:model/RunesBalance>} runesBalances
 */
AddressResponse.prototype.runesBalances = undefined;

/**
 * @member {Number} satBalance
 */
AddressResponse.prototype.satBalance = undefined;

