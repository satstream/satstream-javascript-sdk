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
import ResponsesBlockRange from './ResponsesBlockRange';

/**
 * The AllOfresponsesGetAddressTimeframeBalanceItemBlockRange model module.
 * @module model/AllOfresponsesGetAddressTimeframeBalanceItemBlockRange
 * @version 1.0.17
 */
export default class AllOfresponsesGetAddressTimeframeBalanceItemBlockRange extends ResponsesBlockRange {
  /**
   * Constructs a new <code>AllOfresponsesGetAddressTimeframeBalanceItemBlockRange</code>.
   * Time       time.Time  &#x60;json:\&quot;time\&quot;&#x60;
   * @alias module:model/AllOfresponsesGetAddressTimeframeBalanceItemBlockRange
   * @class
   * @extends module:model/ResponsesBlockRange
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfresponsesGetAddressTimeframeBalanceItemBlockRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfresponsesGetAddressTimeframeBalanceItemBlockRange} obj Optional instance to populate.
   * @return {module:model/AllOfresponsesGetAddressTimeframeBalanceItemBlockRange} The populated <code>AllOfresponsesGetAddressTimeframeBalanceItemBlockRange</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfresponsesGetAddressTimeframeBalanceItemBlockRange();
      ResponsesBlockRange.constructFromObject(data, obj);
    }
    return obj;
  }
}
