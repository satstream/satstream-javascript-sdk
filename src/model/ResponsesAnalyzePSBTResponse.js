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
import GithubComSatstreamSsUtilsBitcoinCliPSBTAnalysis from './GithubComSatstreamSsUtilsBitcoinCliPSBTAnalysis';

/**
 * The ResponsesAnalyzePSBTResponse model module.
 * @module model/ResponsesAnalyzePSBTResponse
 * @version 1.0.19
 */
export default class ResponsesAnalyzePSBTResponse {
  /**
   * Constructs a new <code>ResponsesAnalyzePSBTResponse</code>.
   * @alias module:model/ResponsesAnalyzePSBTResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesAnalyzePSBTResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesAnalyzePSBTResponse} obj Optional instance to populate.
   * @return {module:model/ResponsesAnalyzePSBTResponse} The populated <code>ResponsesAnalyzePSBTResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesAnalyzePSBTResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsBitcoinCliPSBTAnalysis.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesAnalyzePSBTResponse.prototype.code = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsBitcoinCliPSBTAnalysis} data
 */
ResponsesAnalyzePSBTResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesAnalyzePSBTResponse.prototype.msg = undefined;
