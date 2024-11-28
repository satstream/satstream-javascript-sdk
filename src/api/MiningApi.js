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
import GetMiningInfoResponse from '../model/GetMiningInfoResponse';
import GetNetworkHashPSRequest from '../model/GetNetworkHashPSRequest';
import GetNetworkHashPSResponse from '../model/GetNetworkHashPSResponse';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Mining service.
* @module api/MiningApi
* @version 1.0.32
*/
export default class MiningApi {

    /**
    * Constructs a new MiningApi. 
    * @alias module:api/MiningApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getMiningInfo operation.
     * @callback moduleapi/MiningApi~getMiningInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMiningInfoResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mining information
     * Returns a json object containing mining-related information
     * @param {module:api/MiningApi~getMiningInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMiningInfo(callback) {
      
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
      let returnType = GetMiningInfoResponse;

      return this.apiClient.callApi(
        '/mining/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkHashps operation.
     * @callback moduleapi/MiningApi~getNetworkHashpsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetNetworkHashPSResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get network hash per second
     * Returns the estimated network hashes per second based on the last n blocks
     * @param {module:model/GetNetworkHashPSRequest} body Network hash rate parameters
     * @param {module:api/MiningApi~getNetworkHashpsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNetworkHashps(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getNetworkHashps");
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
      let returnType = GetNetworkHashPSResponse;

      return this.apiClient.callApi(
        '/mining/networkhashps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}