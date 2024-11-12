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
    define(['ApiClient', 'model/ResponsesBlockHeightResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResponsesBlockHeightResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.ResponsesBlockHeightResponse = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.ResponsesBlockHeightResponseData);
  }
}(this, function(ApiClient, ResponsesBlockHeightResponseData) {
  'use strict';

  /**
   * The ResponsesBlockHeightResponse model module.
   * @module model/ResponsesBlockHeightResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>ResponsesBlockHeightResponse</code>.
   * @alias module:model/ResponsesBlockHeightResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ResponsesBlockHeightResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesBlockHeightResponse} obj Optional instance to populate.
   * @return {module:model/ResponsesBlockHeightResponse} The populated <code>ResponsesBlockHeightResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesBlockHeightResponseData.constructFromObject(data['data']);
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
   * @member {module:model/ResponsesBlockHeightResponseData} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {String} msg
   */
  exports.prototype.msg = undefined;


  return exports;

}));
