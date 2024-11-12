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
    define(['ApiClient', 'model/GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse', 'model/InlineResponse2005', 'model/ResponsesBlockHeightResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse'), require('../model/InlineResponse2005'), require('../model/ResponsesBlockHeightResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.BlocksApi = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse, root.SatstreamApi.InlineResponse2005, root.SatstreamApi.ResponsesBlockHeightResponse);
  }
}(this, function(ApiClient, GithubComSatstreamSsApiServerApiBlocksResponsesBaseResponse, InlineResponse2005, ResponsesBlockHeightResponse) {
  'use strict';

  /**
   * Blocks service.
   * @module api/BlocksApi
   * @version 1.0
   */

  /**
   * Constructs a new BlocksApi. 
   * @alias module:api/BlocksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBlockByHash operation.
     * @callback module:api/BlocksApi~getBlockByHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block by hash
     * Get information about a specific block by its hash
     * @param {String} hash Block hash
     * @param {module:api/BlocksApi~getBlockByHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.getBlockByHash = function(hash, callback) {
      var postBody = null;

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getBlockByHash");
      }


      var pathParams = {
        'hash': hash
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/blocks/hash/{hash}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBlockInfo operation.
     * @callback module:api/BlocksApi~getBlockInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block info
     * Get information about a specific block by height
     * @param {Number} height Block height
     * @param {module:api/BlocksApi~getBlockInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.getBlockInfo = function(height, callback) {
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockInfo");
      }


      var pathParams = {
        'height': height
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/blocks/{height}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBlockTransactions operation.
     * @callback module:api/BlocksApi~getBlockTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block transactions
     * Get transactions for a specific block height
     * @param {Number} height Block height
     * @param {module:api/BlocksApi~getBlockTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.getBlockTransactions = function(height, callback) {
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockTransactions");
      }


      var pathParams = {
        'height': height
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/blocks/{height}/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrentBlockHeight operation.
     * @callback module:api/BlocksApi~getCurrentBlockHeightCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesBlockHeightResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current block height
     * Get the current block height of the Bitcoin blockchain
     * @param {module:api/BlocksApi~getCurrentBlockHeightCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponsesBlockHeightResponse}
     */
    this.getCurrentBlockHeight = function(callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponsesBlockHeightResponse;

      return this.apiClient.callApi(
        '/blocks/current-height', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
