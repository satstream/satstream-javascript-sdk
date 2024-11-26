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
import InlineResponse20029 from '../model/InlineResponse20029';
import RequestsDecodeScriptRequest from '../model/RequestsDecodeScriptRequest';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Scripts service.
* @module api/ScriptsApi
* @version 1.0.23
*/
export default class ScriptsApi {

    /**
    * Constructs a new ScriptsApi. 
    * @alias module:api/ScriptsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the decodeScript operation.
     * @callback moduleapi/ScriptsApi~decodeScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decode Script
     * Decode a hex-encoded script and return detailed information about it.
     * @param {module:model/RequestsDecodeScriptRequest} body Script to decode
     * @param {module:api/ScriptsApi~decodeScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    decodeScript(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling decodeScript");
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
      let returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/script/decode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}