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
import AnalyzePSBTRequest from '../model/AnalyzePSBTRequest';
import AnalyzePSBTResponse from '../model/AnalyzePSBTResponse';
import CombinePSBTRequest from '../model/CombinePSBTRequest';
import CombinePSBTResponse from '../model/CombinePSBTResponse';
import CreatePSBTRequest from '../model/CreatePSBTRequest';
import CreatePSBTResponse from '../model/CreatePSBTResponse';
import DecodePSBTRequest from '../model/DecodePSBTRequest';
import DecodePSBTResponse from '../model/DecodePSBTResponse';
import JoinPSBTsRequest from '../model/JoinPSBTsRequest';
import JoinPSBTsResponse from '../model/JoinPSBTsResponse';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* PSBTs service.
* @module api/PSBTsApi
* @version 1.0.36
*/
export default class PSBTsApi {

    /**
    * Constructs a new PSBTsApi. 
    * @alias module:api/PSBTsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the analyzePsbt operation.
     * @callback moduleapi/PSBTsApi~analyzePsbtCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AnalyzePSBTResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Analyze PSBT
     * Analyzes and provides information about the current status of a PSBT and its inputs
     * @param {module:model/AnalyzePSBTRequest} body PSBT to analyze
     * @param {module:api/PSBTsApi~analyzePsbtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    analyzePsbt(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling analyzePsbt");
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
      let returnType = AnalyzePSBTResponse;

      return this.apiClient.callApi(
        '/psbt/analyze', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the combinePsbt operation.
     * @callback moduleapi/PSBTsApi~combinePsbtCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CombinePSBTResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Combine PSBTs
     * Combines multiple partially signed Bitcoin transactions into one transaction
     * @param {module:model/CombinePSBTRequest} body Array of PSBTs to combine
     * @param {module:api/PSBTsApi~combinePsbtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    combinePsbt(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling combinePsbt");
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
      let returnType = CombinePSBTResponse;

      return this.apiClient.callApi(
        '/psbt/combine', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createPsbt operation.
     * @callback moduleapi/PSBTsApi~createPsbtCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatePSBTResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create PSBT
     * Creates a transaction in the Partially Signed Transaction format. Implements the Creator role.
     * @param {module:model/CreatePSBTRequest} body Transaction parameters
     * @param {module:api/PSBTsApi~createPsbtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createPsbt(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPsbt");
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
      let returnType = CreatePSBTResponse;

      return this.apiClient.callApi(
        '/psbt/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the decodePsbt operation.
     * @callback moduleapi/PSBTsApi~decodePsbtCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecodePSBTResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decode PSBT
     * Return a JSON object representing the serialized, base64-encoded partially signed Bitcoin transaction.
     * @param {module:model/DecodePSBTRequest} body PSBT to decode
     * @param {module:api/PSBTsApi~decodePsbtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    decodePsbt(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling decodePsbt");
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
      let returnType = DecodePSBTResponse;

      return this.apiClient.callApi(
        '/psbt/decode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the joinPsbts operation.
     * @callback moduleapi/PSBTsApi~joinPsbtsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JoinPSBTsResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join PSBTs
     * Joins multiple distinct PSBTs with different inputs and outputs into one PSBT
     * @param {module:model/JoinPSBTsRequest} body PSBTs to join
     * @param {module:api/PSBTsApi~joinPsbtsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    joinPsbts(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling joinPsbts");
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
      let returnType = JoinPSBTsResponse;

      return this.apiClient.callApi(
        '/psbt/join', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}