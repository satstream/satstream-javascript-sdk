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
import Block1 from './Block1';
import UtilsResponseEnvelope from './UtilsResponseEnvelope';

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1.0.23
 */
export default class InlineResponse2003 extends UtilsResponseEnvelope {
  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * @alias module:model/InlineResponse2003
   * @class
   * @extends module:model/UtilsResponseEnvelope
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2003();
      UtilsResponseEnvelope.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = Block1.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Block1} data
 */
InlineResponse2003.prototype.data = undefined;

