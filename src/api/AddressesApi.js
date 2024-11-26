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
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import RequestsVerifyMessageRequest from '../model/RequestsVerifyMessageRequest';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Addresses service.
* @module api/AddressesApi
* @version 1.0.22
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
     * Callback function to receive the result of the getAddress operation.
     * @callback moduleapi/AddressesApi~getAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get address info
     * Get detailed information about a specific address
     * @param {String} address Address
     * @param {module:api/AddressesApi~getAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddress(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddress");
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
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/address/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAddressUtxos operation.
     * @callback moduleapi/AddressesApi~getAddressUtxosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get UTXOs for an address
     * Retrieve UTXOs held by a specific address with optional type filtering
     * @param {String} address Address
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type UTXO Type
     * @param {module:api/AddressesApi~getAddressUtxosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAddressUtxos(address, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressUtxos");
      }

      let pathParams = {
        'address': address
      };
      let queryParams = {
        'type': opts['type']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/address/{address}/outputs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the validateAddress operation.
     * @callback moduleapi/AddressesApi~validateAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate address
     * Returns information about the given Bitcoin address
     * @param {String} address Bitcoin address to validate
     * @param {module:api/AddressesApi~validateAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    validateAddress(address, callback) {
      
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling validateAddress");
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
      let returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/address/{address}/validate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the verifyMessage operation.
     * @callback moduleapi/AddressesApi~verifyMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify message
     * Verifies a signed message
     * @param {module:model/RequestsVerifyMessageRequest} body Message verification parameters
     * @param {module:api/AddressesApi~verifyMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    verifyMessage(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling verifyMessage");
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/address/verify-message', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}