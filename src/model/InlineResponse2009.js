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
    define(['ApiClient', 'model/ResponsesBaseResponse', 'model/ResponsesSendRawTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResponsesBaseResponse'), require('./ResponsesSendRawTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.InlineResponse2009 = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.ResponsesBaseResponse, root.SatstreamApi.ResponsesSendRawTransaction);
  }
}(this, function(ApiClient, ResponsesBaseResponse, ResponsesSendRawTransaction) {
  'use strict';

  /**
   * The InlineResponse2009 model module.
   * @module model/InlineResponse2009
   * @version 1.0
   */

  /**
   * Constructs a new <code>InlineResponse2009</code>.
   * @alias module:model/InlineResponse2009
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesSendRawTransaction.constructFromObject(data['data']);
      if (data.hasOwnProperty('responses.BaseResponse'))
        obj.responsesBaseResponse = ResponsesBaseResponse.constructFromObject(data['responses.BaseResponse']);
    }
    return obj;
  }

  /**
   * @member {module:model/ResponsesSendRawTransaction} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {module:model/ResponsesBaseResponse} responsesBaseResponse
   */
  exports.prototype.responsesBaseResponse = undefined;


  return exports;

}));