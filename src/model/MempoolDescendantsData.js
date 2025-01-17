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
import MempoolEntry from './MempoolEntry';

/**
 * The MempoolDescendantsData model module.
 * @module model/MempoolDescendantsData
 * @version 1.0.45
 */
export default class MempoolDescendantsData {
  /**
   * Constructs a new <code>MempoolDescendantsData</code>.
   * @alias module:model/MempoolDescendantsData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MempoolDescendantsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MempoolDescendantsData} obj Optional instance to populate.
   * @return {module:model/MempoolDescendantsData} The populated <code>MempoolDescendantsData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MempoolDescendantsData();
      if (data.hasOwnProperty('detailed'))
        obj.detailed = ApiClient.convertToType(data['detailed'], {'String': MempoolEntry});
      if (data.hasOwnProperty('txids'))
        obj.txids = ApiClient.convertToType(data['txids'], ['String']);
    }
    return obj;
  }
}

/**
 * Only if verbose is true
 * @member {Object.<String, module:model/MempoolEntry>} detailed
 */
MempoolDescendantsData.prototype.detailed = undefined;

/**
 * Only if verbose is false
 * @member {Array.<String>} txids
 */
MempoolDescendantsData.prototype.txids = undefined;

