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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.StoreTransactionDocument = factory(root.SatstreamApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StoreTransactionDocument model module.
   * @module model/StoreTransactionDocument
   * @version 1.0
   */

  /**
   * Constructs a new <code>StoreTransactionDocument</code>.
   * Detailed information about a transaction
   * @alias module:model/StoreTransactionDocument
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StoreTransactionDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreTransactionDocument} obj Optional instance to populate.
   * @return {module:model/StoreTransactionDocument} The populated <code>StoreTransactionDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('blockheight'))
        obj.blockheight = ApiClient.convertToType(data['blockheight'], 'Number');
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('hex'))
        obj.hex = ApiClient.convertToType(data['hex'], 'String');
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('locktime'))
        obj.locktime = ApiClient.convertToType(data['locktime'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('vsize'))
        obj.vsize = ApiClient.convertToType(data['vsize'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {Number} blockheight
   */
  exports.prototype.blockheight = undefined;

  /**
   * @member {Number} fee
   */
  exports.prototype.fee = undefined;

  /**
   * @member {String} hash
   */
  exports.prototype.hash = undefined;

  /**
   * @member {String} hex
   */
  exports.prototype.hex = undefined;

  /**
   * @member {Number} index
   */
  exports.prototype.index = undefined;

  /**
   * @member {Number} locktime
   */
  exports.prototype.locktime = undefined;

  /**
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  /**
   * @member {String} txid
   */
  exports.prototype.txid = undefined;

  /**
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {Number} vsize
   */
  exports.prototype.vsize = undefined;

  /**
   * @member {Number} weight
   */
  exports.prototype.weight = undefined;


  return exports;

}));
