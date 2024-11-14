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
import ApiClient from './ApiClient';
import AllOfresponsesGetAddressTimeframeBalanceItemBlockRange from './model/AllOfresponsesGetAddressTimeframeBalanceItemBlockRange';
import BigInt from './model/BigInt';
import GithubComSatstreamSsApiServerApiAddressesResponsesError from './model/GithubComSatstreamSsApiServerApiAddressesResponsesError';
import GithubComSatstreamSsApiServerApiBlocksResponsesError from './model/GithubComSatstreamSsApiServerApiBlocksResponsesError';
import GithubComSatstreamSsApiServerApiRunesResponsesError from './model/GithubComSatstreamSsApiServerApiRunesResponsesError';
import GithubComSatstreamSsApiServerApiTransactionsResponsesError from './model/GithubComSatstreamSsApiServerApiTransactionsResponsesError';
import GithubComSatstreamSsUtilsOrdinalsTerms from './model/GithubComSatstreamSsUtilsOrdinalsTerms';
import GithubComSatstreamSsUtilsOrdinalsTermsRange from './model/GithubComSatstreamSsUtilsOrdinalsTermsRange';
import GithubComSatstreamSsUtilsRpcBlock from './model/GithubComSatstreamSsUtilsRpcBlock';
import GithubComSatstreamSsUtilsRpcBtcTx from './model/GithubComSatstreamSsUtilsRpcBtcTx';
import GithubComSatstreamSsUtilsRpcPrevOut from './model/GithubComSatstreamSsUtilsRpcPrevOut';
import GithubComSatstreamSsUtilsRpcScriptPubKey from './model/GithubComSatstreamSsUtilsRpcScriptPubKey';
import GithubComSatstreamSsUtilsRpcScriptSig from './model/GithubComSatstreamSsUtilsRpcScriptSig';
import GithubComSatstreamSsUtilsRpcUtxoRune from './model/GithubComSatstreamSsUtilsRpcUtxoRune';
import GithubComSatstreamSsUtilsRpcVin from './model/GithubComSatstreamSsUtilsRpcVin';
import GithubComSatstreamSsUtilsRpcVout from './model/GithubComSatstreamSsUtilsRpcVout';
import GithubComSatstreamSsUtilsStoreTransactionDocument from './model/GithubComSatstreamSsUtilsStoreTransactionDocument';
import ResponsesBlockRange from './model/ResponsesBlockRange';
import ResponsesGetAddressBalance from './model/ResponsesGetAddressBalance';
import ResponsesGetAddressBalanceData from './model/ResponsesGetAddressBalanceData';
import ResponsesGetAddressMempoolTxs from './model/ResponsesGetAddressMempoolTxs';
import ResponsesGetAddressNonInscriptionUTXO from './model/ResponsesGetAddressNonInscriptionUTXO';
import ResponsesGetAddressNonInscriptionUTXOData from './model/ResponsesGetAddressNonInscriptionUTXOData';
import ResponsesGetAddressRuneBalance from './model/ResponsesGetAddressRuneBalance';
import ResponsesGetAddressRuneBalanceData from './model/ResponsesGetAddressRuneBalanceData';
import ResponsesGetAddressRunesBalanceList from './model/ResponsesGetAddressRunesBalanceList';
import ResponsesGetAddressRunesBalanceListData from './model/ResponsesGetAddressRunesBalanceListData';
import ResponsesGetAddressRunesBalanceListItem from './model/ResponsesGetAddressRunesBalanceListItem';
import ResponsesGetAddressTimeframeBalance from './model/ResponsesGetAddressTimeframeBalance';
import ResponsesGetAddressTimeframeBalanceData from './model/ResponsesGetAddressTimeframeBalanceData';
import ResponsesGetAddressTimeframeBalanceItem from './model/ResponsesGetAddressTimeframeBalanceItem';
import ResponsesGetBlockByHash from './model/ResponsesGetBlockByHash';
import ResponsesGetBlockHeight from './model/ResponsesGetBlockHeight';
import ResponsesGetBlockHeightData from './model/ResponsesGetBlockHeightData';
import ResponsesGetBlockInfo from './model/ResponsesGetBlockInfo';
import ResponsesGetBlockTransactions from './model/ResponsesGetBlockTransactions';
import ResponsesGetFees from './model/ResponsesGetFees';
import ResponsesGetFeesData from './model/ResponsesGetFeesData';
import ResponsesGetMempoolTransactions from './model/ResponsesGetMempoolTransactions';
import ResponsesGetMempoolTxInfo from './model/ResponsesGetMempoolTxInfo';
import ResponsesGetRuneHolders from './model/ResponsesGetRuneHolders';
import ResponsesGetRuneHoldersData from './model/ResponsesGetRuneHoldersData';
import ResponsesGetRuneInfo from './model/ResponsesGetRuneInfo';
import ResponsesGetRunesInfoList from './model/ResponsesGetRunesInfoList';
import ResponsesGetRunesInfoListData from './model/ResponsesGetRunesInfoListData';
import ResponsesGetTransaction from './model/ResponsesGetTransaction';
import ResponsesGetTxInfo from './model/ResponsesGetTxInfo';
import ResponsesGetTxInfoData from './model/ResponsesGetTxInfoData';
import ResponsesNonInscriptionUTXO from './model/ResponsesNonInscriptionUTXO';
import ResponsesPaginationInfo from './model/ResponsesPaginationInfo';
import ResponsesRuneHolder from './model/ResponsesRuneHolder';
import ResponsesRuneInfo from './model/ResponsesRuneInfo';
import ResponsesSendRawTransaction from './model/ResponsesSendRawTransaction';
import ResponsesSendRawTransactionData from './model/ResponsesSendRawTransactionData';
import AddressesApi from './api/AddressesApi';
import BlocksApi from './api/BlocksApi';
import FeesApi from './api/FeesApi';
import MempoolApi from './api/MempoolApi';
import RunesApi from './api/RunesApi';
import TransactionsApi from './api/TransactionsApi';

/**
* Satstream JavaScript SDK.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SatstreamJavascriptSdk = require('index'); // See note below*.
* var xxxSvc = new SatstreamJavascriptSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SatstreamJavascriptSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SatstreamJavascriptSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SatstreamJavascriptSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AllOfresponsesGetAddressTimeframeBalanceItemBlockRange model constructor.
     * @property {module:model/AllOfresponsesGetAddressTimeframeBalanceItemBlockRange}
     */
    AllOfresponsesGetAddressTimeframeBalanceItemBlockRange,

    /**
     * The BigInt model constructor.
     * @property {module:model/BigInt}
     */
    BigInt,

    /**
     * The GithubComSatstreamSsApiServerApiAddressesResponsesError model constructor.
     * @property {module:model/GithubComSatstreamSsApiServerApiAddressesResponsesError}
     */
    GithubComSatstreamSsApiServerApiAddressesResponsesError,

    /**
     * The GithubComSatstreamSsApiServerApiBlocksResponsesError model constructor.
     * @property {module:model/GithubComSatstreamSsApiServerApiBlocksResponsesError}
     */
    GithubComSatstreamSsApiServerApiBlocksResponsesError,

    /**
     * The GithubComSatstreamSsApiServerApiRunesResponsesError model constructor.
     * @property {module:model/GithubComSatstreamSsApiServerApiRunesResponsesError}
     */
    GithubComSatstreamSsApiServerApiRunesResponsesError,

    /**
     * The GithubComSatstreamSsApiServerApiTransactionsResponsesError model constructor.
     * @property {module:model/GithubComSatstreamSsApiServerApiTransactionsResponsesError}
     */
    GithubComSatstreamSsApiServerApiTransactionsResponsesError,

    /**
     * The GithubComSatstreamSsUtilsOrdinalsTerms model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsOrdinalsTerms}
     */
    GithubComSatstreamSsUtilsOrdinalsTerms,

    /**
     * The GithubComSatstreamSsUtilsOrdinalsTermsRange model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsOrdinalsTermsRange}
     */
    GithubComSatstreamSsUtilsOrdinalsTermsRange,

    /**
     * The GithubComSatstreamSsUtilsRpcBlock model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcBlock}
     */
    GithubComSatstreamSsUtilsRpcBlock,

    /**
     * The GithubComSatstreamSsUtilsRpcBtcTx model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcBtcTx}
     */
    GithubComSatstreamSsUtilsRpcBtcTx,

    /**
     * The GithubComSatstreamSsUtilsRpcPrevOut model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcPrevOut}
     */
    GithubComSatstreamSsUtilsRpcPrevOut,

    /**
     * The GithubComSatstreamSsUtilsRpcScriptPubKey model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcScriptPubKey}
     */
    GithubComSatstreamSsUtilsRpcScriptPubKey,

    /**
     * The GithubComSatstreamSsUtilsRpcScriptSig model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcScriptSig}
     */
    GithubComSatstreamSsUtilsRpcScriptSig,

    /**
     * The GithubComSatstreamSsUtilsRpcUtxoRune model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcUtxoRune}
     */
    GithubComSatstreamSsUtilsRpcUtxoRune,

    /**
     * The GithubComSatstreamSsUtilsRpcVin model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcVin}
     */
    GithubComSatstreamSsUtilsRpcVin,

    /**
     * The GithubComSatstreamSsUtilsRpcVout model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsRpcVout}
     */
    GithubComSatstreamSsUtilsRpcVout,

    /**
     * The GithubComSatstreamSsUtilsStoreTransactionDocument model constructor.
     * @property {module:model/GithubComSatstreamSsUtilsStoreTransactionDocument}
     */
    GithubComSatstreamSsUtilsStoreTransactionDocument,

    /**
     * The ResponsesBlockRange model constructor.
     * @property {module:model/ResponsesBlockRange}
     */
    ResponsesBlockRange,

    /**
     * The ResponsesGetAddressBalance model constructor.
     * @property {module:model/ResponsesGetAddressBalance}
     */
    ResponsesGetAddressBalance,

    /**
     * The ResponsesGetAddressBalanceData model constructor.
     * @property {module:model/ResponsesGetAddressBalanceData}
     */
    ResponsesGetAddressBalanceData,

    /**
     * The ResponsesGetAddressMempoolTxs model constructor.
     * @property {module:model/ResponsesGetAddressMempoolTxs}
     */
    ResponsesGetAddressMempoolTxs,

    /**
     * The ResponsesGetAddressNonInscriptionUTXO model constructor.
     * @property {module:model/ResponsesGetAddressNonInscriptionUTXO}
     */
    ResponsesGetAddressNonInscriptionUTXO,

    /**
     * The ResponsesGetAddressNonInscriptionUTXOData model constructor.
     * @property {module:model/ResponsesGetAddressNonInscriptionUTXOData}
     */
    ResponsesGetAddressNonInscriptionUTXOData,

    /**
     * The ResponsesGetAddressRuneBalance model constructor.
     * @property {module:model/ResponsesGetAddressRuneBalance}
     */
    ResponsesGetAddressRuneBalance,

    /**
     * The ResponsesGetAddressRuneBalanceData model constructor.
     * @property {module:model/ResponsesGetAddressRuneBalanceData}
     */
    ResponsesGetAddressRuneBalanceData,

    /**
     * The ResponsesGetAddressRunesBalanceList model constructor.
     * @property {module:model/ResponsesGetAddressRunesBalanceList}
     */
    ResponsesGetAddressRunesBalanceList,

    /**
     * The ResponsesGetAddressRunesBalanceListData model constructor.
     * @property {module:model/ResponsesGetAddressRunesBalanceListData}
     */
    ResponsesGetAddressRunesBalanceListData,

    /**
     * The ResponsesGetAddressRunesBalanceListItem model constructor.
     * @property {module:model/ResponsesGetAddressRunesBalanceListItem}
     */
    ResponsesGetAddressRunesBalanceListItem,

    /**
     * The ResponsesGetAddressTimeframeBalance model constructor.
     * @property {module:model/ResponsesGetAddressTimeframeBalance}
     */
    ResponsesGetAddressTimeframeBalance,

    /**
     * The ResponsesGetAddressTimeframeBalanceData model constructor.
     * @property {module:model/ResponsesGetAddressTimeframeBalanceData}
     */
    ResponsesGetAddressTimeframeBalanceData,

    /**
     * The ResponsesGetAddressTimeframeBalanceItem model constructor.
     * @property {module:model/ResponsesGetAddressTimeframeBalanceItem}
     */
    ResponsesGetAddressTimeframeBalanceItem,

    /**
     * The ResponsesGetBlockByHash model constructor.
     * @property {module:model/ResponsesGetBlockByHash}
     */
    ResponsesGetBlockByHash,

    /**
     * The ResponsesGetBlockHeight model constructor.
     * @property {module:model/ResponsesGetBlockHeight}
     */
    ResponsesGetBlockHeight,

    /**
     * The ResponsesGetBlockHeightData model constructor.
     * @property {module:model/ResponsesGetBlockHeightData}
     */
    ResponsesGetBlockHeightData,

    /**
     * The ResponsesGetBlockInfo model constructor.
     * @property {module:model/ResponsesGetBlockInfo}
     */
    ResponsesGetBlockInfo,

    /**
     * The ResponsesGetBlockTransactions model constructor.
     * @property {module:model/ResponsesGetBlockTransactions}
     */
    ResponsesGetBlockTransactions,

    /**
     * The ResponsesGetFees model constructor.
     * @property {module:model/ResponsesGetFees}
     */
    ResponsesGetFees,

    /**
     * The ResponsesGetFeesData model constructor.
     * @property {module:model/ResponsesGetFeesData}
     */
    ResponsesGetFeesData,

    /**
     * The ResponsesGetMempoolTransactions model constructor.
     * @property {module:model/ResponsesGetMempoolTransactions}
     */
    ResponsesGetMempoolTransactions,

    /**
     * The ResponsesGetMempoolTxInfo model constructor.
     * @property {module:model/ResponsesGetMempoolTxInfo}
     */
    ResponsesGetMempoolTxInfo,

    /**
     * The ResponsesGetRuneHolders model constructor.
     * @property {module:model/ResponsesGetRuneHolders}
     */
    ResponsesGetRuneHolders,

    /**
     * The ResponsesGetRuneHoldersData model constructor.
     * @property {module:model/ResponsesGetRuneHoldersData}
     */
    ResponsesGetRuneHoldersData,

    /**
     * The ResponsesGetRuneInfo model constructor.
     * @property {module:model/ResponsesGetRuneInfo}
     */
    ResponsesGetRuneInfo,

    /**
     * The ResponsesGetRunesInfoList model constructor.
     * @property {module:model/ResponsesGetRunesInfoList}
     */
    ResponsesGetRunesInfoList,

    /**
     * The ResponsesGetRunesInfoListData model constructor.
     * @property {module:model/ResponsesGetRunesInfoListData}
     */
    ResponsesGetRunesInfoListData,

    /**
     * The ResponsesGetTransaction model constructor.
     * @property {module:model/ResponsesGetTransaction}
     */
    ResponsesGetTransaction,

    /**
     * The ResponsesGetTxInfo model constructor.
     * @property {module:model/ResponsesGetTxInfo}
     */
    ResponsesGetTxInfo,

    /**
     * The ResponsesGetTxInfoData model constructor.
     * @property {module:model/ResponsesGetTxInfoData}
     */
    ResponsesGetTxInfoData,

    /**
     * The ResponsesNonInscriptionUTXO model constructor.
     * @property {module:model/ResponsesNonInscriptionUTXO}
     */
    ResponsesNonInscriptionUTXO,

    /**
     * The ResponsesPaginationInfo model constructor.
     * @property {module:model/ResponsesPaginationInfo}
     */
    ResponsesPaginationInfo,

    /**
     * The ResponsesRuneHolder model constructor.
     * @property {module:model/ResponsesRuneHolder}
     */
    ResponsesRuneHolder,

    /**
     * The ResponsesRuneInfo model constructor.
     * @property {module:model/ResponsesRuneInfo}
     */
    ResponsesRuneInfo,

    /**
     * The ResponsesSendRawTransaction model constructor.
     * @property {module:model/ResponsesSendRawTransaction}
     */
    ResponsesSendRawTransaction,

    /**
     * The ResponsesSendRawTransactionData model constructor.
     * @property {module:model/ResponsesSendRawTransactionData}
     */
    ResponsesSendRawTransactionData,

    /**
    * The AddressesApi service constructor.
    * @property {module:api/AddressesApi}
    */
    AddressesApi,

    /**
    * The BlocksApi service constructor.
    * @property {module:api/BlocksApi}
    */
    BlocksApi,

    /**
    * The FeesApi service constructor.
    * @property {module:api/FeesApi}
    */
    FeesApi,

    /**
    * The MempoolApi service constructor.
    * @property {module:api/MempoolApi}
    */
    MempoolApi,

    /**
    * The RunesApi service constructor.
    * @property {module:api/RunesApi}
    */
    RunesApi,

    /**
    * The TransactionsApi service constructor.
    * @property {module:api/TransactionsApi}
    */
    TransactionsApi
};
