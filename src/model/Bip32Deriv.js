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
 * The Bip32Deriv model module.
 * @module model/Bip32Deriv
 * @version 1.0.21
 */
export default class Bip32Deriv {
  /**
   * Constructs a new <code>Bip32Deriv</code>.
   * @alias module:model/Bip32Deriv
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Bip32Deriv</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bip32Deriv} obj Optional instance to populate.
   * @return {module:model/Bip32Deriv} The populated <code>Bip32Deriv</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Bip32Deriv();
      if (data.hasOwnProperty('master_fingerprint'))
        obj.masterFingerprint = ApiClient.convertToType(data['master_fingerprint'], 'String');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
    }
    return obj;
  }
}

/**
 * The fingerprint of the master key
 * @member {String} masterFingerprint
 */
Bip32Deriv.prototype.masterFingerprint = undefined;

/**
 * The derivation path
 * @member {String} path
 */
Bip32Deriv.prototype.path = undefined;

