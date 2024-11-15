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
import ApiClient from "../ApiClient";
import GithubComSatstreamSsApiServerApiBlocksResponsesError from '../model/GithubComSatstreamSsApiServerApiBlocksResponsesError';
import ResponsesGetBlockByHash from '../model/ResponsesGetBlockByHash';
import ResponsesGetBlockHeight from '../model/ResponsesGetBlockHeight';
import ResponsesGetBlockInfo from '../model/ResponsesGetBlockInfo';
import ResponsesGetBlockTransactions from '../model/ResponsesGetBlockTransactions';

/**
* Blocks service.
* @module api/BlocksApi
* @version 1.0.10
*/
export default class BlocksApi {

    /**
    * Constructs a new BlocksApi. 
    * @alias module:api/BlocksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getBlockByHash operation.
     * @callback moduleapi/BlocksApi~getBlockByHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetBlockByHash{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block by hash
     * Get information about a specific block by its hash
     * @param {String} hash Block hash
     * @param {module:api/BlocksApi~getBlockByHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockByHash(hash, callback) {
      
      let postBody = null;
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getBlockByHash");
      }

      let pathParams = {
        'hash': hash
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponsesGetBlockByHash;

      return this.apiClient.callApi(
        '/blocks/hash/{hash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockInfo operation.
     * @callback moduleapi/BlocksApi~getBlockInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetBlockInfo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block info
     * Get information about a specific block by height
     * @param {Number} height Block height
     * @param {module:api/BlocksApi~getBlockInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockInfo(height, callback) {
      
      let postBody = null;
      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockInfo");
      }

      let pathParams = {
        'height': height
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponsesGetBlockInfo;

      return this.apiClient.callApi(
        '/blocks/{height}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockTransactions operation.
     * @callback moduleapi/BlocksApi~getBlockTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetBlockTransactions{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block transactions
     * Get transactions for a specific block height
     * @param {Number} height Block height
     * @param {module:api/BlocksApi~getBlockTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockTransactions(height, callback) {
      
      let postBody = null;
      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockTransactions");
      }

      let pathParams = {
        'height': height
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponsesGetBlockTransactions;

      return this.apiClient.callApi(
        '/blocks/{height}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCurrentBlockHeight operation.
     * @callback moduleapi/BlocksApi~getCurrentBlockHeightCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetBlockHeight{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current block height
     * Get the current block height of the Bitcoin blockchain
     * @param {module:api/BlocksApi~getCurrentBlockHeightCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCurrentBlockHeight(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponsesGetBlockHeight;

      return this.apiClient.callApi(
        '/blocks/current-height', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}