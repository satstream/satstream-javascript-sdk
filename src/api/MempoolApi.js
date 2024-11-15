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
import ResponsesGetAddressMempoolTxs from '../model/ResponsesGetAddressMempoolTxs';
import ResponsesGetMempoolTransactions from '../model/ResponsesGetMempoolTransactions';
import ResponsesGetMempoolTxInfo from '../model/ResponsesGetMempoolTxInfo';

/**
* Mempool service.
* @module api/MempoolApi
* @version 1.0.10
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
     * Callback function to receive the result of the getAddressMempoolTransactions operation.
     * @callback moduleapi/MempoolApi~getAddressMempoolTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetAddressMempoolTxs{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address mempool transactions
     * Get all mempool transactions for a specific address
     * @param {String} address Bitcoin address
     * @param {module:api/MempoolApi~getAddressMempoolTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddressMempoolTransactions(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressMempoolTransactions");
      }

      let pathParams = {
        'address': address
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
      let returnType = ResponsesGetAddressMempoolTxs;

      return this.apiClient.callApi(
        '/mempool/addresses/{address}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getMempoolTransactionInfo operation.
     * @callback moduleapi/MempoolApi~getMempoolTransactionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetMempoolTxInfo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mempool transaction info
     * Get information about a specific transaction in the mempool
     * @param {String} txid Transaction ID
     * @param {module:api/MempoolApi~getMempoolTransactionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMempoolTransactionInfo(txid, callback) {
      
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getMempoolTransactionInfo");
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
      let returnType = ResponsesGetMempoolTxInfo;

      return this.apiClient.callApi(
        '/mempool/transactions/{txid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getMempoolTransactions operation.
     * @callback moduleapi/MempoolApi~getMempoolTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetMempoolTransactions{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mempool transactions
     * Get all transactions currently in the mempool
     * @param {module:api/MempoolApi~getMempoolTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMempoolTransactions(callback) {
      
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
      let returnType = ResponsesGetMempoolTransactions;

      return this.apiClient.callApi(
        '/mempool/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}