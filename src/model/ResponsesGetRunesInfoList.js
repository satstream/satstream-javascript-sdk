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
import ResponsesGetRunesInfoListData from './ResponsesGetRunesInfoListData';

/**
 * The ResponsesGetRunesInfoList model module.
 * @module model/ResponsesGetRunesInfoList
 * @version 1.0.13
 */
export default class ResponsesGetRunesInfoList {
  /**
   * Constructs a new <code>ResponsesGetRunesInfoList</code>.
   * @alias module:model/ResponsesGetRunesInfoList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetRunesInfoList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetRunesInfoList} obj Optional instance to populate.
   * @return {module:model/ResponsesGetRunesInfoList} The populated <code>ResponsesGetRunesInfoList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetRunesInfoList();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetRunesInfoListData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ResponsesGetRunesInfoList.prototype.code = undefined;

/**
 * @member {module:model/ResponsesGetRunesInfoListData} data
 */
ResponsesGetRunesInfoList.prototype.data = undefined;

/**
 * @member {String} msg
 */
ResponsesGetRunesInfoList.prototype.msg = undefined;

