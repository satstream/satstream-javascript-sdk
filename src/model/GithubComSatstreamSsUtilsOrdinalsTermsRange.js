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
import BigInt from './BigInt';

/**
 * The GithubComSatstreamSsUtilsOrdinalsTermsRange model module.
 * @module model/GithubComSatstreamSsUtilsOrdinalsTermsRange
 * @version 1.0.0
 */
export default class GithubComSatstreamSsUtilsOrdinalsTermsRange {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdinalsTermsRange</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdinalsTermsRange
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdinalsTermsRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdinalsTermsRange} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdinalsTermsRange} The populated <code>GithubComSatstreamSsUtilsOrdinalsTermsRange</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdinalsTermsRange();
      if (data.hasOwnProperty('end'))
        obj.end = BigInt.constructFromObject(data['end']);
      if (data.hasOwnProperty('start'))
        obj.start = BigInt.constructFromObject(data['start']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BigInt} end
 */
GithubComSatstreamSsUtilsOrdinalsTermsRange.prototype.end = undefined;

/**
 * @member {module:model/BigInt} start
 */
GithubComSatstreamSsUtilsOrdinalsTermsRange.prototype.start = undefined;

