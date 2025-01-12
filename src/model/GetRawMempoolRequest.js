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
 * The GetRawMempoolRequest model module.
 * @module model/GetRawMempoolRequest
 * @version 1.0.34
 */
export default class GetRawMempoolRequest {
  /**
   * Constructs a new <code>GetRawMempoolRequest</code>.
   * @alias module:model/GetRawMempoolRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRawMempoolRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRawMempoolRequest} obj Optional instance to populate.
   * @return {module:model/GetRawMempoolRequest} The populated <code>GetRawMempoolRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRawMempoolRequest();
      if (data.hasOwnProperty('mempool_sequence'))
        obj.mempoolSequence = ApiClient.convertToType(data['mempool_sequence'], 'Boolean');
      if (data.hasOwnProperty('verbose'))
        obj.verbose = ApiClient.convertToType(data['verbose'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Optional: If verbose=false, returns txids with mempool sequence number
 * @member {Boolean} mempoolSequence
 */
GetRawMempoolRequest.prototype.mempoolSequence = undefined;

/**
 * Optional: True for detailed information, false for just txids
 * @member {Boolean} verbose
 */
GetRawMempoolRequest.prototype.verbose = undefined;

