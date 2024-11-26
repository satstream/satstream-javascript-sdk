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
import EstimateRawFeeRequest from '../model/EstimateRawFeeRequest';
import EstimateRawFeeResponse from '../model/EstimateRawFeeResponse';
import EstimateSmartFeeRequest from '../model/EstimateSmartFeeRequest';
import EstimateSmartFeeResponse from '../model/EstimateSmartFeeResponse';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';

/**
* Fees service.
* @module api/FeesApi
* @version 1.0.25
*/
export default class FeesApi {

    /**
    * Constructs a new FeesApi. 
    * @alias module:api/FeesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the estimateRawFee operation.
     * @callback moduleapi/FeesApi~estimateRawFeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstimateRawFeeResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate Raw Fee
     * Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks if possible.
     * @param {module:model/EstimateRawFeeRequest} body Fee estimation parameters
     * @param {module:api/FeesApi~estimateRawFeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    estimateRawFee(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling estimateRawFee");
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
      let returnType = EstimateRawFeeResponse;

      return this.apiClient.callApi(
        '/fee/estimate-raw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the estimateSmartFee operation.
     * @callback moduleapi/FeesApi~estimateSmartFeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstimateSmartFeeResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate smart fee
     * Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks
     * @param {module:model/EstimateSmartFeeRequest} body Fee estimation parameters
     * @param {module:api/FeesApi~estimateSmartFeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    estimateSmartFee(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling estimateSmartFee");
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
      let returnType = EstimateSmartFeeResponse;

      return this.apiClient.callApi(
        '/fee/estimate-smart', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}