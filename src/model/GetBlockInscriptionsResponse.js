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
import LatestInscriptionsResponse from './LatestInscriptionsResponse';

/**
 * The GetBlockInscriptionsResponse model module.
 * @module model/GetBlockInscriptionsResponse
 * @version 1.0.39
 */
export default class GetBlockInscriptionsResponse {
  /**
   * Constructs a new <code>GetBlockInscriptionsResponse</code>.
   * @alias module:model/GetBlockInscriptionsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetBlockInscriptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockInscriptionsResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockInscriptionsResponse} The populated <code>GetBlockInscriptionsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBlockInscriptionsResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = LatestInscriptionsResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetBlockInscriptionsResponse.prototype.code = undefined;

/**
 * @member {module:model/LatestInscriptionsResponse} data
 */
GetBlockInscriptionsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetBlockInscriptionsResponse.prototype.msg = undefined;

