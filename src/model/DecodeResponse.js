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
import DecodedInscription from './DecodedInscription';
import RunestoneData from './RunestoneData';

/**
 * The DecodeResponse model module.
 * @module model/DecodeResponse
 * @version 1.0.45
 */
export default class DecodeResponse {
  /**
   * Constructs a new <code>DecodeResponse</code>.
   * @alias module:model/DecodeResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodeResponse} obj Optional instance to populate.
   * @return {module:model/DecodeResponse} The populated <code>DecodeResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodeResponse();
      if (data.hasOwnProperty('inscriptions'))
        obj.inscriptions = ApiClient.convertToType(data['inscriptions'], [DecodedInscription]);
      if (data.hasOwnProperty('runestone'))
        obj.runestone = RunestoneData.constructFromObject(data['runestone']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DecodedInscription>} inscriptions
 */
DecodeResponse.prototype.inscriptions = undefined;

/**
 * @member {module:model/RunestoneData} runestone
 */
DecodeResponse.prototype.runestone = undefined;

