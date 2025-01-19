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
import TestMempoolAcceptResult from './TestMempoolAcceptResult';

/**
 * The TestMempoolAcceptResponse model module.
 * @module model/TestMempoolAcceptResponse
 * @version 1.0.43
 */
export default class TestMempoolAcceptResponse {
  /**
   * Constructs a new <code>TestMempoolAcceptResponse</code>.
   * @alias module:model/TestMempoolAcceptResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TestMempoolAcceptResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestMempoolAcceptResponse} obj Optional instance to populate.
   * @return {module:model/TestMempoolAcceptResponse} The populated <code>TestMempoolAcceptResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TestMempoolAcceptResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [TestMempoolAcceptResult]);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
TestMempoolAcceptResponse.prototype.code = undefined;

/**
 * @member {Array.<module:model/TestMempoolAcceptResult>} data
 */
TestMempoolAcceptResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
TestMempoolAcceptResponse.prototype.msg = undefined;

