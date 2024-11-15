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

/**
 * The ResponsesGetBlockHeightData model module.
 * @module model/ResponsesGetBlockHeightData
 * @version 1.0.16
 */
export default class ResponsesGetBlockHeightData {
  /**
   * Constructs a new <code>ResponsesGetBlockHeightData</code>.
   * @alias module:model/ResponsesGetBlockHeightData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetBlockHeightData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetBlockHeightData} obj Optional instance to populate.
   * @return {module:model/ResponsesGetBlockHeightData} The populated <code>ResponsesGetBlockHeightData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetBlockHeightData();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} height
 */
ResponsesGetBlockHeightData.prototype.height = undefined;

