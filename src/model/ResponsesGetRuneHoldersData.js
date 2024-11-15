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
import ResponsesPaginationInfo from './ResponsesPaginationInfo';
import ResponsesRuneHolder from './ResponsesRuneHolder';

/**
 * The ResponsesGetRuneHoldersData model module.
 * @module model/ResponsesGetRuneHoldersData
 * @version 1.0.14
 */
export default class ResponsesGetRuneHoldersData {
  /**
   * Constructs a new <code>ResponsesGetRuneHoldersData</code>.
   * @alias module:model/ResponsesGetRuneHoldersData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetRuneHoldersData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetRuneHoldersData} obj Optional instance to populate.
   * @return {module:model/ResponsesGetRuneHoldersData} The populated <code>ResponsesGetRuneHoldersData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetRuneHoldersData();
      if (data.hasOwnProperty('holders'))
        obj.holders = ApiClient.convertToType(data['holders'], [ResponsesRuneHolder]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = ResponsesPaginationInfo.constructFromObject(data['pagination']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ResponsesRuneHolder>} holders
 */
ResponsesGetRuneHoldersData.prototype.holders = undefined;

/**
 * @member {module:model/ResponsesPaginationInfo} pagination
 */
ResponsesGetRuneHoldersData.prototype.pagination = undefined;

