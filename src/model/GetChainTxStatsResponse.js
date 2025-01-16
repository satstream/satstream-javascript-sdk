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
import ChainTxStats from './ChainTxStats';

/**
 * The GetChainTxStatsResponse model module.
 * @module model/GetChainTxStatsResponse
 * @version 1.0.38
 */
export default class GetChainTxStatsResponse {
  /**
   * Constructs a new <code>GetChainTxStatsResponse</code>.
   * @alias module:model/GetChainTxStatsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetChainTxStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetChainTxStatsResponse} obj Optional instance to populate.
   * @return {module:model/GetChainTxStatsResponse} The populated <code>GetChainTxStatsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetChainTxStatsResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ChainTxStats.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetChainTxStatsResponse.prototype.code = undefined;

/**
 * @member {module:model/ChainTxStats} data
 */
GetChainTxStatsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetChainTxStatsResponse.prototype.msg = undefined;

