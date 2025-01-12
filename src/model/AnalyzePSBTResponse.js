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
import PSBTAnalysis from './PSBTAnalysis';

/**
 * The AnalyzePSBTResponse model module.
 * @module model/AnalyzePSBTResponse
 * @version 1.0.32
 */
export default class AnalyzePSBTResponse {
  /**
   * Constructs a new <code>AnalyzePSBTResponse</code>.
   * @alias module:model/AnalyzePSBTResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnalyzePSBTResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyzePSBTResponse} obj Optional instance to populate.
   * @return {module:model/AnalyzePSBTResponse} The populated <code>AnalyzePSBTResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnalyzePSBTResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = PSBTAnalysis.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
AnalyzePSBTResponse.prototype.code = undefined;

/**
 * @member {module:model/PSBTAnalysis} data
 */
AnalyzePSBTResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
AnalyzePSBTResponse.prototype.msg = undefined;

