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
import RawTx1 from './RawTx1';
import UtilsResponseEnvelope from './UtilsResponseEnvelope';

/**
 * The InlineResponse20039 model module.
 * @module model/InlineResponse20039
 * @version 1.0.20
 */
export default class InlineResponse20039 extends UtilsResponseEnvelope {
  /**
   * Constructs a new <code>InlineResponse20039</code>.
   * @alias module:model/InlineResponse20039
   * @class
   * @extends module:model/UtilsResponseEnvelope
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>InlineResponse20039</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20039} obj Optional instance to populate.
   * @return {module:model/InlineResponse20039} The populated <code>InlineResponse20039</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20039();
      UtilsResponseEnvelope.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = RawTx1.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/RawTx1} data
 */
InlineResponse20039.prototype.data = undefined;

