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
 * The GetNetworkHashPSRequest model module.
 * @module model/GetNetworkHashPSRequest
 * @version 1.0.36
 */
export default class GetNetworkHashPSRequest {
  /**
   * Constructs a new <code>GetNetworkHashPSRequest</code>.
   * @alias module:model/GetNetworkHashPSRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetNetworkHashPSRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetNetworkHashPSRequest} obj Optional instance to populate.
   * @return {module:model/GetNetworkHashPSRequest} The populated <code>GetNetworkHashPSRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetNetworkHashPSRequest();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('nblocks'))
        obj.nblocks = ApiClient.convertToType(data['nblocks'], 'Number');
    }
    return obj;
  }
}

/**
 * Optional: To estimate at the time of the given height (default=-1)
 * @member {Number} height
 */
GetNetworkHashPSRequest.prototype.height = undefined;

/**
 * Optional: The number of blocks (default=120, -1 for since last difficulty change)
 * @member {Number} nblocks
 */
GetNetworkHashPSRequest.prototype.nblocks = undefined;

