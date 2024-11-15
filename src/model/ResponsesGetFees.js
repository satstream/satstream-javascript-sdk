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
import ResponsesGetFeesData from './ResponsesGetFeesData';

/**
 * The ResponsesGetFees model module.
 * @module model/ResponsesGetFees
 * @version 1.0.15
 */
export default class ResponsesGetFees {
  /**
   * Constructs a new <code>ResponsesGetFees</code>.
   * @alias module:model/ResponsesGetFees
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetFees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetFees} obj Optional instance to populate.
   * @return {module:model/ResponsesGetFees} The populated <code>ResponsesGetFees</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetFees();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetFeesData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetFees.prototype.code = undefined;

/**
 * @member {module:model/ResponsesGetFeesData} data
 */
ResponsesGetFees.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetFees.prototype.msg = undefined;

