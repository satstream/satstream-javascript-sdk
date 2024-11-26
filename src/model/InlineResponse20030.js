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
import RunesListResponse from './RunesListResponse';
import UtilsResponseEnvelope from './UtilsResponseEnvelope';

/**
 * The InlineResponse20030 model module.
 * @module model/InlineResponse20030
 * @version 1.0.21
 */
export default class InlineResponse20030 extends UtilsResponseEnvelope {
  /**
   * Constructs a new <code>InlineResponse20030</code>.
   * @alias module:model/InlineResponse20030
   * @class
   * @extends module:model/UtilsResponseEnvelope
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>InlineResponse20030</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20030} obj Optional instance to populate.
   * @return {module:model/InlineResponse20030} The populated <code>InlineResponse20030</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20030();
      UtilsResponseEnvelope.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = RunesListResponse.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/RunesListResponse} data
 */
InlineResponse20030.prototype.data = undefined;

