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
 * The ResponsesGetFeesData model module.
 * @module model/ResponsesGetFeesData
 * @version 1.0
 */
export default class ResponsesGetFeesData {
  /**
   * Constructs a new <code>ResponsesGetFeesData</code>.
   * @alias module:model/ResponsesGetFeesData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetFeesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetFeesData} obj Optional instance to populate.
   * @return {module:model/ResponsesGetFeesData} The populated <code>ResponsesGetFeesData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetFeesData();
      if (data.hasOwnProperty('confirmation_blocks'))
        obj.confirmationBlocks = ApiClient.convertToType(data['confirmation_blocks'], 'Number');
      if (data.hasOwnProperty('fee_rate_in_btc'))
        obj.feeRateInBtc = ApiClient.convertToType(data['fee_rate_in_btc'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} confirmationBlocks
 */
ResponsesGetFeesData.prototype.confirmationBlocks = undefined;

/**
 * @member {Number} feeRateInBtc
 */
ResponsesGetFeesData.prototype.feeRateInBtc = undefined;

