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
import ResponsesGetBlockHeightData from './ResponsesGetBlockHeightData';

/**
 * The ResponsesGetBlockHeight model module.
 * @module model/ResponsesGetBlockHeight
 * @version 1.0.16
 */
export default class ResponsesGetBlockHeight {
  /**
   * Constructs a new <code>ResponsesGetBlockHeight</code>.
   * @alias module:model/ResponsesGetBlockHeight
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetBlockHeight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetBlockHeight} obj Optional instance to populate.
   * @return {module:model/ResponsesGetBlockHeight} The populated <code>ResponsesGetBlockHeight</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetBlockHeight();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetBlockHeightData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetBlockHeight.prototype.code = undefined;

/**
 * @member {module:model/ResponsesGetBlockHeightData} data
 */
ResponsesGetBlockHeight.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetBlockHeight.prototype.msg = undefined;

