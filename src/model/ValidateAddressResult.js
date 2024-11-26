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
 * The ValidateAddressResult model module.
 * @module model/ValidateAddressResult
 * @version 1.0.21
 */
export default class ValidateAddressResult {
  /**
   * Constructs a new <code>ValidateAddressResult</code>.
   * @alias module:model/ValidateAddressResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ValidateAddressResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateAddressResult} obj Optional instance to populate.
   * @return {module:model/ValidateAddressResult} The populated <code>ValidateAddressResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ValidateAddressResult();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
      if (data.hasOwnProperty('error_locations'))
        obj.errorLocations = ApiClient.convertToType(data['error_locations'], ['Number']);
      if (data.hasOwnProperty('isscript'))
        obj.isscript = ApiClient.convertToType(data['isscript'], 'Boolean');
      if (data.hasOwnProperty('isvalid'))
        obj.isvalid = ApiClient.convertToType(data['isvalid'], 'Boolean');
      if (data.hasOwnProperty('iswitness'))
        obj.iswitness = ApiClient.convertToType(data['iswitness'], 'Boolean');
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = ApiClient.convertToType(data['scriptPubKey'], 'String');
      if (data.hasOwnProperty('witness_program'))
        obj.witnessProgram = ApiClient.convertToType(data['witness_program'], 'String');
      if (data.hasOwnProperty('witness_version'))
        obj.witnessVersion = ApiClient.convertToType(data['witness_version'], 'Number');
    }
    return obj;
  }
}

/**
 * The bitcoin address validated
 * @member {String} address
 */
ValidateAddressResult.prototype.address = undefined;

/**
 * Error message, if any
 * @member {String} error
 */
ValidateAddressResult.prototype.error = undefined;

/**
 * Indices of likely error locations
 * @member {Array.<Number>} errorLocations
 */
ValidateAddressResult.prototype.errorLocations = undefined;

/**
 * If the key is a script
 * @member {Boolean} isscript
 */
ValidateAddressResult.prototype.isscript = undefined;

/**
 * If the address is valid or not
 * @member {Boolean} isvalid
 */
ValidateAddressResult.prototype.isvalid = undefined;

/**
 * If the address is a witness address
 * @member {Boolean} iswitness
 */
ValidateAddressResult.prototype.iswitness = undefined;

/**
 * The hex-encoded scriptPubKey
 * @member {String} scriptPubKey
 */
ValidateAddressResult.prototype.scriptPubKey = undefined;

/**
 * The hex value of the witness program
 * @member {String} witnessProgram
 */
ValidateAddressResult.prototype.witnessProgram = undefined;

/**
 * The version number of the witness program
 * @member {Number} witnessVersion
 */
ValidateAddressResult.prototype.witnessVersion = undefined;

