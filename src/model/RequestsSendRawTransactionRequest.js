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
 * The RequestsSendRawTransactionRequest model module.
 * @module model/RequestsSendRawTransactionRequest
 * @version 1.0.19
 */
export default class RequestsSendRawTransactionRequest {
  /**
   * Constructs a new <code>RequestsSendRawTransactionRequest</code>.
   * @alias module:model/RequestsSendRawTransactionRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsSendRawTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsSendRawTransactionRequest} obj Optional instance to populate.
   * @return {module:model/RequestsSendRawTransactionRequest} The populated <code>RequestsSendRawTransactionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsSendRawTransactionRequest();
      if (data.hasOwnProperty('hex_string'))
        obj.hexString = ApiClient.convertToType(data['hex_string'], 'String');
      if (data.hasOwnProperty('max_fee_rate'))
        obj.maxFeeRate = ApiClient.convertToType(data['max_fee_rate'], 'Number');
    }
    return obj;
  }
}

/**
 * The hex string of the raw transaction
 * @member {String} hexString
 */
RequestsSendRawTransactionRequest.prototype.hexString = undefined;

/**
 * Optional: Reject transactions whose fee rate is higher than this value (BTC/kvB)
 * @member {Number} maxFeeRate
 */
RequestsSendRawTransactionRequest.prototype.maxFeeRate = undefined;
