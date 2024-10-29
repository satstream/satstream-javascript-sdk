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
    define(['ApiClient', 'model/SsApiServerApiRunesResponsesErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SsApiServerApiRunesResponsesErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.RunesApi = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.SsApiServerApiRunesResponsesErrorResponse);
  }
}(this, function(ApiClient, SsApiServerApiRunesResponsesErrorResponse) {
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
     * Callback function to receive the result of the runesGet operation.
     * @callback module:api/RunesApi~runesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get runes info list
     * Get information about all runes
     * @param {module:api/RunesApi~runesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.runesGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
        '/runes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runesRuneIdGet operation.
     * @callback module:api/RunesApi~runesRuneIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rune info
     * Get detailed information about a specific rune
     * @param {String} runeId Rune ID
     * @param {module:api/RunesApi~runesRuneIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.runesRuneIdGet = function(runeId, callback) {
      var postBody = null;

      // verify the required parameter 'runeId' is set
      if (runeId === undefined || runeId === null) {
        throw new Error("Missing the required parameter 'runeId' when calling runesRuneIdGet");
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
     * Callback function to receive the result of the runesRuneIdHoldersGet operation.
     * @callback module:api/RunesApi~runesRuneIdHoldersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rune holders
     * Get a list of addresses holding a specific rune
     * @param {String} runeId Rune ID
     * @param {module:api/RunesApi~runesRuneIdHoldersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.runesRuneIdHoldersGet = function(runeId, callback) {
      var postBody = null;

      // verify the required parameter 'runeId' is set
      if (runeId === undefined || runeId === null) {
        throw new Error("Missing the required parameter 'runeId' when calling runesRuneIdHoldersGet");
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
     * Callback function to receive the result of the runesStatusGet operation.
     * @callback module:api/RunesApi~runesStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get runes status
     * Get the current status of the runes system
     * @param {module:api/RunesApi~runesStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.runesStatusGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
        '/runes/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));