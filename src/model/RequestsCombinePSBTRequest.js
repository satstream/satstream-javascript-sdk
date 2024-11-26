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
 * The RequestsCombinePSBTRequest model module.
 * @module model/RequestsCombinePSBTRequest
 * @version 1.0.19
 */
export default class RequestsCombinePSBTRequest {
  /**
   * Constructs a new <code>RequestsCombinePSBTRequest</code>.
   * @alias module:model/RequestsCombinePSBTRequest
   * @class
   * @param psbts {Array.<String>} 
   */
  constructor(psbts) {
    this.psbts = psbts;
  }

  /**
   * Constructs a <code>RequestsCombinePSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsCombinePSBTRequest} obj Optional instance to populate.
   * @return {module:model/RequestsCombinePSBTRequest} The populated <code>RequestsCombinePSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsCombinePSBTRequest();
      if (data.hasOwnProperty('psbts'))
        obj.psbts = ApiClient.convertToType(data['psbts'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} psbts
 */
RequestsCombinePSBTRequest.prototype.psbts = undefined;

