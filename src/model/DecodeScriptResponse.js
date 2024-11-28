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
import DecodedScript from './DecodedScript';

/**
 * The DecodeScriptResponse model module.
 * @module model/DecodeScriptResponse
 * @version 1.0.32
 */
export default class DecodeScriptResponse {
  /**
   * Constructs a new <code>DecodeScriptResponse</code>.
   * @alias module:model/DecodeScriptResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodeScriptResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodeScriptResponse} obj Optional instance to populate.
   * @return {module:model/DecodeScriptResponse} The populated <code>DecodeScriptResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodeScriptResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = DecodedScript.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
DecodeScriptResponse.prototype.code = undefined;

/**
 * @member {module:model/DecodedScript} data
 */
DecodeScriptResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
DecodeScriptResponse.prototype.msg = undefined;

