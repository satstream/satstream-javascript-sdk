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
 * The RequestsVerifyMessageRequest model module.
 * @module model/RequestsVerifyMessageRequest
 * @version 1.0.20
 */
export default class RequestsVerifyMessageRequest {
  /**
   * Constructs a new <code>RequestsVerifyMessageRequest</code>.
   * @alias module:model/RequestsVerifyMessageRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RequestsVerifyMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestsVerifyMessageRequest} obj Optional instance to populate.
   * @return {module:model/RequestsVerifyMessageRequest} The populated <code>RequestsVerifyMessageRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestsVerifyMessageRequest();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('signature'))
        obj.signature = ApiClient.convertToType(data['signature'], 'String');
    }
    return obj;
  }
}

/**
 * The bitcoin address to use for the signature
 * @member {String} address
 */
RequestsVerifyMessageRequest.prototype.address = undefined;

/**
 * The message that was signed
 * @member {String} message
 */
RequestsVerifyMessageRequest.prototype.message = undefined;

/**
 * The signature provided by the signer in base 64 encoding
 * @member {String} signature
 */
RequestsVerifyMessageRequest.prototype.signature = undefined;

