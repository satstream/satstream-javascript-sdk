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
import BlockchainInfo from './BlockchainInfo';

/**
 * The GetBlockchainInfoResponse model module.
 * @module model/GetBlockchainInfoResponse
 * @version 1.0.26
 */
export default class GetBlockchainInfoResponse {
  /**
   * Constructs a new <code>GetBlockchainInfoResponse</code>.
   * @alias module:model/GetBlockchainInfoResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockchainInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockchainInfoResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockchainInfoResponse} The populated <code>GetBlockchainInfoResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockchainInfoResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = BlockchainInfo.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetBlockchainInfoResponse.prototype.code = undefined;

/**
 * @member {module:model/BlockchainInfo} data
 */
GetBlockchainInfoResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetBlockchainInfoResponse.prototype.msg = undefined;

