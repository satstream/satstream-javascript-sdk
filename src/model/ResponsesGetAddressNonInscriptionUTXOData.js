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
import ApiClient from '../ApiClient';
import ResponsesNonInscriptionUTXO from './ResponsesNonInscriptionUTXO';

/**
 * The ResponsesGetAddressNonInscriptionUTXOData model module.
 * @module model/ResponsesGetAddressNonInscriptionUTXOData
 * @version 1.0.17
 */
export default class ResponsesGetAddressNonInscriptionUTXOData {
  /**
   * Constructs a new <code>ResponsesGetAddressNonInscriptionUTXOData</code>.
   * @alias module:model/ResponsesGetAddressNonInscriptionUTXOData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponsesGetAddressNonInscriptionUTXOData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponsesGetAddressNonInscriptionUTXOData} obj Optional instance to populate.
   * @return {module:model/ResponsesGetAddressNonInscriptionUTXOData} The populated <code>ResponsesGetAddressNonInscriptionUTXOData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponsesGetAddressNonInscriptionUTXOData();
      if (data.hasOwnProperty('cursor'))
        obj.cursor = ApiClient.convertToType(data['cursor'], 'Number');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('totalConfirmed'))
        obj.totalConfirmed = ApiClient.convertToType(data['totalConfirmed'], 'Number');
      if (data.hasOwnProperty('totalRunes'))
        obj.totalRunes = ApiClient.convertToType(data['totalRunes'], 'Number');
      if (data.hasOwnProperty('totalUnconfirmed'))
        obj.totalUnconfirmed = ApiClient.convertToType(data['totalUnconfirmed'], 'Number');
      if (data.hasOwnProperty('totalUnconfirmedSpend'))
        obj.totalUnconfirmedSpend = ApiClient.convertToType(data['totalUnconfirmedSpend'], 'Number');
      if (data.hasOwnProperty('utxo'))
        obj.utxo = ApiClient.convertToType(data['utxo'], [ResponsesNonInscriptionUTXO]);
    }
    return obj;
  }
}

/**
 * @member {Number} cursor
 */
ResponsesGetAddressNonInscriptionUTXOData.prototype.cursor = undefined;

/**
 * @member {Number} total
 */
ResponsesGetAddressNonInscriptionUTXOData.prototype.total = undefined;

/**
 * @member {Number} totalConfirmed
 */
ResponsesGetAddressNonInscriptionUTXOData.prototype.totalConfirmed = undefined;

/**
 * @member {Number} totalRunes
 */
ResponsesGetAddressNonInscriptionUTXOData.prototype.totalRunes = undefined;

/**
 * @member {Number} totalUnconfirmed
 */
ResponsesGetAddressNonInscriptionUTXOData.prototype.totalUnconfirmed = undefined;

/**
 * @member {Number} totalUnconfirmedSpend
 */
ResponsesGetAddressNonInscriptionUTXOData.prototype.totalUnconfirmedSpend = undefined;

/**
 * @member {Array.<module:model/ResponsesNonInscriptionUTXO>} utxo
 */
ResponsesGetAddressNonInscriptionUTXOData.prototype.utxo = undefined;

