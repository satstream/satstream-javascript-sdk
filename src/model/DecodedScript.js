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
 * The DecodedScript model module.
 * @module model/DecodedScript
 * @version 1.0.36
 */
export default class DecodedScript {
  /**
   * Constructs a new <code>DecodedScript</code>.
   * @alias module:model/DecodedScript
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodedScript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodedScript} obj Optional instance to populate.
   * @return {module:model/DecodedScript} The populated <code>DecodedScript</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodedScript();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('asm'))
        obj.asm = ApiClient.convertToType(data['asm'], 'String');
      if (data.hasOwnProperty('desc'))
        obj.desc = ApiClient.convertToType(data['desc'], 'String');
      if (data.hasOwnProperty('p2sh'))
        obj.p2sh = ApiClient.convertToType(data['p2sh'], 'String');
      if (data.hasOwnProperty('segwit'))
        obj.segwit = ApiClient.convertToType(data['segwit'], Object);
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
DecodedScript.prototype.address = undefined;

/**
 * Script public key
 * @member {String} asm
 */
DecodedScript.prototype.asm = undefined;

/**
 * Inferred descriptor for the script
 * @member {String} desc
 */
DecodedScript.prototype.desc = undefined;

/**
 * P2SH address wrapping this redeem script
 * @member {String} p2sh
 */
DecodedScript.prototype.p2sh = undefined;

/**
 * Witness script details
 * @member {Object} segwit
 */
DecodedScript.prototype.segwit = undefined;

/**
 * The output type
 * @member {String} type
 */
DecodedScript.prototype.type = undefined;

