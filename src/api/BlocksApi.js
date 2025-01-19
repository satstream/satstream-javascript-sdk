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
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import GetBlockCountResponse from '../model/GetBlockCountResponse';
import GetBlockDecodedResponse from '../model/GetBlockDecodedResponse';
import GetBlockHashByHeightResponse from '../model/GetBlockHashByHeightResponse';
import GetBlockHexResponse from '../model/GetBlockHexResponse';
import GetBlockPrevoutResponse from '../model/GetBlockPrevoutResponse';
import GetBlockResponse from '../model/GetBlockResponse';
import GetBlockStatsRequest from '../model/GetBlockStatsRequest';
import GetBlockStatsResponse from '../model/GetBlockStatsResponse';
import GetBlockSummaryResponse from '../model/GetBlockSummaryResponse';
import GetBlockchainInfoResponse from '../model/GetBlockchainInfoResponse';
import GetBlocksResponse from '../model/GetBlocksResponse';
import GetLatestBlockHashResponse from '../model/GetLatestBlockHashResponse';
import GetLatestBlockHeightResponse from '../model/GetLatestBlockHeightResponse';
import GetLatestBlockTimeResponse from '../model/GetLatestBlockTimeResponse';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Blocks service.
* @module api/BlocksApi
* @version 1.0.43
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
     * Callback function to receive the result of the getBlockCount operation.
     * @callback moduleapi/BlocksApi~getBlockCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockCountResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the height of the latest block
     * Returns the height of the latest block
     * @param {module:api/BlocksApi~getBlockCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockCount(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockCountResponse;

      return this.apiClient.callApi(
        '/blockcount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockDecoded operation.
     * @callback moduleapi/BlocksApi~getBlockDecodedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockDecodedResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block by hash or height (verbosity 2)
     * Get block by hash or height as a decoded object
     * @param {String} identifier Block hash or height
     * @param {module:api/BlocksApi~getBlockDecodedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockDecoded(identifier, callback) {
      
      let postBody = null;
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getBlockDecoded");
      }

      let pathParams = {
        'identifier': identifier
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockDecodedResponse;

      return this.apiClient.callApi(
        '/block/raw/{identifier}/decoded', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockHashByHeight operation.
     * @callback moduleapi/BlocksApi~getBlockHashByHeightCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockHashByHeightResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns blockhash of specified block.
     * Returns blockhash of specified block.
     * @param {String} blockHeight Block Height
     * @param {module:api/BlocksApi~getBlockHashByHeightCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockHashByHeight(blockHeight, callback) {
      
      let postBody = null;
      // verify the required parameter 'blockHeight' is set
      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling getBlockHashByHeight");
      }

      let pathParams = {
        'block_height': blockHeight
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockHashByHeightResponse;

      return this.apiClient.callApi(
        '/blockhash/{block_height}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockHex operation.
     * @callback moduleapi/BlocksApi~getBlockHexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockHexResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block by hash or height (verbosity 0)
     * Get block by hash or height as a raw hex string
     * @param {String} identifier Block hash or height
     * @param {module:api/BlocksApi~getBlockHexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockHex(identifier, callback) {
      
      let postBody = null;
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getBlockHex");
      }

      let pathParams = {
        'identifier': identifier
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockHexResponse;

      return this.apiClient.callApi(
        '/block/raw/{identifier}/hex', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockInfo operation.
     * @callback moduleapi/BlocksApi~getBlockInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block info by hash or height
     * Get detailed information about a specific block by hash or height
     * @param {String} identifier Block hash or height
     * @param {module:api/BlocksApi~getBlockInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockInfo(identifier, callback) {
      
      let postBody = null;
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getBlockInfo");
      }

      let pathParams = {
        'identifier': identifier
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockResponse;

      return this.apiClient.callApi(
        '/block/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockPrevout operation.
     * @callback moduleapi/BlocksApi~getBlockPrevoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockPrevoutResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block by hash or height (verbosity 3)
     * Get block by hash or height with prevout information
     * @param {String} identifier Block hash or height
     * @param {module:api/BlocksApi~getBlockPrevoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockPrevout(identifier, callback) {
      
      let postBody = null;
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getBlockPrevout");
      }

      let pathParams = {
        'identifier': identifier
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockPrevoutResponse;

      return this.apiClient.callApi(
        '/block/raw/{identifier}/prevout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockStats operation.
     * @callback moduleapi/BlocksApi~getBlockStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockStatsResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block stats
     * Computes per block statistics for a given window
     * @param {module:model/GetBlockStatsRequest} body Block stats request parameters
     * @param {module:api/BlocksApi~getBlockStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockStats(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getBlockStats");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetBlockStatsResponse;

      return this.apiClient.callApi(
        '/block/stats', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockSummary operation.
     * @callback moduleapi/BlocksApi~getBlockSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockSummaryResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get block by hash or height (verbosity 1)
     * Get block by hash or height as a summary object
     * @param {String} identifier Block hash or height
     * @param {module:api/BlocksApi~getBlockSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockSummary(identifier, callback) {
      
      let postBody = null;
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getBlockSummary");
      }

      let pathParams = {
        'identifier': identifier
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockSummaryResponse;

      return this.apiClient.callApi(
        '/block/raw/{identifier}/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlockchainInfo operation.
     * @callback moduleapi/BlocksApi~getBlockchainInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockchainInfoResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get blockchain information
     * Returns an object containing various state info regarding blockchain processing
     * @param {module:api/BlocksApi~getBlockchainInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlockchainInfo(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlockchainInfoResponse;

      return this.apiClient.callApi(
        '/blockchain/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBlocks operation.
     * @callback moduleapi/BlocksApi~getBlocksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlocksResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the latest block height, last 100 block hashes, and featured inscriptions
     * Returns the latest block height, last 100 block hashes, and featured inscriptions
     * @param {module:api/BlocksApi~getBlocksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBlocks(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBlocksResponse;

      return this.apiClient.callApi(
        '/blocks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLatestBlockHeight operation.
     * @callback moduleapi/BlocksApi~getLatestBlockHeightCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLatestBlockHeightResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the height of the latest block.
     * Returns the height of the latest block.
     * @param {module:api/BlocksApi~getLatestBlockHeightCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getLatestBlockHeight(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLatestBlockHeightResponse;

      return this.apiClient.callApi(
        '/blockheight', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLatestBlockhash operation.
     * @callback moduleapi/BlocksApi~getLatestBlockhashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLatestBlockHashResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns blockhash for the latest block.
     * Returns blockhash for the latest block.
     * @param {module:api/BlocksApi~getLatestBlockhashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getLatestBlockhash(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLatestBlockHashResponse;

      return this.apiClient.callApi(
        '/blockhash', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLatestBlocktime operation.
     * @callback moduleapi/BlocksApi~getLatestBlocktimeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLatestBlockTimeResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the timestamp of the latest block
     * Returns the UNIX timestamp of when the latest block was mined
     * @param {module:api/BlocksApi~getLatestBlocktimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getLatestBlocktime(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLatestBlockTimeResponse;

      return this.apiClient.callApi(
        '/blocktime', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}