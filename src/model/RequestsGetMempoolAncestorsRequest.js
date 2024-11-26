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
 * The RequestsGetMempoolAncestorsRequest model module.
 * @module model/RequestsGetMempoolAncestorsRequest
 * @version 1.0.21
 */
export default class RequestsGetMempoolAncestorsRequest {
  /**
   * Constructs a new <code>RequestsGetMempoolAncestorsRequest</code>.
   * @alias module:model/RequestsGetMempoolAncestorsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsGetMempoolAncestorsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsGetMempoolAncestorsRequest} obj Optional instance to populate.
   * @return {module:model/RequestsGetMempoolAncestorsRequest} The populated <code>RequestsGetMempoolAncestorsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsGetMempoolAncestorsRequest();
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('verbose'))
        obj.verbose = ApiClient.convertToType(data['verbose'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Required: The transaction id (must be in mempool)
 * @member {String} txid
 */
RequestsGetMempoolAncestorsRequest.prototype.txid = undefined;

/**
 * Optional: True for detailed information, false for just txids
 * @member {Boolean} verbose
 */
RequestsGetMempoolAncestorsRequest.prototype.verbose = undefined;

