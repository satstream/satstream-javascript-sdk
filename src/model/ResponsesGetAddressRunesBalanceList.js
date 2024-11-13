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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResponsesGetAddressRunesBalanceListData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResponsesGetAddressRunesBalanceListData'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.ResponsesGetAddressRunesBalanceList = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.ResponsesGetAddressRunesBalanceListData);
  }
}(this, function(ApiClient, ResponsesGetAddressRunesBalanceListData) {
  'use strict';

  /**
   * The ResponsesGetAddressRunesBalanceList model module.
   * @module model/ResponsesGetAddressRunesBalanceList
   * @version 1.0
   */

  /**
   * Constructs a new <code>ResponsesGetAddressRunesBalanceList</code>.
   * @alias module:model/ResponsesGetAddressRunesBalanceList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ResponsesGetAddressRunesBalanceList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressRunesBalanceList} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressRunesBalanceList} The populated <code>ResponsesGetAddressRunesBalanceList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetAddressRunesBalanceListData.constructFromObject(data['data']);
      if (data.hasOwnProperty('msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {module:model/ResponsesGetAddressRunesBalanceListData} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {String} msg
   */
  exports.prototype.msg = undefined;


  return exports;

}));
