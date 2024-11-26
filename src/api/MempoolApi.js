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
import InlineResponse20019 from '../model/InlineResponse20019';
import InlineResponse20020 from '../model/InlineResponse20020';
import InlineResponse20021 from '../model/InlineResponse20021';
import InlineResponse20022 from '../model/InlineResponse20022';
import InlineResponse20023 from '../model/InlineResponse20023';
import RequestsGetMempoolAncestorsRequest from '../model/RequestsGetMempoolAncestorsRequest';
import RequestsGetMempoolDescendantsRequest from '../model/RequestsGetMempoolDescendantsRequest';
import RequestsGetRawMempoolRequest from '../model/RequestsGetRawMempoolRequest';
import RequestsTestMempoolAcceptRequest from '../model/RequestsTestMempoolAcceptRequest';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Mempool service.
* @module api/MempoolApi
* @version 1.0.20
*/
export default class MempoolApi {

    /**
    * Constructs a new MempoolApi. 
    * @alias module:api/MempoolApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getMempoolAncestors operation.
     * @callback moduleapi/MempoolApi~getMempoolAncestorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mempool ancestors
     * Returns all in-mempool ancestors for a transaction in the mempool
     * @param {module:model/RequestsGetMempoolAncestorsRequest} body Mempool ancestors request parameters
     * @param {module:api/MempoolApi~getMempoolAncestorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMempoolAncestors(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getMempoolAncestors");
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
      let returnType = InlineResponse20019;

      return this.apiClient.callApi(
        '/mempool/ancestors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getMempoolDescendants operation.
     * @callback moduleapi/MempoolApi~getMempoolDescendantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20020{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mempool descendants
     * Returns all in-mempool descendants for a transaction in the mempool
     * @param {module:model/RequestsGetMempoolDescendantsRequest} body Mempool descendants request parameters
     * @param {module:api/MempoolApi~getMempoolDescendantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMempoolDescendants(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getMempoolDescendants");
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
      let returnType = InlineResponse20020;

      return this.apiClient.callApi(
        '/mempool/descendants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getMempoolInfo operation.
     * @callback moduleapi/MempoolApi~getMempoolInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20021{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mempool information
     * Returns details on the active state of the TX memory pool
     * @param {module:api/MempoolApi~getMempoolInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMempoolInfo(callback) {
      
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
      let returnType = InlineResponse20021;

      return this.apiClient.callApi(
        '/mempool/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRawMempool operation.
     * @callback moduleapi/MempoolApi~getRawMempoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20022{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get raw mempool
     * Returns all transaction ids in memory pool
     * @param {module:model/RequestsGetRawMempoolRequest} body Raw mempool request parameters
     * @param {module:api/MempoolApi~getRawMempoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRawMempool(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getRawMempool");
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
      let returnType = InlineResponse20022;

      return this.apiClient.callApi(
        '/mempool/raw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the testMempoolAccept operation.
     * @callback moduleapi/MempoolApi~testMempoolAcceptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test mempool accept
     * Tests whether raw transactions would be accepted by mempool
     * @param {module:model/RequestsTestMempoolAcceptRequest} body Raw transactions to test
     * @param {module:api/MempoolApi~testMempoolAcceptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    testMempoolAccept(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testMempoolAccept");
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
      let returnType = InlineResponse20023;

      return this.apiClient.callApi(
        '/mempool/test-accept', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}