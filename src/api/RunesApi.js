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
import GetLatestRunesResponse from '../model/GetLatestRunesResponse';
import GetRuneResponse from '../model/GetRuneResponse';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Runes service.
* @module api/RunesApi
* @version 1.0.36
*/
export default class RunesApi {

    /**
    * Constructs a new RunesApi. 
    * @alias module:api/RunesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getLatestRunes operation.
     * @callback moduleapi/RunesApi~getLatestRunesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLatestRunesResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get latest runes
     * Retrieve information about the last 100 inscribed runes (first page)
     * @param {module:api/RunesApi~getLatestRunesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getLatestRunes(callback) {
      
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
      let returnType = GetLatestRunesResponse;

      return this.apiClient.callApi(
        '/runes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLatestRunesPage operation.
     * @callback moduleapi/RunesApi~getLatestRunesPageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLatestRunesResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get latest runes page
     * Retrieve a specific page of 100 inscribed runes
     * @param {Number} page Page number
     * @param {module:api/RunesApi~getLatestRunesPageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getLatestRunesPage(page, callback) {
      
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getLatestRunesPage");
      }

      let pathParams = {
        'page': page
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
      let returnType = GetLatestRunesResponse;

      return this.apiClient.callApi(
        '/runes/{page}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRune operation.
     * @callback moduleapi/RunesApi~getRuneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRuneResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rune info
     * Retrieve information about a specific rune by name or ID (e.g., \&quot;UNCOMMON•GOODS\&quot; or \&quot;1:0\&quot;)
     * @param {String} identifier Rune Name or ID
     * @param {module:api/RunesApi~getRuneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRune(identifier, callback) {
      
      let postBody = null;
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getRune");
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
      let returnType = GetRuneResponse;

      return this.apiClient.callApi(
        '/rune/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}