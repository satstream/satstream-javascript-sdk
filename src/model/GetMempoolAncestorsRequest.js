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
 * The GetMempoolAncestorsRequest model module.
 * @module model/GetMempoolAncestorsRequest
 * @version 1.0.32
 */
export default class GetMempoolAncestorsRequest {
  /**
   * Constructs a new <code>GetMempoolAncestorsRequest</code>.
   * @alias module:model/GetMempoolAncestorsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetMempoolAncestorsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMempoolAncestorsRequest} obj Optional instance to populate.
   * @return {module:model/GetMempoolAncestorsRequest} The populated <code>GetMempoolAncestorsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetMempoolAncestorsRequest();
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
GetMempoolAncestorsRequest.prototype.txid = undefined;

/**
 * Optional: True for detailed information, false for just txids
 * @member {Boolean} verbose
 */
GetMempoolAncestorsRequest.prototype.verbose = undefined;

