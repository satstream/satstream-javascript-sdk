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
    define(['ApiClient', 'model/GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse', 'model/ResponsesGetFeesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse'), require('./ResponsesGetFeesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.InlineResponse2007 = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse, root.SatstreamApi.ResponsesGetFeesResponse);
  }
}(this, function(ApiClient, GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse, ResponsesGetFeesResponse) {
  'use strict';

  /**
   * The InlineResponse2007 model module.
   * @module model/InlineResponse2007
   * @version 1.0
   */

  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * @alias module:model/InlineResponse2007
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = ResponsesGetFeesResponse.constructFromObject(data['data']);
      if (data.hasOwnProperty('github_com_satstream_ss-api_server_api_blocks_responses.BaseResponse'))
        obj.githubComSatstreamSsApiServerApiBlocksResponsesBaseResponse = GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse.constructFromObject(data['github_com_satstream_ss-api_server_api_blocks_responses.BaseResponse']);
    }
    return obj;
  }

  /**
   * @member {module:model/ResponsesGetFeesResponse} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {module:model/GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse} githubComSatstreamSsApiServerApiBlocksResponsesBaseResponse
   */
  exports.prototype.githubComSatstreamSsApiServerApiBlocksResponsesBaseResponse = undefined;


  return exports;

}));
