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
import InscriptionData from './InscriptionData';

/**
 * The DecodedInscription model module.
 * @module model/DecodedInscription
 * @version 1.0.45
 */
export default class DecodedInscription {
  /**
   * Constructs a new <code>DecodedInscription</code>.
   * @alias module:model/DecodedInscription
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecodedInscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodedInscription} obj Optional instance to populate.
   * @return {module:model/DecodedInscription} The populated <code>DecodedInscription</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodedInscription();
      if (data.hasOwnProperty('input'))
        obj.input = ApiClient.convertToType(data['input'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('payload'))
        obj.payload = InscriptionData.constructFromObject(data['payload']);
      if (data.hasOwnProperty('pushnum'))
        obj.pushnum = ApiClient.convertToType(data['pushnum'], 'Boolean');
      if (data.hasOwnProperty('stutter'))
        obj.stutter = ApiClient.convertToType(data['stutter'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Number} input
 */
DecodedInscription.prototype.input = undefined;

/**
 * @member {Number} offset
 */
DecodedInscription.prototype.offset = undefined;

/**
 * @member {module:model/InscriptionData} payload
 */
DecodedInscription.prototype.payload = undefined;

/**
 * @member {Boolean} pushnum
 */
DecodedInscription.prototype.pushnum = undefined;

/**
 * @member {Boolean} stutter
 */
DecodedInscription.prototype.stutter = undefined;

