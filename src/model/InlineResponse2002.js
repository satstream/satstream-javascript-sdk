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
import UTXOSetInfo from './UTXOSetInfo';
import UtilsResponseEnvelope from './UtilsResponseEnvelope';

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.0.32
 */
export default class InlineResponse2002 extends UtilsResponseEnvelope {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   * @extends module:model/UtilsResponseEnvelope
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2002();
      UtilsResponseEnvelope.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = UTXOSetInfo.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/UTXOSetInfo} data
 */
InlineResponse2002.prototype.data = undefined;
