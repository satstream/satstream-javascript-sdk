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
    define(['ApiClient', 'model/BlocksAddressMempoolTxs', 'model/BlocksError', 'model/BlocksMempoolTransactions', 'model/BlocksMempoolTxInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BlocksAddressMempoolTxs'), require('../model/BlocksError'), require('../model/BlocksMempoolTransactions'), require('../model/BlocksMempoolTxInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.MempoolApi = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.BlocksAddressMempoolTxs, root.SatstreamApi.BlocksError, root.SatstreamApi.BlocksMempoolTransactions, root.SatstreamApi.BlocksMempoolTxInfo);
  }
}(this, function(ApiClient, BlocksAddressMempoolTxs, BlocksError, BlocksMempoolTransactions, BlocksMempoolTxInfo) {
  'use strict';

  /**
   * Mempool service.
   * @module api/MempoolApi
   * @version 1.0
   */

  /**
   * Constructs a new MempoolApi. 
   * @alias module:api/MempoolApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAddressMempoolTransactions operation.
     * @callback module:api/MempoolApi~getAddressMempoolTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlocksAddressMempoolTxs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address mempool transactions
     * Get all mempool transactions for a specific address
     * @param {String} address Bitcoin address
     * @param {module:api/MempoolApi~getAddressMempoolTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlocksAddressMempoolTxs}
     */
    this.getAddressMempoolTransactions = function(address, callback) {
      var postBody = null;

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressMempoolTransactions");
      }


      var pathParams = {
        'address': address
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
      var returnType = BlocksAddressMempoolTxs;

      return this.apiClient.callApi(
        '/mempool/addresses/{address}/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMempoolTransactionInfo operation.
     * @callback module:api/MempoolApi~getMempoolTransactionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlocksMempoolTxInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mempool transaction info
     * Get information about a specific transaction in the mempool
     * @param {String} txid Transaction ID
     * @param {module:api/MempoolApi~getMempoolTransactionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlocksMempoolTxInfo}
     */
    this.getMempoolTransactionInfo = function(txid, callback) {
      var postBody = null;

      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getMempoolTransactionInfo");
      }


      var pathParams = {
        'txid': txid
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
      var returnType = BlocksMempoolTxInfo;

      return this.apiClient.callApi(
        '/mempool/transactions/{txid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMempoolTransactions operation.
     * @callback module:api/MempoolApi~getMempoolTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlocksMempoolTransactions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mempool transactions
     * Get all transactions currently in the mempool
     * @param {module:api/MempoolApi~getMempoolTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlocksMempoolTransactions}
     */
    this.getMempoolTransactions = function(callback) {
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
      var returnType = BlocksMempoolTransactions;

      return this.apiClient.callApi(
        '/mempool/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
