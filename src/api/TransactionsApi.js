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
import CombineRawTransactionResponse from '../model/CombineRawTransactionResponse';
import ConvertToPSBTResponse from '../model/ConvertToPSBTResponse';
import CreateRawTransactionResponse from '../model/CreateRawTransactionResponse';
import DecodeTransactionResponse from '../model/DecodeTransactionResponse';
import GetRawTransactionDecodeResponse from '../model/GetRawTransactionDecodeResponse';
import GetRawTransactionHexResponse from '../model/GetRawTransactionHexResponse';
import GetRawTransactionPrevoutResponse from '../model/GetRawTransactionPrevoutResponse';
import GetTxOutProofResponse from '../model/GetTxOutProofResponse';
import GetTxOutResponse from '../model/GetTxOutResponse';
import GetTxSpendingPrevoutResponse from '../model/GetTxSpendingPrevoutResponse';
import InlineResponse2002 from '../model/InlineResponse2002';
import SendRawTransactionResponse from '../model/SendRawTransactionResponse';
import TransactionCombineRawTransactionRequest from '../model/TransactionCombineRawTransactionRequest';
import TransactionConvertToPSBTRequest from '../model/TransactionConvertToPSBTRequest';
import TransactionCreateRawTxRequest from '../model/TransactionCreateRawTxRequest';
import TransactionGetTxOutProofRequest from '../model/TransactionGetTxOutProofRequest';
import TransactionGetTxOutRequest from '../model/TransactionGetTxOutRequest';
import TransactionGetTxOutSetInfoRequest from '../model/TransactionGetTxOutSetInfoRequest';
import TransactionGetTxSpendingPrevoutRequest from '../model/TransactionGetTxSpendingPrevoutRequest';
import TransactionSendRawTransactionRequest from '../model/TransactionSendRawTransactionRequest';
import TransactionVerifyTxOutProofRequest from '../model/TransactionVerifyTxOutProofRequest';
import UtilsResponseEnvelope from '../model/UtilsResponseEnvelope';
import VerifyTxOutProofResponse from '../model/VerifyTxOutProofResponse';

/**
* Transactions service.
* @module api/TransactionsApi
* @version 1.0.45
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
     * Callback function to receive the result of the combineRawTransaction operation.
     * @callback moduleapi/TransactionsApi~combineRawTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CombineRawTransactionResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Combine Raw Transactions
     * Combines multiple partially signed transactions into one transaction
     * @param {module:model/TransactionCombineRawTransactionRequest} body Array of hex-encoded raw transactions
     * @param {module:api/TransactionsApi~combineRawTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    combineRawTransaction(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling combineRawTransaction");
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
      let returnType = CombineRawTransactionResponse;

      return this.apiClient.callApi(
        '/tx/combine', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the convertToPsbt operation.
     * @callback moduleapi/TransactionsApi~convertToPsbtCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvertToPSBTResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Raw Transaction to PSBT
     * Converts a network serialized transaction to a PSBT. This should be used only with createrawtransaction and fundrawtransaction. createpsbt and walletcreatefundedpsbt should be used for new applications.
     * @param {module:model/TransactionConvertToPSBTRequest} body Raw transaction conversion parameters
     * @param {module:api/TransactionsApi~convertToPsbtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    convertToPsbt(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling convertToPsbt");
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
      let returnType = ConvertToPSBTResponse;

      return this.apiClient.callApi(
        '/tx/convert-to-psbt', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createRawTransaction operation.
     * @callback moduleapi/TransactionsApi~createRawTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateRawTransactionResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Raw Transaction
     * Creates a raw transaction spending the given inputs and creating new outputs. Note that the transaction&#x27;s inputs are not signed, and it is not stored in the wallet or transmitted to the network.
     * @param {module:model/TransactionCreateRawTxRequest} body Transaction parameters
     * @param {module:api/TransactionsApi~createRawTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createRawTransaction(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createRawTransaction");
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
      let returnType = CreateRawTransactionResponse;

      return this.apiClient.callApi(
        '/tx/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the decodeTxInscriptions operation.
     * @callback moduleapi/TransactionsApi~decodeTxInscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecodeTransactionResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decode transaction inscriptions
     * Decodes a transaction and returns its inscriptions and runestone data
     * @param {String} txid Transaction ID
     * @param {module:api/TransactionsApi~decodeTxInscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    decodeTxInscriptions(txid, callback) {
      
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling decodeTxInscriptions");
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
      let returnType = DecodeTransactionResponse;

      return this.apiClient.callApi(
        '/tx/{txid}/inscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRawTransaction operation.
     * @callback moduleapi/TransactionsApi~getRawTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRawTransactionDecodeResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get raw transaction (verbosity 1)
     * Get raw transaction with basic decoded information
     * @param {String} txid Transaction ID
     * @param {module:api/TransactionsApi~getRawTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRawTransaction(txid, callback) {
      
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getRawTransaction");
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
      let returnType = GetRawTransactionDecodeResponse;

      return this.apiClient.callApi(
        '/tx/{txid}/raw/decode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRawTransactionHex operation.
     * @callback moduleapi/TransactionsApi~getRawTransactionHexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRawTransactionHexResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get raw transaction (verbosity 0)
     * Get raw transaction as a raw hex string
     * @param {String} txid Transaction ID
     * @param {module:api/TransactionsApi~getRawTransactionHexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRawTransactionHex(txid, callback) {
      
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getRawTransactionHex");
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
      let returnType = GetRawTransactionHexResponse;

      return this.apiClient.callApi(
        '/tx/{txid}/hex', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRawTransactionPrevout operation.
     * @callback moduleapi/TransactionsApi~getRawTransactionPrevoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRawTransactionPrevoutResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get raw transaction with prevouts (verbosity 2)
     * Get raw transaction with prevout information
     * @param {String} txid Transaction ID
     * @param {module:api/TransactionsApi~getRawTransactionPrevoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRawTransactionPrevout(txid, callback) {
      
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getRawTransactionPrevout");
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
      let returnType = GetRawTransactionPrevoutResponse;

      return this.apiClient.callApi(
        '/tx/{txid}/raw/prevout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTxOut operation.
     * @callback moduleapi/TransactionsApi~getTxOutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTxOutResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction output
     * Returns details about an unspent transaction output
     * @param {module:model/TransactionGetTxOutRequest} body Transaction output request parameters
     * @param {module:api/TransactionsApi~getTxOutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTxOut(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getTxOut");
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
      let returnType = GetTxOutResponse;

      return this.apiClient.callApi(
        '/tx/out', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTxOutProof operation.
     * @callback moduleapi/TransactionsApi~getTxOutProofCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTxOutProofResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction output proof
     * Returns a hex-encoded proof that one or more specified transactions were included in a block
     * @param {module:model/TransactionGetTxOutProofRequest} body Transaction proof request parameters
     * @param {module:api/TransactionsApi~getTxOutProofCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTxOutProof(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getTxOutProof");
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
      let returnType = GetTxOutProofResponse;

      return this.apiClient.callApi(
        '/tx/outproof', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTxOutSetInfo operation.
     * @callback moduleapi/TransactionsApi~getTxOutSetInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction output set information
     * Returns statistics about the unspent transaction output set
     * @param {module:model/TransactionGetTxOutSetInfoRequest} body UTXO set info request parameters
     * @param {module:api/TransactionsApi~getTxOutSetInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTxOutSetInfo(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getTxOutSetInfo");
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
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/tx/out/set/info', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTxSpendingPrevout operation.
     * @callback moduleapi/TransactionsApi~getTxSpendingPrevoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTxSpendingPrevoutResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction spending prevout
     * Scans the mempool to find transactions spending any of the given outputs
     * @param {module:model/TransactionGetTxSpendingPrevoutRequest} body Transaction spending prevout request
     * @param {module:api/TransactionsApi~getTxSpendingPrevoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTxSpendingPrevout(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getTxSpendingPrevout");
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
      let returnType = GetTxSpendingPrevoutResponse;

      return this.apiClient.callApi(
        '/tx/spending-prevout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sendRawTransaction operation.
     * @callback moduleapi/TransactionsApi~sendRawTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendRawTransactionResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send raw transaction
     * Submits a raw transaction to local node and network
     * @param {module:model/TransactionSendRawTransactionRequest} body Raw transaction to send
     * @param {module:api/TransactionsApi~sendRawTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sendRawTransaction(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendRawTransaction");
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
      let returnType = SendRawTransactionResponse;

      return this.apiClient.callApi(
        '/tx/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the verifyTxOutProof operation.
     * @callback moduleapi/TransactionsApi~verifyTxOutProofCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerifyTxOutProofResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify transaction output proof
     * Verifies that a proof points to a transaction in a block
     * @param {module:model/TransactionVerifyTxOutProofRequest} body Proof to verify
     * @param {module:api/TransactionsApi~verifyTxOutProofCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    verifyTxOutProof(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling verifyTxOutProof");
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
      let returnType = VerifyTxOutProofResponse;

      return this.apiClient.callApi(
        '/tx/outproof/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}