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
    define(['ApiClient', 'model/InlineResponse2006', 'model/ResponsesErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2006'), require('../model/ResponsesErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.RunesApi = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.InlineResponse2006, root.SatstreamApi.ResponsesErrorResponse);
  }
}(this, function(ApiClient, InlineResponse2006, ResponsesErrorResponse) {
  'use strict';

  /**
   * Runes service.
   * @module api/RunesApi
   * @version 1.0
   */

  /**
   * Constructs a new RunesApi. 
   * @alias module:api/RunesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getRunesHolders operation.
     * @callback module:api/RunesApi~getRunesHoldersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rune holders
     * Get a list of addresses holding a specific rune
     * @param {String} runeId Rune ID
     * @param {module:api/RunesApi~getRunesHoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.getRunesHolders = function(runeId, callback) {
      var postBody = null;

      // verify the required parameter 'runeId' is set
      if (runeId === undefined || runeId === null) {
        throw new Error("Missing the required parameter 'runeId' when calling getRunesHolders");
      }


      var pathParams = {
        'runeId': runeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/runes/{runeId}/holders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRunesInfo operation.
     * @callback module:api/RunesApi~getRunesInfoCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rune info
     * Get detailed information about a specific rune
     * @param {String} runeId Rune ID
     * @param {module:api/RunesApi~getRunesInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getRunesInfo = function(runeId, callback) {
      var postBody = null;

      // verify the required parameter 'runeId' is set
      if (runeId === undefined || runeId === null) {
        throw new Error("Missing the required parameter 'runeId' when calling getRunesInfo");
      }


      var pathParams = {
        'runeId': runeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/runes/{runeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRunesInfoList operation.
     * @callback module:api/RunesApi~getRunesInfoListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get runes info list
     * Get information about all runes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default: 1)
     * @param {Number} opts.perPage Items per page (default: 10)
     * @param {module:api/RunesApi~getRunesInfoListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.getRunesInfoList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/runes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
