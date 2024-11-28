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
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Outputs service.
* @module api/OutputsApi
* @version 1.0.26
*/
export default class OutputsApi {

    /**
    * Constructs a new OutputsApi. 
    * @alias module:api/OutputsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getOutputByOutpoint operation.
     * @callback moduleapi/OutputsApi~getOutputByOutpointCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get output info by outpoint
     * Retrieve information about a specific UTXO using outpoint string
     * @param {String} outpoint Outpoint
     * @param {module:api/OutputsApi~getOutputByOutpointCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOutputByOutpoint(outpoint, callback) {
      
      let postBody = null;
      // verify the required parameter 'outpoint' is set
      if (outpoint === undefined || outpoint === null) {
        throw new Error("Missing the required parameter 'outpoint' when calling getOutputByOutpoint");
      }

      let pathParams = {
        'outpoint': outpoint
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/output/{outpoint}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOutputs operation.
     * @callback moduleapi/OutputsApi~getOutputsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get multiple outputs
     * Retrieve information about multiple UTXOs
     * @param {Array.<String>} body Outpoints
     * @param {module:api/OutputsApi~getOutputsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOutputs(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getOutputs");
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
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/outputs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}