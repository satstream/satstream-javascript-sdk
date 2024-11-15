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
import GithubComSatstreamSsUtilsOrdinalsTermsRange from './GithubComSatstreamSsUtilsOrdinalsTermsRange';

/**
 * The GithubComSatstreamSsUtilsOrdinalsTerms model module.
 * @module model/GithubComSatstreamSsUtilsOrdinalsTerms
 * @version 1.0.8
 */
export default class GithubComSatstreamSsUtilsOrdinalsTerms {
  /**
   * Constructs a new <code>GithubComSatstreamSsUtilsOrdinalsTerms</code>.
   * @alias module:model/GithubComSatstreamSsUtilsOrdinalsTerms
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GithubComSatstreamSsUtilsOrdinalsTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsUtilsOrdinalsTerms} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsUtilsOrdinalsTerms} The populated <code>GithubComSatstreamSsUtilsOrdinalsTerms</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsUtilsOrdinalsTerms();
      if (data.hasOwnProperty('amount'))
        obj.amount = BigInt.constructFromObject(data['amount']);
      if (data.hasOwnProperty('cap'))
        obj.cap = BigInt.constructFromObject(data['cap']);
      if (data.hasOwnProperty('height'))
        obj.height = GithubComSatstreamSsUtilsOrdinalsTermsRange.constructFromObject(data['height']);
      if (data.hasOwnProperty('offset'))
        obj.offset = GithubComSatstreamSsUtilsOrdinalsTermsRange.constructFromObject(data['offset']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BigInt} amount
 */
GithubComSatstreamSsUtilsOrdinalsTerms.prototype.amount = undefined;

/**
 * @member {module:model/BigInt} cap
 */
GithubComSatstreamSsUtilsOrdinalsTerms.prototype.cap = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdinalsTermsRange} height
 */
GithubComSatstreamSsUtilsOrdinalsTerms.prototype.height = undefined;

/**
 * @member {module:model/GithubComSatstreamSsUtilsOrdinalsTermsRange} offset
 */
GithubComSatstreamSsUtilsOrdinalsTerms.prototype.offset = undefined;

