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
import LatestInscriptionsResponse from './LatestInscriptionsResponse';

/**
 * The GetLatestInscriptionsResponse model module.
 * @module model/GetLatestInscriptionsResponse
 * @version 1.0.26
 */
export default class GetLatestInscriptionsResponse {
  /**
   * Constructs a new <code>GetLatestInscriptionsResponse</code>.
   * @alias module:model/GetLatestInscriptionsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLatestInscriptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLatestInscriptionsResponse} obj Optional instance to populate.
   * @return {module:model/GetLatestInscriptionsResponse} The populated <code>GetLatestInscriptionsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLatestInscriptionsResponse();
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
GetLatestInscriptionsResponse.prototype.code = undefined;

/**
 * @member {module:model/LatestInscriptionsResponse} data
 */
GetLatestInscriptionsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetLatestInscriptionsResponse.prototype.msg = undefined;

