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
import TxSpendingPrevoutResult from './TxSpendingPrevoutResult';
import UtilsResponseEnvelope from './UtilsResponseEnvelope';

/**
 * The InlineResponse20034 model module.
 * @module model/InlineResponse20034
 * @version 1.0.23
 */
export default class InlineResponse20034 extends UtilsResponseEnvelope {
  /**
   * Constructs a new <code>InlineResponse20034</code>.
   * @alias module:model/InlineResponse20034
   * @class
   * @extends module:model/UtilsResponseEnvelope
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>InlineResponse20034</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20034} obj Optional instance to populate.
   * @return {module:model/InlineResponse20034} The populated <code>InlineResponse20034</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20034();
      UtilsResponseEnvelope.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [TxSpendingPrevoutResult]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TxSpendingPrevoutResult>} data
 */
InlineResponse20034.prototype.data = undefined;

