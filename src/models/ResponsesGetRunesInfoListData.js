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
import ResponsesRuneInfo from './ResponsesRuneInfo';

/**
 * The ResponsesGetRunesInfoListData model module.
 * @module models/ResponsesGetRunesInfoListData
 * @version 1.0
 */
export default class ResponsesGetRunesInfoListData {
  /**
   * Constructs a new <code>ResponsesGetRunesInfoListData</code>.
   * @alias module:models/ResponsesGetRunesInfoListData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetRunesInfoListData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ResponsesGetRunesInfoListData} obj Optional instance to populate.
   * @return {module:models/ResponsesGetRunesInfoListData} The populated <code>ResponsesGetRunesInfoListData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetRunesInfoListData();
      if (data.hasOwnProperty('pagination'))
        obj.pagination = ResponsesPaginationInfo.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('runes'))
        obj.runes = ApiClient.convertToType(data['runes'], [ResponsesRuneInfo]);
    }
    return obj;
  }
}

/**
 * @member {module:models/ResponsesPaginationInfo} pagination
 */
ResponsesGetRunesInfoListData.prototype.pagination = undefined;

/**
 * @member {Array.<module:models/ResponsesRuneInfo>} runes
 */
ResponsesGetRunesInfoListData.prototype.runes = undefined;

