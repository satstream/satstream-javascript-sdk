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

/**
 * The TestMempoolAcceptResult model module.
 * @module model/TestMempoolAcceptResult
 * @version 1.0.22
 */
export default class TestMempoolAcceptResult {
  /**
   * Constructs a new <code>TestMempoolAcceptResult</code>.
   * @alias module:model/TestMempoolAcceptResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TestMempoolAcceptResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestMempoolAcceptResult} obj Optional instance to populate.
   * @return {module:model/TestMempoolAcceptResult} The populated <code>TestMempoolAcceptResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TestMempoolAcceptResult();
      if (data.hasOwnProperty('allowed'))
        obj.allowed = ApiClient.convertToType(data['allowed'], 'Boolean');
      if (data.hasOwnProperty('fees'))
        obj.fees = ApiClient.convertToType(data['fees'], Object);
      if (data.hasOwnProperty('package-error'))
        obj.packageError = ApiClient.convertToType(data['package-error'], 'String');
      if (data.hasOwnProperty('reject-reason'))
        obj.rejectReason = ApiClient.convertToType(data['reject-reason'], 'String');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('vsize'))
        obj.vsize = ApiClient.convertToType(data['vsize'], 'Number');
      if (data.hasOwnProperty('wtxid'))
        obj.wtxid = ApiClient.convertToType(data['wtxid'], 'String');
    }
    return obj;
  }
}

/**
 * Whether this tx would be accepted to the mempool
 * @member {Boolean} allowed
 */
TestMempoolAcceptResult.prototype.allowed = undefined;

/**
 * Transaction fees
 * @member {Object} fees
 */
TestMempoolAcceptResult.prototype.fees = undefined;

/**
 * Package validation error, if any
 * @member {String} packageError
 */
TestMempoolAcceptResult.prototype.packageError = undefined;

/**
 * Rejection string
 * @member {String} rejectReason
 */
TestMempoolAcceptResult.prototype.rejectReason = undefined;

/**
 * The transaction hash in hex
 * @member {String} txid
 */
TestMempoolAcceptResult.prototype.txid = undefined;

/**
 * Virtual transaction size as defined in BIP 141
 * @member {Number} vsize
 */
TestMempoolAcceptResult.prototype.vsize = undefined;

/**
 * The transaction witness hash in hex
 * @member {String} wtxid
 */
TestMempoolAcceptResult.prototype.wtxid = undefined;

