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
 * The RequestsJoinPSBTsRequest model module.
 * @module model/RequestsJoinPSBTsRequest
 * @version 1.0.20
 */
export default class RequestsJoinPSBTsRequest {
  /**
   * Constructs a new <code>RequestsJoinPSBTsRequest</code>.
   * @alias module:model/RequestsJoinPSBTsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsJoinPSBTsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsJoinPSBTsRequest} obj Optional instance to populate.
   * @return {module:model/RequestsJoinPSBTsRequest} The populated <code>RequestsJoinPSBTsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsJoinPSBTsRequest();
      if (data.hasOwnProperty('psbts'))
        obj.psbts = ApiClient.convertToType(data['psbts'], ['String']);
    }
    return obj;
  }
}

/**
 * Array of base64-encoded PSBTs to join
 * @member {Array.<String>} psbts
 */
RequestsJoinPSBTsRequest.prototype.psbts = undefined;

