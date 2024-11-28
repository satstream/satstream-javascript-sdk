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
import InscriptionResponse from './InscriptionResponse';

/**
 * The FetchInscriptionsResponse model module.
 * @module model/FetchInscriptionsResponse
 * @version 1.0.32
 */
export default class FetchInscriptionsResponse {
  /**
   * Constructs a new <code>FetchInscriptionsResponse</code>.
   * @alias module:model/FetchInscriptionsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FetchInscriptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FetchInscriptionsResponse} obj Optional instance to populate.
   * @return {module:model/FetchInscriptionsResponse} The populated <code>FetchInscriptionsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FetchInscriptionsResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [InscriptionResponse]);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
FetchInscriptionsResponse.prototype.code = undefined;

/**
 * @member {Array.<module:model/InscriptionResponse>} data
 */
FetchInscriptionsResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
FetchInscriptionsResponse.prototype.msg = undefined;

