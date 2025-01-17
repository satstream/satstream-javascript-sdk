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
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import InscriptionResponse from './InscriptionResponse';

/**
 * The GetInscriptionChildResponse model module.
 * @module model/GetInscriptionChildResponse
 * @version 1.0.45
 */
export default class GetInscriptionChildResponse {
  /**
   * Constructs a new <code>GetInscriptionChildResponse</code>.
   * @alias module:model/GetInscriptionChildResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetInscriptionChildResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetInscriptionChildResponse} obj Optional instance to populate.
   * @return {module:model/GetInscriptionChildResponse} The populated <code>GetInscriptionChildResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetInscriptionChildResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = InscriptionResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
GetInscriptionChildResponse.prototype.code = undefined;

/**
 * @member {module:model/InscriptionResponse} data
 */
GetInscriptionChildResponse.prototype.data = undefined;

/**
 * @member {String} msg
 */
GetInscriptionChildResponse.prototype.msg = undefined;

