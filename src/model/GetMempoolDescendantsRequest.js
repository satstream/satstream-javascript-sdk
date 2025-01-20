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
 * The GetMempoolDescendantsRequest model module.
 * @module model/GetMempoolDescendantsRequest
 * @version 1.0.44
 */
export default class GetMempoolDescendantsRequest {
  /**
   * Constructs a new <code>GetMempoolDescendantsRequest</code>.
   * @alias module:model/GetMempoolDescendantsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetMempoolDescendantsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMempoolDescendantsRequest} obj Optional instance to populate.
   * @return {module:model/GetMempoolDescendantsRequest} The populated <code>GetMempoolDescendantsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetMempoolDescendantsRequest();
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
GetMempoolDescendantsRequest.prototype.txid = undefined;

/**
 * Optional: True for detailed information, false for just txids
 * @member {Boolean} verbose
 */
GetMempoolDescendantsRequest.prototype.verbose = undefined;

