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
import GetChainTxStatsRequest from '../model/GetChainTxStatsRequest';
import GetChainTxStatsResponse from '../model/GetChainTxStatsResponse';
import GetDifficultyResponse from '../model/GetDifficultyResponse';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Network service.
* @module api/NetworkApi
* @version 1.0.39
*/
export default class NetworkApi {

    /**
    * Constructs a new NetworkApi. 
    * @alias module:api/NetworkApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getChainTxStats operation.
     * @callback moduleapi/NetworkApi~getChainTxStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetChainTxStatsResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get chain tx stats
     * Computes statistics about the total number and rate of transactions in the chain
     * @param {module:model/GetChainTxStatsRequest} body Chain tx stats request parameters
     * @param {module:api/NetworkApi~getChainTxStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getChainTxStats(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getChainTxStats");
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
      let returnType = GetChainTxStatsResponse;

      return this.apiClient.callApi(
        '/chain/txstats', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDifficulty operation.
     * @callback moduleapi/NetworkApi~getDifficultyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDifficultyResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get difficulty
     * Returns the proof-of-work difficulty as a multiple of the minimum difficulty
     * @param {module:api/NetworkApi~getDifficultyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getDifficulty(callback) {
      
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
      let returnType = GetDifficultyResponse;

      return this.apiClient.callApi(
        '/chain/difficulty', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}