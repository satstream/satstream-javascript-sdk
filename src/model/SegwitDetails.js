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

/**
 * The SegwitDetails model module.
 * @module model/SegwitDetails
 * @version 1.0.45
 */
export default class SegwitDetails {
  /**
   * Constructs a new <code>SegwitDetails</code>.
   * @alias module:model/SegwitDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SegwitDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SegwitDetails} obj Optional instance to populate.
   * @return {module:model/SegwitDetails} The populated <code>SegwitDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SegwitDetails();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('asm'))
        obj.asm = ApiClient.convertToType(data['asm'], 'String');
      if (data.hasOwnProperty('desc'))
        obj.desc = ApiClient.convertToType(data['desc'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
      if (data.hasOwnProperty('p2sh-segwit'))
        obj.p2shSegwit = ApiClient.convertToType(data['p2sh-segwit'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * The Bitcoin address (only if well-defined)
 * @member {String} address
 */
SegwitDetails.prototype.address = undefined;

/**
 * String representation of the script public key
 * @member {String} asm
 */
SegwitDetails.prototype.asm = undefined;

/**
 * Inferred descriptor for the script
 * @member {String} desc
 */
SegwitDetails.prototype.desc = undefined;

/**
 * Hex string of the script public key
 * @member {String} hex
 */
SegwitDetails.prototype.hex = undefined;

/**
 * P2SH address wrapping this witness script
 * @member {String} p2shSegwit
 */
SegwitDetails.prototype.p2shSegwit = undefined;

/**
 * The type of the script public key
 * @member {String} type
 */
SegwitDetails.prototype.type = undefined;

