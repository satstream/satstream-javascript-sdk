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
    define(['ApiClient', 'model/GithubComSatstreamSsUtilsRpcBlock'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GithubComSatstreamSsUtilsRpcBlock'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.ResponsesGetBlockInfo = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.GithubComSatstreamSsUtilsRpcBlock);
  }
}(this, function(ApiClient, GithubComSatstreamSsUtilsRpcBlock) {
  'use strict';

  /**
   * The ResponsesGetBlockInfo model module.
   * @module model/ResponsesGetBlockInfo
   * @version 1.0
   */

  /**
   * Constructs a new <code>ResponsesGetBlockInfo</code>.
   * @alias module:model/ResponsesGetBlockInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ResponsesGetBlockInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetBlockInfo} obj Optional instance to populate.
   * @return {module:model/ResponsesGetBlockInfo} The populated <code>ResponsesGetBlockInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = GithubComSatstreamSsUtilsRpcBlock.constructFromObject(data['data']);
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
   * @member {module:model/GithubComSatstreamSsUtilsRpcBlock} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {String} msg
   */
  exports.prototype.msg = undefined;


  return exports;

}));
