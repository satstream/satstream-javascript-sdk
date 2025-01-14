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
import OutputResponse from './OutputResponse';
import UtilsResponseEnvelope from './UtilsResponseEnvelope';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.36
 */
export default class InlineResponse2001 extends UtilsResponseEnvelope {
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @class
   * @extends module:model/UtilsResponseEnvelope
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2001();
      UtilsResponseEnvelope.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OutputResponse]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OutputResponse>} data
 */
InlineResponse2001.prototype.data = undefined;

