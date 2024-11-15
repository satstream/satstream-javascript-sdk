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
import GithubComSatstreamSsApiServerApiAddressesResponsesError from '../model/GithubComSatstreamSsApiServerApiAddressesResponsesError';
import ResponsesGetAddressBalance from '../model/ResponsesGetAddressBalance';
import ResponsesGetAddressNonInscriptionUTXO from '../model/ResponsesGetAddressNonInscriptionUTXO';
import ResponsesGetAddressRuneBalance from '../model/ResponsesGetAddressRuneBalance';
import ResponsesGetAddressRunesBalanceList from '../model/ResponsesGetAddressRunesBalanceList';
import ResponsesGetAddressTimeframeBalance from '../model/ResponsesGetAddressTimeframeBalance';

/**
* Addresses service.
* @module api/AddressesApi
* @version 1.0.10
*/
export default class AddressesApi {

    /**
    * Constructs a new AddressesApi. 
    * @alias module:api/AddressesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAddressBalance operation.
     * @callback moduleapi/AddressesApi~getAddressBalanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetAddressBalance{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address balance
     * Get the current balance of a Bitcoin address
     * @param {String} address Bitcoin address
     * @param {module:api/AddressesApi~getAddressBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddressBalance(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressBalance");
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
      let returnType = ResponsesGetAddressBalance;

      return this.apiClient.callApi(
        '/addresses/{address}/balance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAddressNonInscriptionUtxos operation.
     * @callback moduleapi/AddressesApi~getAddressNonInscriptionUtxosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetAddressNonInscriptionUTXO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address non-inscription UTXOs
     * Get all non-inscription UTXOs for a Bitcoin address
     * @param {String} address Bitcoin address
     * @param {module:api/AddressesApi~getAddressNonInscriptionUtxosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddressNonInscriptionUtxos(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressNonInscriptionUtxos");
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
      let returnType = ResponsesGetAddressNonInscriptionUTXO;

      return this.apiClient.callApi(
        '/addresses/{address}/utxos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAddressRuneBalance operation.
     * @callback moduleapi/AddressesApi~getAddressRuneBalanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetAddressRuneBalance{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address rune balance
     * Get the balance of a specific rune for a Bitcoin address
     * @param {String} address Bitcoin address
     * @param {String} runeid Rune ID
     * @param {module:api/AddressesApi~getAddressRuneBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddressRuneBalance(address, runeid, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressRuneBalance");
      }
      // verify the required parameter 'runeid' is set
      if (runeid === undefined || runeid === null) {
        throw new Error("Missing the required parameter 'runeid' when calling getAddressRuneBalance");
      }

      let pathParams = {
        'address': address,'runeid': runeid
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
      let returnType = ResponsesGetAddressRuneBalance;

      return this.apiClient.callApi(
        '/addresses/{address}/runes/{runeid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAddressRunesBalanceList operation.
     * @callback moduleapi/AddressesApi~getAddressRunesBalanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetAddressRunesBalanceList{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address runes balance list
     * Get the balance of all runes for a Bitcoin address
     * @param {String} address Bitcoin address
     * @param {module:api/AddressesApi~getAddressRunesBalanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddressRunesBalanceList(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressRunesBalanceList");
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
      let returnType = ResponsesGetAddressRunesBalanceList;

      return this.apiClient.callApi(
        '/addresses/{address}/runes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAddressTimeframeBalance operation.
     * @callback moduleapi/AddressesApi~getAddressTimeframeBalanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsesGetAddressTimeframeBalance{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address timeframe balance
     * Get the balance of a Bitcoin address for a specific timeframe
     * @param {String} address Bitcoin address
     * @param {module:model/String} timeframe Timeframe
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.token Token
     * @param {module:api/AddressesApi~getAddressTimeframeBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddressTimeframeBalance(address, timeframe, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressTimeframeBalance");
      }
      // verify the required parameter 'timeframe' is set
      if (timeframe === undefined || timeframe === null) {
        throw new Error("Missing the required parameter 'timeframe' when calling getAddressTimeframeBalance");
      }

      let pathParams = {
        'address': address
      };
      let queryParams = {
        'token': opts['token'],'timeframe': timeframe
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponsesGetAddressTimeframeBalance;

      return this.apiClient.callApi(
        '/addresses/{address}/balance/timeframe', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}