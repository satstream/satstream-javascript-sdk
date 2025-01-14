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
 * The CombinePSBTRequest model module.
 * @module model/CombinePSBTRequest
 * @version 1.0.37
 */
export default class CombinePSBTRequest {
  /**
   * Constructs a new <code>CombinePSBTRequest</code>.
   * @alias module:model/CombinePSBTRequest
   * @class
   * @param psbts {Array.<String>} Array of base64-encoded PSBTs to combine
   */
  constructor(psbts) {
    this.psbts = psbts;
  }

  /**
   * Constructs a <code>CombinePSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinePSBTRequest} obj Optional instance to populate.
   * @return {module:model/CombinePSBTRequest} The populated <code>CombinePSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CombinePSBTRequest();
      if (data.hasOwnProperty('psbts'))
        obj.psbts = ApiClient.convertToType(data['psbts'], ['String']);
    }
    return obj;
  }
}

/**
 * Array of base64-encoded PSBTs to combine
 * @member {Array.<String>} psbts
 */
CombinePSBTRequest.prototype.psbts = undefined;

