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
import GithubComSatstreamSsApiServerApiTransactionsResponsesError from '../model/GithubComSatstreamSsApiServerApiTransactionsResponsesError';
import ResponsesGetTransaction from '../model/ResponsesGetTransaction';
import ResponsesGetTxInfo from '../model/ResponsesGetTxInfo';
import ResponsesSendRawTransaction from '../model/ResponsesSendRawTransaction';

/**
* Transactions service.
* @module api/TransactionsApi
* @version 1.0.0
*/
export default class TransactionsApi {

    /**
    * Constructs a new TransactionsApi. 
    * @alias module:api/TransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the broadcastTransaction operation.
     * @callback moduleapi/TransactionsApi~broadcastTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesSendRawTransaction{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Broadcast transaction
     * Broadcast a raw transaction to the Bitcoin network
     * @param {String} body Raw transaction hex
     * @param {module:api/TransactionsApi~broadcastTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    broadcastTransaction(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling broadcastTransaction");
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
      let returnType = ResponsesSendRawTransaction;

      return this.apiClient.callApi(
        '/transactions/broadcast', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTransaction operation.
     * @callback moduleapi/TransactionsApi~getTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetTransaction{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction
     * Get a transaction by its hash
     * @param {String} hash Transaction hash
     * @param {module:api/TransactionsApi~getTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTransaction(hash, callback) {
      
      let postBody = null;
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getTransaction");
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
      let returnType = ResponsesGetTransaction;

      return this.apiClient.callApi(
        '/indexer/tx/{hash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTransactionInfo operation.
     * @callback moduleapi/TransactionsApi~getTransactionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetTxInfo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction info
     * Get detailed information about a specific transaction
     * @param {String} txid Transaction ID
     * @param {module:api/TransactionsApi~getTransactionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTransactionInfo(txid, callback) {
      
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getTransactionInfo");
      }

      let pathParams = {
        'txid': txid
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
      let returnType = ResponsesGetTxInfo;

      return this.apiClient.callApi(
        '/transactions/{txid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}