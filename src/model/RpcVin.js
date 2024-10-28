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
    define(['ApiClient', 'model/RpcPrevOut', 'model/RpcScriptSig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RpcPrevOut'), require('./RpcScriptSig'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.RpcVin = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.RpcPrevOut, root.SatstreamApi.RpcScriptSig);
  }
}(this, function(ApiClient, RpcPrevOut, RpcScriptSig) {
  'use strict';

  /**
   * The RpcVin model module.
   * @module model/RpcVin
   * @version 1.0
   */

  /**
   * Constructs a new <code>RpcVin</code>.
   * @alias module:model/RpcVin
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RpcVin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RpcVin} obj Optional instance to populate.
   * @return {module:model/RpcVin} The populated <code>RpcVin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('coinbase'))
        obj.coinbase = ApiClient.convertToType(data['coinbase'], 'String');
      if (data.hasOwnProperty('prevout'))
        obj.prevout = RpcPrevOut.constructFromObject(data['prevout']);
      if (data.hasOwnProperty('scriptSig'))
        obj.scriptSig = RpcScriptSig.constructFromObject(data['scriptSig']);
      if (data.hasOwnProperty('sequence'))
        obj.sequence = ApiClient.convertToType(data['sequence'], 'Number');
      if (data.hasOwnProperty('txid'))
        obj.txid = ApiClient.convertToType(data['txid'], 'String');
      if (data.hasOwnProperty('txinwitness'))
        obj.txinwitness = ApiClient.convertToType(data['txinwitness'], ['String']);
      if (data.hasOwnProperty('vout'))
        obj.vout = ApiClient.convertToType(data['vout'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} coinbase
   */
  exports.prototype.coinbase = undefined;

  /**
   * @member {module:model/RpcPrevOut} prevout
   */
  exports.prototype.prevout = undefined;

  /**
   * @member {module:model/RpcScriptSig} scriptSig
   */
  exports.prototype.scriptSig = undefined;

  /**
   * @member {Number} sequence
   */
  exports.prototype.sequence = undefined;

  /**
   * @member {String} txid
   */
  exports.prototype.txid = undefined;

  /**
   * @member {Array.<String>} txinwitness
   */
  exports.prototype.txinwitness = undefined;

  /**
   * @member {Number} vout
   */
  exports.prototype.vout = undefined;


  return exports;

}));
